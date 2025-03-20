import { useState, useEffect } from 'react';
import syllabify from 'syllabify-fr';

const useSyllableCounter = (text) => {
    const [nbSyllables, setNbSyllables] = useState(0);

    useEffect(() => {
        if (text.trim() === "") {
            setNbSyllables(0);
            return;
        }

        // Découper le texte en mots
        const words = text.split(' ');

        // Calculer le nombre total de syllabes
        const totalSyllables = words.reduce((sum, word) => sum + syllabify(word).nb, 0);

        setNbSyllables(totalSyllables);
    }, [text])

    return nbSyllables;
};

export default useSyllableCounter;
