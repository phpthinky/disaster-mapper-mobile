export default function MobileLayout( {children, title = 'Disaster Mapper'} ){
	return (
			<div className="flex flex-col  h-screen bg-gray-100" style={{
         paddingTop: 'env(safe-area-inset-top)',
         paddingBottom: 'env(safe-area-inset-bottom)',
     }}>

				{/* Top Bar */}
				<div className="bg-red-700 text-white px-4 py-3 flex items-center gap-2">
					<span className="text-xl">🗺️</span>
					<h1 className="text-lg font-bold tracking-wide">{title}</h1>
				</div>

				{/*Main Content*/}
				<div className="flex-1 overflow-y-auto">
					{children}
				</div>

				   {/* Bottom Navigation */}
            <div className="bg-white border-t border-gray-200 flex justify-around items-center py-2 shadow-lg">
                <button className="flex flex-col items-center gap-1 text-red-700">
                    <span className="text-2xl">🏠</span>
                    <span className="text-xs font-medium">Home</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                    <span className="text-2xl">📋</span>
                    <span className="text-xs font-medium">Report</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                    <span className="text-2xl">🗺️</span>
                    <span className="text-xs font-medium">Map</span>
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                    <span className="text-2xl">👤</span>
                    <span className="text-xs font-medium">Profile</span>
                </button>
            </div>

        </div>
    );
}