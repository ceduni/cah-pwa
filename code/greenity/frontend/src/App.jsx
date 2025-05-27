import { useEffect } from 'react';
import Filters from './components/Filters';
import GardenList from './components/GardenList';
import { isAfter, isBefore, isWithin } from './utils/datefns';
import './App.css';
import useGardenData from './hooks/useGardenData';

/**
 * 
 * @param {string} 
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
