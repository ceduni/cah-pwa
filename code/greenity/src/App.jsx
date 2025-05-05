import { useEffect } from 'react';
import Filters from './components/Filters';
import GardenList from './components/GardenList';
import { isAfter, isBefore, isWithin } from './utils/datefns';
import './App.css';
import {onMessageListener, requestFirebaseNotificationPermission } from './firebase';
import useGardenData from './hooks/useGardenData';

/**
 * 
 * @param {string} s 
 * @returns 
 */
const isDateValid = (s) => s.length > 8

function App() {
  const { data, isLoading, errors } = useGardenData();

  function applyFilters(dateDebut, dateFin) {
    const isDateDebutValid = isDateValid(dateDebut);
    const isDateFinValid = isDateValid(dateFin);
    let filteredData = DATA;

    if (!dateDebut && !dateFin) {
      filteredData = DATA;
    } else if (dateDebut && dateFin && isBefore(dateDebut, dateFin)) {
      alert("Assurez-vous que la date de fin est supérieure à la date de début");
      filteredData = DATA;
    } else {
      filteredData = DATA.filter((item) => {
        if (isDateDebutValid && isDateFinValid) {
          return isWithin(item.dateOuverture, dateDebut, dateFin);
        }
        if (isDateDebutValid) {
          return isAfter(dateDebut, item.dateOuverture);
        }
        if (isDateFinValid) {
          return isBefore(dateFin, item.dateOuverture);
        }
      });
    }

    setData(filteredData);
  }

  useEffect(() => {
    requestFirebaseNotificationPermission()
      .then((token) => {
        console.log("FCM Token:", token);
      })
      .catch((error) => {
        console.error("Error getting FCM token:", error);
      });

    onMessageListener()
      .then((payload) => {
        console.log("Message received. ", payload);
      })
      .catch((err) => console.log("failed: ", err));
  }, []);

  if (isLoading) {
    return "Loading...";
  }

  if (errors) {
    return "Oups! Une erreur est survenue"; 
  }

  return (
    <div>
      <h1>Jardins communautaires</h1>

      <Filters postSubmit={applyFilters} />
      <GardenList gardens={data} />
    </div>
  )
}

export default App
