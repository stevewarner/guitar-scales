import { useContext } from "react";
import { CanvasContext } from "./Canvas";
import { margin } from "./constants";

const Scale = ({ scaleLayout, color }) => {
  const canvas = useContext(CanvasContext);

  if (canvas !== null) {
    const context = canvas.getContext("2d");
    const fretboardWidth = canvas.width - margin * 2;
    const fretboardHeight = canvas.height - margin * 2;

    scaleLayout.map((coords) => {
      // circle
      context.beginPath();
      context.arc(
        margin + (fretboardWidth / 5) * (coords[0] - 1),
        margin + (fretboardHeight / 5) * coords[1] - fretboardHeight / 5 / 2,
        fretboardHeight / 5 / 4,
        0,
        2 * Math.PI
      );
      context.fillStyle = color;
      context.fill();
      context.stroke();
      // label
      context.fillStyle = "black";
      context.font = "18px Arial";
      context.textAlign = "center";
      context.fillText(
        coords[2],
        margin + (fretboardWidth / 5) * (coords[0] - 1),
        margin + (fretboardHeight / 5) * coords[1] - fretboardHeight / 5 / 2 + 6
      );

      return null;
    });
  }

  return null;
};

export default Scale;
