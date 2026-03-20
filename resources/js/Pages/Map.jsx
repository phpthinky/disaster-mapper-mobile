import { useState } from 'react';
import MobileLayout	from '../Layouts/MobileLayout';

export	default	function	Map(){
	const [filter, setFilter] = useState('All');
	
	const incidents = [
			{ id:1, type:'Flooding', barangay:'Batong Buhay', severity:'Critical', time: '10 mis ago', emoji: '🌊' },
			{ id:2, type: 'Damage House', barangay: 'Ligaya', severity: 'Major', time: '25 mins ago', emoji: '🏚️'},
			{ id: 3, type: 'Road Blocked', barangay: 'Malpalon', severity: 'Minor', time: ' 1 hour ago', emoji:'🚨'},
			{ id: 4, type: 'Landslide', barangay: 'Paetan', severity: 'Critical', time: '2 hours ago', emoji: '⛰️'},
		];	
	const filters = ['All','Critical', 'Major', 'Minor'];
	const severityColor = (severity) => {
			if(severity	 === 'Critical') return	'text-red-600 bg-red-50';
			if(severity	=== 'Major') return 'text-orange-500 bg-orange-50';
			return	'text-yellow-500 bg-yellow-50';
	};
	const	filtered = filter === 'All'
			? incidents	
			: incidents.filter(i => i.severity	=== filter);

	return	(
		<MobileLayout	title="Incident Map" active="map">
			<div	className	="p-4 flex flex-col gap-4">

				{/*Filter buttosns*/}
				<div className="flex gap-2">
					{filters.map(f => (
							<button
								key={f}
								onClick={() => setFilter(f)} 
								className={`flex-1 py-2 rounded-lg text-xs font-medium border 
									${filter === f
										? 'bg-red-700 text-white border-red-700'
										: 'bg-white text-gray-400 border-gray-200'
									}
								`}
							>{f}</button>
						))}
				</div>

				{/*Incident List*/}
				<div className="flex flex-col gap-3">
					{filtered.map(incident =>(
						<div key={incident.id} 
						className="bg-white rounded-lg p-4 shadow flex items-center gap-3">
							<span className="text-3xl">{incident.emoji}</span>
							<div className="flex-1">
								<div className="flex justify-between items-start">
									<p className="font-medium text-sm">{incident.type}</p>
									<span className={`text-xs px-2 py-1 rounded-full font-medium ${severityColor(incident.severity)}`}>
										{incident.severity}
									</span>
								</div>
								<p className="text-xs text-gray-500 mt-1">📍  Brgy.{incident.barangay}</p>
								<p className="text-xs text-gray-400">{incident.time}</p>
							</div>
						</div>
						))}
				</div>

                {/* Empty State */}
                {filtered.length === 0 && (
                    <div className="text-center py-12 text-gray-400">

                        <p className="text-4xl mb-2">🗺️</p>
                        <p className="text-sm">No incidents found</p>
                    </div>

                    )};

			</div>
		</MobileLayout>	
		);
}