<?php

namespace App\Exceptions;

use Exception;

class ValidationErrorException extends Exception
{
    /**
     * Render the exception as an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function render($request)
    {
        return response()->json([
            'errors' => [
                'status' => 422,
                'title' => 'Validation error',
                'detail' => 'Your request is malformed or missing fields',
                'meta' => json_decode($this->getMessage())
            ]
        ], 422);
    }
}
