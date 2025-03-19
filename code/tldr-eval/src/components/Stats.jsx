function Stats({ text, wordCount, syllableCount }) {
    const avgSyllables = text ? syllableCount / wordCount : 0;

    return (
        <ul className='stats'>
            <li className='stat'>Nombre de mots: {wordCount}</li>
            <li className='stat'>Nombre de syllabes: {syllableCount}</li>
            <li className='stat'>Nombre de syllabes par mot: {avgSyllables.toFixed(2)}</li>
        </ul>
    )
}

export default Stats;