import React from 'react';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100vh',
    height: '100vh'
};

const center = {
    lat: 24.895202922281204, 
    lng: 91.86872639737932
};

const MyComponent = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={14}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <Marker>
                   
                </Marker>
            </GoogleMap>
        </LoadScript>
    );
};

export default MyComponent;