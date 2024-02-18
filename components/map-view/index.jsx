import { useEffect, useState } from "react";
import { Map, Marker } from "react-map-gl";

const MapView = ({center}) => {
  const [viewState, setViewState] = useState({});

  useEffect(() => {
    const { longitude, latitude } = center;

    const newState = { ...viewState, longitude, latitude, zoom: 16 };

    setViewState(newState);
  }, [center]);


  return (
    <View style={{ flex: 1 }}>
      <Map
      mapboxAccessToken="pk.eyJ1Ijoibm9iaXRhODkiLCJhIjoiY2xyajRxMGVnMDVuajJrcW41aGFtYzh5YSJ9.1A258o2oKsYxbYY8Qfx2yQ"
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 10,
      }}
      onMove={(e) => setViewState(e.viewState)}
      mapStyle="mapbox://styles/nobita89/clrn549cu004j01o3h8f38nmr"
      {...viewState}
    >
      {markers.map((mark) => {
        const { id, longitude, latitude } = mark;
        return (
          <Marker
            key={id}
            color="black"
            longitude={longitude}
            latitude={latitude}
          />
        );
      })}
    </Map>
    </View>
  )
}

export default MapView