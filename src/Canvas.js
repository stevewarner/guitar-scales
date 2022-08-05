import { useRef, useEffect, useState, createContext } from 'react';
import { canvasWidth, canvasHeight } from './constants';

// use context to get canvasRef in other components
export const CanvasContext = createContext(null);
// then draw fretboard grid and scale patterns in other components

const Canvas = ({ children }) => {
    // we use a ref to access the canvas' DOM node
    const canvasRef = useRef(null);

    const [context, setContext] = useState(null);

    // once we have canvasRef set that to context
    useEffect(() => {
        if (canvasRef.current !== null) {
            const canvasContext = canvasRef.current;
            setContext(canvasContext);
        }
    }, [canvasRef]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        canvas.width = Math.min(canvasWidth, document.body.clientWidth);
        canvas.height = canvasHeight;
        context.fillStyle = '#fff';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }, [canvasRef]);

    // clear canvas
    if (context !== null) {
        if (context.getContext('2d') !== null) context.getContext('2d').clearRect(0, 0, canvasWidth, canvasHeight);
        context.getContext('2d').fillStyle = '#fff';
        context.getContext('2d').fillRect(0, 0, canvasWidth, canvasHeight);
    }

    return (
        <CanvasContext.Provider value={context}>
            <canvas ref={canvasRef}>{children}</canvas>
        </CanvasContext.Provider>
    );
};

export default Canvas;
