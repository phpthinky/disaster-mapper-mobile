import { useState, useRef } from 'react';
import { router } from '@inertiajs/react';
import MobileLayout from '../Layouts/MobileLayout';

export default function Report() {
    const [form, setForm] = useState({
        incident_type:'',
        severity:'',
        barangay:'',
        description:'',
        radius:'',
        latitude:'',
        longitude:'',
        photo_path:'',
    });
    const [photoPreview, setPhotoPreview] = useState(null);
    const cameraListenerRef = useRef(null);

    const incidentTypes = [
        'Flooding',
        'Landslide',
        'Strong Winds',
        'Damage House',
        'Road Blocked',
        'Missing person',
        'Medical Emergency',
        'Fire',
        'Other',
        ];
    const barangays = [
        'Arellano',
        'Batong Buhay',
        'Buenavista',
        'Burgos',
        'Claudio Salgado',
        'Gen. Emilio Aguinaldo',
        'Ligaya',
        'Paetan',
        'Poblacion',
        'San Agustin',
        'San Vicente',
        'Santo Niño',
        'Sta. Lucia',
        'San Nicolas',
        'Tuban',
        ];
    const severities =[
        'Minor',
        'Major',
        'Critical',
        ];
    const handleChange = (field,value) =>{
        setForm({...form, [field]:value});
    };


    const geoLocation = () =>{
        if(!navigator.geolocation){
            alert('Geolcation is not supported!');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            pos =>{
                setForm(prev => ({
                    ...prev,
                    latitude:pos.coords.latitude,
                    longitude:pos.coords.longitude,

            }));
            },
            error =>{
                switch(error.code){
                    case 1: alert('Permission denied! Please allow location access.'); break;
                    case 2: alert('Location unavailable!'); break;
                    case 3: alert('Location request time out!'); break;
                }
            }

        );
    };

    const takePhoto = async () =>{
        try {
            const { Camera, On, Off, Events } = await import('#nativephp');

            // Remove any previous listener to prevent stacking on repeated taps
            if (cameraListenerRef.current) {
                Off(Events.Camera.PhotoTaken, cameraListenerRef.current);
                cameraListenerRef.current = null;
            }

            const handler = (payload) => {
                const path = payload.path || payload.data;

                setForm(prev => ({
                    ...prev,
                    photo_path: path,
                }));

                // Convert native file path to a web-accessible URL for WebView preview
                const previewUrl = window.Capacitor?.convertFileSrc?.(path) ?? path;
                setPhotoPreview(previewUrl);
            };

            cameraListenerRef.current = handler;
            On(Events.Camera.PhotoTaken, handler);
            await Camera.getPhoto();

        } catch (error) {
            alert('Camera not available in browser. Test Jump.');
        }
    };

    const handleSubmit = () =>{
        console.log('Form data: ',form);
        router.post('/report', form, {
            onSuccess: () => {
                alert('Report submitted successfully!');
                setForm({
                    incident_type: '',
                    severity:'',
                    barangay:'',
                    description:'',
                    radius:'',
                    latitude:'',
                    longitude:'',
                    photo_path:'',
                });
                setPhotoPreview(null);
            },
            onError: (errors)=>{
                alert('Please fill all required fileds!');
                console.log(errors);
            }
        });
    };



    return (
        <MobileLayout title="File Report" active="report">
            <div className="p-4 flex flex-col gap-4">
                {/*Incident Types*/}
                <div className="bg-white rounded-xl p-4 shadow">
                    <label className="text-xs uppercase tracking-wide">Incident Type</label>
                    <select
                        className="w-full mt-2 p-2 border border-gray-200 rounded-lg text-sm"  
                        value={form.incident_type}
                        onChange={e => handleChange('incident_type',e.target.value)}>
                    <option value ="">Select incident type..</option>
                    {incidentTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/*Severity*/}
                <div className="bg-white rounded-xl p-4 shadow">
                    <label className="text-xs uppercase tracking-wide">Sevirity</label>
                    <div className="flex gap-2 mt-2">
                        {severities.map(level =>(
                            <button
                                key={level}
                                onClick={() => handleChange('severity',level)}
                                className={`flex-1 py-2 rounded-lg text-sm font-medium border 
                                ${form.severity === level ? 
                                    level === 'Minor' 
                                    ? 'bg-yellow-400 text-white border-yellow-400' 
                                    : level === 'Major' 
                                        ? 'bg-orange-500 text-white border-orange-500' 
                                        : 'bg-red-600 text-white border-red-600' 
                                    : 'bg-white text-gray-400 border-gray-200'
                                }`}>
                                {level}
                                </button>

                        ))}
                    </div>
                </div>

                {/*Barangays*/}
                <div className="bg-white rounded-xl p-4 shadow">
                    <label className="text-xs uppercase tracking-wide">
                        Barangay
                    </label>
                    <select className="w-full mt-2 p-2 border border-gray-200 rounded-lg text-sm"
                        value={form.barangay}
                        onChange={e => handleChange('barangay',e.target.value)} >
                        <option value="">Select barangay...</option>
                        {barangays.map(brgy =>(
                            <option key={brgy} value={brgy} >{brgy}</option>
                            ))}
                        
                    </select>
                </div>
                {/*Incident Description*/}
                <div className="bg-white rounded-xl p-4 shadow">
                        <label className="text-xs uppercase tracking-wide">Description</label>
                        <textarea className="w-full mt-2 p-2 border border-gray-200 rounded-lg text-sm"
                            value={form.description} 
                            placeholder="Describe affected area..." 
                            onChange={e => handleChange('description', e.target.value)}

                        />


                </div>

                {/*Incident radius*/}
                <div className="bg-white rounded-xl p-4 shadow">
                    <label className="text-xs uppercase tracking-wide">Estimated affected area</label>
                    <div className="flex gap-2 mt-2">
                    {['50m','100m','500m','1km'].map(r =>
                        <button
                            key={r} 
                            onClick={() => handleChange('radius',r)}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium border
                                ${form.radius === r
                                 ? 'bg-red-700 text-white border-red-700' 
                                 : 'bg-white text-gray-400 border-gray-200'
                            }`}>
                        {r}</button>

                        )}
                        
                    </div>
                </div>

                {/* GPS Location */}
                <div className="bg-white rounded-xl p-4 shadow">
                    <label className="text-xs text-gray-500 uppercase tracking-wide">GPS Location</label>
                    <button
                        onClick={geoLocation} 
                        className="w-full mt-2 gap-2 bg-gray-100  border border-gray-200 rounded-lg text-sm  text-gray-500 items-center justify-center gap-2">
                        <span>📍</span>
                        {form.latitude ? `${form.latitude}, ${form.longitude}` : 'Tap to capture location'}
                        </button>
                </div>

                {/*Take photos*/}
                <div className="bg-white rounded-xl p-4 shadow">
                    <label className="text-xs text-gray-500 uppercase tracking-wide">Photo documentations</label>
                    <button 
                        onClick ={takePhoto}
                        className="w-full mt-2 py-2 border-gray-100 border  border-gray-200 rounded-lg items-center"
                    ><span>📸</span>
                    {form.photo_path ? 'Photo captured! ✅' : 'Take Photo'}
                    </button>
                    {photoPreview && (
                        <img src={photoPreview}
                            className="mt-2 w-full rounded-lg"
                            alt="Incident photo"
                            />
                        )}
                </div>

                {/*Handle submit*/}
                <button onClick={handleSubmit} 
                className="w-full py-4 bg-red-700 text-white  rounded-lg font-bold text-lg">Submit</button>

            </div>
        </MobileLayout>
    );
}