import { useState } from 'react';
import MobileLayout from '../Layouts/MobileLayout';
import ReactTimeAgo from 'react-time-ago';

import javascriptTimeAgo from 'javascript-time-ago';

// Import locales (necessary for the library to work)
import en from 'javascript-time-ago/locale/en.json';
javascriptTimeAgo.addDefaultLocale(en);



const incidentEmoji = (type) => {
        if (type === 'Flooding') return '🌊';
        if (type === 'Landslide') return '⛰️';
        if (type === 'Fire') return '🔥';
        if (type === 'Strong Winds') return '💨';
        if (type === 'Damage House') return '🏚️';
        if (type === 'Road Blocked') return '🚨';
        if (type === 'Missing person') return '👤';
        if (type === 'Medical Emergency') return '🚑';
        return '⚠️';
    };

export default function Home({reports}) {
    return (
        <MobileLayout title="Disaster Mapper" active="home">
            <div className="p-4 flex flex-col gap-4">

                {/* Alert Status Card */}
                <div className="bg-red-600 text-white rounded-xl p-4 shadow">
                    <p className="text-xs uppercase tracking-widest opacity-80">Current Alert Level</p>
                    <h2 className="text-3xl font-bold mt-1">ALERT 2</h2>
                    <p className="text-sm opacity-80 mt-1">Tropical Depression • Sablayan</p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-4 shadow">
                        <p className="text-xs text-gray-500">Affected Families</p>
                        <h3 className="text-2xl font-bold text-red-700">124</h3>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow">
                        <p className="text-xs text-gray-500">Incidents Filed</p>
                        <h3 className="text-2xl font-bold text-red-700">37</h3>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow">
                        <p className="text-xs text-gray-500">Evacuees</p>
                        <h3 className="text-2xl font-bold text-orange-500">89</h3>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow">
                        <p className="text-xs text-gray-500">Barangays Affected</p>
                        <h3 className="text-2xl font-bold text-orange-500">5</h3>
                    </div>
                </div>

                {/* Recent Reports */}
                <div className="bg-white rounded-xl p-4 shadow">
                    <h3 className="font-bold text-gray-700 mb-3">Recent Reports</h3>

                    <div className="flex flex-col gap-3">
                    {reports && reports.length > 0 ? 
                    (reports.map(report =>(
                        <div key={report.id} className="flex items-center gap-3 border-b pb-2">
                            <span className="text-2xl">{incidentEmoji(report.incident_type)}</span>

                            <div>
                                <p className="text-sm font-medium">{report.incident_type} - {report.barangay}</p>
                                <p className="text-xs text-gray-400"><ReactTimeAgo date={new Date(report.created_at)} locale="en-US" /></p>
                            </div>
                       
                        </div>
                    ))) : (

                        <p className="text-xs text-gray-400">No reports yet</p> )

}
                    </div>
                </div>

            </div>
        </MobileLayout>
    );
}