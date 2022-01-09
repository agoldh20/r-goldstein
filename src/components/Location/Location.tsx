import React, {useRef, useEffect, useState} from 'react';
import './Location.scss';
import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

const token = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

mapboxgl.accessToken = token;

const Location = (): JSX.Element => {
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-87.74340414650513, 42.01429086172376],
            zoom: 15
        });

        const nav = new mapboxgl.NavigationControl();
        // @ts-ignore
        map.current.addControl(nav, "top-right");

        const directions = new MapboxDirections({
            accessToken: token,
        });

        // @ts-ignore
        map.current.addControl(directions, 'top-left');

        directions.setOrigin("");
        directions.setDestination("7370 North Lincoln Avenue, Lincolnwood, Illinois 60712, United States");

        new mapboxgl.Marker()
            .setLngLat([-87.74340414650513, 42.01429086172376])
            .addTo(map.current);
    });


    return (
        <div className="location">
            <div className="we-are-at">
                We are located at:
            </div>
            <div className="address">
                7370 N Lincoln Ave Unit B
                <br/>
                Lincolnwood, IL 60712
            </div>
            <div ref={mapContainer} className="map-container"/>
        </div>
    );
};

export default Location;
