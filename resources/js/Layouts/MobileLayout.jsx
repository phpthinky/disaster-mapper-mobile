import { router } from '@inertiajs/react';

export default function MobileLayout({ children, title = 'Disaster Mapper', active = 'home' }) {
    return (
        <div className="flex flex-col h-screen bg-gray-100">

            {/* Top Bar */}
            <div style={{ paddingTop: '30px' }}
                 className="bg-red-700 text-white px-4 py-3 flex items-center gap-2 shadow-md">
                <span className="text-xl">🗺️</span>
                <h1 className="text-lg font-bold tracking-wide">{title}</h1>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto">
                {children}
            </div>

            {/* Bottom Navigation */}
            <div style={{ paddingBottom: '20px' }}
                 className="bg-white border-t border-gray-200 flex justify-around items-center py-2 shadow-lg">
                <button onClick={() => router.visit('/')}
                        className={`flex flex-col items-center gap-1 ${active === 'home' ? 'text-red-700' : 'text-gray-400'}`}>
                    <span className="text-2xl">🏠</span>
                    <span className="text-xs font-medium">Home</span>
                </button>
                <button onClick={() => router.visit('/report')}
                        className={`flex flex-col items-center gap-1 ${active === 'report' ? 'text-red-700' : 'text-gray-400'}`}>
                    <span className="text-2xl">📋</span>
                    <span className="text-xs font-medium">Report</span>
                </button>
                <button onClick={() => router.visit('/map')}
                        className={`flex flex-col items-center gap-1 ${active === 'map' ? 'text-red-700' : 'text-gray-400'}`}>
                    <span className="text-2xl">🗺️</span>
                    <span className="text-xs font-medium">Map</span>
                </button>
                <button onClick={() => router.visit('/profile')}
                        className={`flex flex-col items items-center gap-1 ${active === 'profile' ? 'text-red-700' : 'text-gray-400'}`}>
                    <span className="text-2xl">👤</span>
                    <span className="text-xs font-medium">Profile</span>
                </button>
            </div>

        </div>
    );
}