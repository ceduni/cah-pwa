import './assets/css/global.css';

import { useState } from "react";

function Compteur() {
    const [compteur, setCompteur] = useState(0);

    return (
        <div>
            <p>Valeur : <span style={{
                padding: '4px 6px',
                backgroundColor: '#f0f0f0',
            }}>{compteur}</span></p>
            <button className='btn' style={{
                padding: '10px',
                backgroundColor: 'royalblue',
                fontWeight: 'bold',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }} onClick={() => setCompteur(compteur + 1)}>Incrémenter</button>
        </div>
    );
}

export default Compteur;