function GardenListItem({ garden }) {
    return (
        <table style={{ width: '100%' }}>
            <tr>
                <td>Nom:</td>
                <td>{garden.name}</td>
            </tr>
            <tr>
                <td>Adresse:</td>
                <td>{garden.address}</td>
            </tr>
            <tr>
                <td>Arrondissement:</td>
                <td>{garden.borough}</td>
            </tr>
            {/* <tr>
                <td>Ouvert le:</td>
                <td>{toDateString(jardin.dateOuverture, 'fr')}</td>
            </tr> */}
        </table>)
}

export default GardenListItem;