
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const position = [23.6850, 90.3563]; // Center of Bangladesh

// Optional custom icon (can skip for default)
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

// Helper component to move map
function FlyToDistrict({ coords }) {
    const map = useMap();
    if (coords) {
        map.flyTo(coords, 14, { duration: 1.5 });
    }
    return null;
}

const BangladeshMap = ({ serviceCenters }) => {
    const [searchText, setSearchText] = useState('');
    const [activeCoords, setActiveCoords] = useState(null);
    const [activeDistrict, setActiveDistrict] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const district = serviceCenters.find(d =>
            d.district.toLowerCase().includes(searchText.toLowerCase())
        );
        if (district) {
            setActiveCoords([district.latitude, district.longitude]);
            setActiveDistrict(district.district);
        }
    };

    return (
        <div className="h-[800px] w-full rounded-lg overflow-hidden   ">

            {/* <form
                onSubmit={handleSearch}
                className="z-2 w-full mb-20 px-4 flex bg-gray-400 border-2 border-amber-100"
            > */}
            {/* <input
                    type="text"
                    placeholder="Search district..."
                    className=" px-4 py-2 border rounded-lg outline-none"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                /> */}
            {/* <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                >
                    Go
                </button> */}
            {/* </form> */}
            <form
                onSubmit={handleSearch}
                className="z-10 w-full h-14 max-w-xl  mt-4 mb-10  flex border-2 border-[#EAECED] bg-[#EAECED] rounded-r-full shadow-md"
            >
                <FaSearch size={30} className='mt-3 ml-2' />
                <input
                    type="text"
                    placeholder="Search here"
                    className="flex-grow px-4 py-2 rounded-l-md text-lg font-semibold outline-none"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-secondary w-32  text-base-200 text-xl font-bold px-4 py-2 rounded-full hover:bg-lime-400"
                >
                    Search
                </button>

            </form>

            <hr className='w-full mt-10 mb-8 border-dashed border-gray-400 border-t-2 opacity-30 ' />
            <h2 className='text-2xl font-bold text-base-200'>We deliver almost all over Bangladesh</h2>



            {/* map container */}
            <MapContainer center={position} zoom={8} scrollWheelZoom={true} className="h-full w-full border-3 border-[#EAECED] z-1 mt-4 p-8">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FlyToDistrict coords={activeCoords} />


                {
                    serviceCenters.map((center, index) => <Marker
                        key={index}
                        position={[center.latitude, center.longitude]}
                        icon={customIcon}>
                        <Popup autoOpen={center.district === activeDistrict}>
                            <strong>{center.district}</strong><br />
                            {center.covered_area.join(', ')}
                        </Popup>
                    </Marker>)
                }
            </MapContainer>
        </div>
    );
};

export default BangladeshMap;