import './TextEval.css';
import { useState } from 'react';
import syllabify from 'syllabify-fr';
import Circle from './components/Circle';
import Stats from './components/Stats';
import TextField from './components/TextField';


function countWords(text) {
    if (!text || text.trim() === "") {
        return 0;
    }

    return text.trim().split(/\s+/).length;
}

function countSyllables(text) {
    // Découper le texte en mots
    const words = text.split(' ');

    // Calculer le nombre total de syllabes
    const nbSyllables = words.reduce((sum, word) => sum + syllabify(word).nb, 0);

    return nbSyllables;
}

function toColor(wordCount) {
    if (wordCount <= 10)
        return 'green';
    if (wordCount <= 15) {
        return 'orange';
    }
    return 'red';
}

function toSize(wordCount) {
    const MAX_SIZE = 200;
    return Math.min(wordCount * 10, MAX_SIZE);
}

function TextEval() {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleClear = () => {
        setText('');
    };

    const wordCount = countWords(text);
    const syllableCount = countSyllables(text);
    const circleSize = toSize(wordCount);
    const circleColor = toColor(wordCount);

    return (
        <>
            <h1 className="title">Évaluateur de texte</h1>
            <TextField text={text} handleTextChange={handleTextChange} handleClear={handleClear} />
            <Stats text={text} wordCount={wordCount} syllableCount={syllableCount} />
            <Circle size={circleSize} color={circleColor} />
        </>
    );
};

export default TextEval;
