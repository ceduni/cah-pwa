import React, { useState, useEffect } from 'react';

// Composant météo
function Weather() {
  // États pour stocker les données météo
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Paris');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Clé API d'OpenWeatherMap (remplacez par votre propre clé API)
  const apiKey = 'YOUR_API_KEY_HERE';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  // Effet pour récupérer les données météo
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Ville non trouvée');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]); // Réexécuter si la ville change

  // Affichage du composant
  return (
    <div>
      <h1>Météo</h1>
      {/* Formulaire pour changer de ville */}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Entrez une ville"
      />

      {loading && <p>Chargement...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && !loading && !error && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Température : {weatherData.main.temp}°C</p>
          <p>Humidité : {weatherData.main.humidity}%</p>
          <p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt={weatherData.weather[0].description}
            />
          </p>
        </div>
      )}
    </div>
  );
}

export default Weather;
