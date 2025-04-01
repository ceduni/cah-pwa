import { useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from './utils/faker';
import { isAfter, isBefore, isWithin, toDateString } from './utils/datefns';
import './App.css';

/**
 * 
 * @param {string} s 
 * @returns 
 */
const isDateValid = (s) => s.length > 8

function App() {
  const DATA = API.getData();
  
  const [dateDebut, setDateDebut] = useState('');
  const [dateFin, setDateFin] = useState('');
  const [data, setData] = useState(DATA);

  function applyFilters() {
    const isDateDebutValid = isDateValid(dateDebut);
    const isDateFinValid = isDateValid(dateFin);

    
    if (!dateDebut && !dateFin) {
      return DATA;
    }

    if (dateDebut && dateFin && isBefore(dateFin, dateDebut)) {
      alert("Assurez-vous que la date de fin est supérieure à la date de début");
      return DATA;
    }

    return DATA.filter((item) => {
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

  function handleSubmit(event) {
    event.preventDefault();

    const filteredData = applyFilters();
    setData(filteredData);
  }

  return (
    <div>
      <h1>Jardins communautaires</h1>

      <form className='filters' action="" onSubmit={handleSubmit}>
        <label className='filter filter--date'>
          <b className='lbl'>De:</b> <input type="date" name="dateDepart" id="dateDepart" onChange={(e) => setDateDebut(e.target.value)} value={dateDebut} />
        </label>
        <label className='filter filter--date'>
          <b className='lbl'>À:</b> <input type="date" name="dateFin" id="dateFin" onChange={(e) => setDateFin(e.target.value)} value={dateFin} />
        </label>
        <button className='btn-filter' type='submit'>Filtrer</button>
      </form>

      <ul className='bare-list cards'>
        {data?.map(jardin =>
          <li className='card' key={jardin.id}>
            <Link className='card-link' to={`/item/${jardin.id}`}>
              <table style={{ width: '100%' }}>
                <tr>
                  <td>Nom:</td>
                  <td>{jardin.nom}</td>
                </tr>
                <tr>
                  <td>Adresse:</td>
                  <td>{jardin.adresse}</td>
                </tr>
                <tr>
                  <td>Arrondissement:</td>
                  <td>{jardin.arrondissement}</td>
                </tr>
                <tr>
                  <td>Ouvert le:</td>
                  <td>{toDateString(jardin.dateOuverture, 'fr')}</td>
                </tr>
              </table>
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
