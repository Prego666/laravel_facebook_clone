<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class GetAuthUserTest extends TestCase
{
    use RefreshDatabase;
    /** @test */
    public function auth_user_can_be_fetched()
    {
        $this->actingAs($user=factory(User::class)->create(), 'api');

        $response = $this->get('/api/auth_user');

        $response->assertStatus(200)->assertJson([
           'data' => [
               'user_id' => $user->id,
               'attributes' => [
                   'name' => $user->name
               ]
           ],
           'links' => [
               'self' => url('/users/'.$user->id)
           ]
        ]);
    }

}
