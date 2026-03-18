import MobileLayout from '../Layouts/MobileLayout';

export default function Home() {
    return (
        <MobileLayout title="Disaster Mapper">
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

                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-4 shadow">
                    <h3 className="font-bold text-gray-700 mb-3">Recent Reports</h3>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 border-b pb-2">
                            <span className="text-2xl">🌊</span>
                            <div>
                                <p className="text-sm font-medium">Flooding - Brgy. Batong Buhay</p>
                                <p className="text-xs text-gray-400">10 mins ago</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 border-b pb-2">
                            <span className="text-2xl">🏚️</span>
                            <div>
                                <p className="text-sm font-medium">Damaged House - Brgy. Ligaya</p>
                                <p className="text-xs text-gray-400">25 mins ago</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🚨</span>
                            <div>
                                <p className="text-sm font-medium">Road Blocked - Brgy. Malpalon</p>
                                <p className="text-xs text-gray-400">1 hour ago</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </MobileLayout>
    );
}