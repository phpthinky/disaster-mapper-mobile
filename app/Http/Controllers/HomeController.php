<?php

namespace App\Http\Controllers;

use App\Models\FieldReport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //

    public function index()
    {
        $reports = FieldReport::latest()->get();
        return Inertia::render('Home',[
                'reports'=>$reports,
            ]
        );
    }

}
