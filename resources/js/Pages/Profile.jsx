import MobileLayout from '../Layouts/MobileLayout';

export default function Profile() {
    const user = {
        name: 'Harold Rita',
        role: 'Field Reporter',
        barangay: 'Ligaya',
        municipality: 'Sablayan',
        province: 'Occidental Mindoro',
        phone: '09106344675',
        avatar: '👤',
    };

    return (
        <MobileLayout title="Field Worker" active="profile">
            <div className="p-4 flex flex-col gap-4">

                {/* Profile Card */}
                <div className="bg-red-700 text-white rounded-xl p-6 shadow flex flex-col items-center">
                    <div className="text-6xl mb-3">👤</div>
                    <h2 className="text-xl font-bold">{user.name}</h2>
                    <p className="text-sm opacity-80">{user.role}</p>
                    <span className="mt-2 px-3 py-1 bg-white text-red-700 rounded-full text-xs font-bold">
                        {user.barangay}
                    </span>
                </div>

                {/* Info Cards */}
                <div className="bg-white rounded-xl p-4 shadow flex flex-col gap-3">
                    <h3 className="font-bold text-gray-700">Field Worker Info</h3>

                    <div className="flex justify-between border-b pb-2">
                        <span className="text-xs text-gray-500">Municipality</span>
                        <span className="text-xs font-medium">{user.municipality}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-xs text-gray-500">Province</span>
                        <span className="text-xs font-medium">{user.province}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                        <span className="text-xs text-gray-500">Phone</span>
                        <span className="text-xs font-medium">{user.phone}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-xs text-gray-500">Role</span>
                        <span className="text-xs font-medium">{user.role}</span>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-4 shadow text-center">
                        <h3 className="text-2xl font-bold text-red-700">12</h3>
                        <p className="text-xs text-gray-500">Reports Filed</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow text-center">
                        <h3 className="text-2xl font-bold text-orange-500">3</h3>
                        <p className="text-xs text-gray-500">Pending Sync</p>
                    </div>
                </div>

                {/* Logout */}
                <button className="w-full py-3 border-2 border-red-700 text-red-700 rounded-xl font-bold">
                    LOGOUT
                </button>

                <div className="h-4" />

            </div>
        </MobileLayout>
    );
}