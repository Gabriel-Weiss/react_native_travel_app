import React, { useEffect, useRef } from "react";
import { GOOGLE_API_KEY } from "@env";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEndPoint,
  selectStartPoint,
  setTravelTime,
} from "../redux/appSlice";
import MapViewDirections from "react-native-maps-directions";

export default function Map() {
  const mapRef = useRef(null);
  const dispatch = useDispatch();
  const startPoint = useSelector(selectStartPoint);
  const endPoint = useSelector(selectEndPoint);

  useEffect(() => {
    if (!startPoint || !endPoint) return;
    mapRef.current.fitToSuppliedMarkers(["startPoint", "endPoint"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [startPoint, endPoint]);

  useEffect(() => {
    if (!startPoint || !endPoint) return;
    const travelTime = () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${endPoint}&origins=${startPoint}&key=${GOOGLE_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => dispatch(setTravelTime(data.rows[0].elements[0])))
        .catch((error) => console.error(error));
    };
  }, [startPoint, endPoint, GOOGLE_API_KEY]);

  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: startPoint?.location?.lat,
        longitude: startPoint?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {startPoint && endPoint && (
        <MapViewDirections
          origin={startPoint?.description}
          destination={endPoint?.description}
          strokeColor={DefaultTheme.colors.secondary}
          strokeWidth={3}
          apikey={GOOGLE_API_KEY}
        />
      )}
      {startPoint?.location && (
        <Marker
          coordinate={{
            latitude: startPoint?.location?.lat,
            longitude: startPoint?.location?.lng,
          }}
          title="Initial point"
          description={startPoint?.description}
          identifier="startPoint"
        />
      )}
      {endPoint?.location && (
        <Marker
          coordinate={{
            latitude: startPoint?.location?.lat,
            longitude: startPoint?.location?.lng,
          }}
          title="Final point"
          description={endPoint?.description}
          identifier="endPoint"
        />
      )}
    </MapView>
  );
}
