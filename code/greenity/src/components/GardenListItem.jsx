import { toDateString } from './../utils/datefns';

function GardenListItem({ jardin }) {
    return (
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
        </table>)
}

export default GardenListItem;