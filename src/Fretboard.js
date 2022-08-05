import { useContext } from 'react';
import { CanvasContext } from './Canvas';
import { FormContext } from './App';
import { margin } from './constants';

const Fretboard = () => {
    const canvas = useContext(CanvasContext);
    const { chartTitle } = useContext(FormContext);

    if (canvas !== null) {
        const context = canvas.getContext('2d');
        const fretboardWidth = canvas.width - margin * 2;
        const fretboardHeight = canvas.height - margin * 2;

        // label
        context.fillStyle = 'black';
        context.textAlign = 'center';
        context.font = '24px Arial';
        context.fillText(chartTitle, canvas.width / 2, margin / 2);

        context.beginPath();
        context.rect(margin, margin, fretboardWidth, fretboardHeight + fretboardHeight / 5);
        context.lineWidth = 3;
        context.stroke();
        // frets
        for (let i = 0; i < 5; i++) {
            context.beginPath();
            context.moveTo(margin, margin + (fretboardHeight / 5) * (i + 1));
            context.lineTo(fretboardWidth + margin, margin + (fretboardHeight / 5) * (i + 1));
            context.stroke();
        }

        // strings
        for (let i = 0; i < 4; i++) {
            context.beginPath();
            context.moveTo(margin + (fretboardWidth / 5) * (i + 1), margin);
            context.lineTo(margin + (fretboardWidth / 5) * (i + 1), fretboardHeight + margin + fretboardHeight / 5);
            context.stroke();
        }

        // position labels
        context.fillText('1', margin - 40, margin + (fretboardHeight / 5) * 2 - fretboardHeight / 5);

        context.fillText('2', margin - 40, margin + (fretboardHeight / 5) * 3 - fretboardHeight / 5 / 2);
        context.fillText('3', margin - 40, margin + (fretboardHeight / 5) * 4 - fretboardHeight / 5 / 2);

        context.fillText('4', margin - 40, margin + (fretboardHeight / 5) * 5);
    }

    return null;
};

export default Fretboard;
