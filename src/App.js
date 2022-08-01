
import { createContext, useState, useEffect } from "react";
import Canvas from "./Canvas";
import Form from "./Form";
import Fretboard from "./Fretboard";
import Scale from "./Scale";
import { scaleLibrary } from "./constants";
import "./styles.css";

export const FormContext = createContext(null);

export default function App() {
  const [mode, setMode] = useState("ionian");
  const [mode2, setMode2] = useState("mixolydian");
  const [chartTitle, setChartTitle] = useState('');
  const [showMode2, toggleShowMode2] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setChartTitle(showMode2 ? `${mode} and ${mode2}` : mode);
  }, [mode, mode2, showMode2]);

  return (
    <div className="App">
      <h1>Compare Modes</h1>
      <p>
        Select 2 modes to compare. The 1st mode will display in blue, and the
        2nd mode will display in red. Only notes that differ in the 2nd mode
        will be drawn on the canvas.
      </p>
      <FormContext.Provider
        value={{
          chartTitle,
          setChartTitle,
          mode,
          setMode,
          mode2,
          setMode2,
          showMode2,
          toggleShowMode2,
          position,
          setPosition
        }}
      >
        <Form />
        <Canvas>
          <Fretboard />
          {showMode2 ? (
            <Scale scaleLayout={scaleLibrary[position][mode2]} color="red" />
          ) : null}
          <Scale scaleLayout={scaleLibrary[position][mode]} color="blue" />
        </Canvas>
      </FormContext.Provider>
    </div>
  );
}

