<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function () {

    Route::get('auth_user', 'AuthUserController@show');

    Route::apiResources([
        'posts' => 'PostController',
        'users' => 'UserController',
        'users/{user}/posts' => 'UserPostController',
        '/friend-request' => 'FriendRequestController',
        '/friend-request-response' => 'FriendRequestResponseController',
        '/posts/{post}/like' => 'PostLikeController',
        '/posts/{post}/comment' => 'PostCommentController',
        '/user-images' => 'UserImageController'
    ]);
});
