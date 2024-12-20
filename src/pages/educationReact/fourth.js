import React, { useState, useEffect } from "react";

const Fourth = () => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    name: null,
  });
  const [error, setError] = useState(null);

  const reverseGeocode = async (latitude, longitude) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();
    if (data.address) {
      const locationName = data.display_name;
      return locationName;
    } else {
      throw new Error("No results found");
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const locationName = await reverseGeocode(latitude, longitude);
            setLocation({ latitude, longitude, name: locationName });
          } catch (error) {
            setError(error.message);
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Location: {location.name}</p>
        </div>
      )}
    </div>
  );
};

export default Fourth;
