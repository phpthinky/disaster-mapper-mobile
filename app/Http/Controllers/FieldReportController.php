<?php

namespace App\Http\Controllers;

use App\Models\FieldReport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FieldReportController extends Controller
{
    //

    public function index()
    {
        // code...
        $reports  = FieldReport::latest()->get();
        return Inertia::render('Report',['reports'=>$reports,]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'incident_type'     =>      'required|string',
            'severity'          =>      'required|in:Minor,Major,Critical',
            'barangay'          =>      'required|string',
            'description'       =>      'required|string',
            'radius'            =>      'nullable|string',
            'latitude'          =>      'nullable|numeric',
            'longitude'         =>      'nullable|numeric',
            'photo_path'        =>      'nullable|string',
            'reported_by'       =>      'nullable|string',
        ]);

        FieldReport::create($validated);

        return  redirect()->back()->with('success','Report successfully submitted!');
    }
    public function map()
    {
        $reports = FieldReport::latest()->get();
        return Inertia::render('Map', [
            'reports' => $reports,
        ]);
    }
}
