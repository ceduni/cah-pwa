import { useState } from 'react';

function Filters({postSubmit}) {
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        postSubmit(dateDebut, dateFin);
    }

    return (
        <form className='filters' action="" onSubmit={handleSubmit}>
            <label className='filter filter--date'>
                <b className='lbl'>De:</b> <input type="date" name="dateDepart" id="dateDepart" onChange={(e) => setDateDebut(e.target.value)} value={dateDebut} />
            </label>
            <label className='filter filter--date'>
                <b className='lbl'>À:</b> <input type="date" name="dateFin" id="dateFin" onChange={(e) => setDateFin(e.target.value)} value={dateFin} />
            </label>
            <button className='btn-filter' type='submit'>Filtrer</button>
        </form>
    )

}

export default Filters;