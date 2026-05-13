<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class TestController extends Controller
{
    public function index()
    {
        $time = Cache::remember('time_data', 60, function () {
            return now()->toDateTimeString();
        });

        return response()->json([
            'message' => 'Laravel API Working!',
            'cached_time' => $time
        ]);
    }
}