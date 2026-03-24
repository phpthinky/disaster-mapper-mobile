<?php

namespace App\Http\Controllers;

use App\Models\FieldReport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FieldReportController extends Controller
{
    public function index()
    {
        $reports = FieldReport::latest()->get();
        return Inertia::render('Report', ['reports' => $reports]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'incident_type' => 'required|string',
            'severity'      => 'required|in:Minor,Major,Critical',
            'barangay'      => 'required|string',
            'description'   => 'required|string',
            'radius'        => 'nullable|string',
            'latitude'      => 'nullable|numeric',
            'longitude'     => 'nullable|numeric',
            'photo'         => 'nullable|image|max:10240',
            'reported_by'   => 'nullable|string',
        ]);

        $photoPath = null;
        if ($request->hasFile('photo')) {
            // Store in storage/app/photos — accessible by PHP on-device, no public symlink needed
            $photoPath = $request->file('photo')->store('photos', 'local');
        }

        FieldReport::create([
            'incident_type' => $validated['incident_type'],
            'severity'      => $validated['severity'],
            'barangay'      => $validated['barangay'],
            'description'   => $validated['description'],
            'radius'        => $validated['radius'] ?? null,
            'latitude'      => $validated['latitude'] ?? null,
            'longitude'     => $validated['longitude'] ?? null,
            'photo_path'    => $photoPath,
            'reported_by'   => $validated['reported_by'] ?? null,
        ]);

        return redirect()->back()->with('success', 'Report successfully submitted!');
    }

    public function map()
    {
        $reports = FieldReport::latest()->get();
        return Inertia::render('Map', ['reports' => $reports]);
    }
}
