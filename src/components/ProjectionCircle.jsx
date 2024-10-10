import { useEffect, useState } from "react";
import PointPairs from "./PointPairs";

export const ProjectionCircle = (props) => {
  const {x1,y1,r1,x2,y2,r2} = props;
  useEffect(() => {
    console.log("proj x1: ", x1);
    console.log("proj y1: ", y1);
    console.log("proj r1: ", r1);
    console.log("proj x2: ", x2);
    console.log("proj y2: ", y2);
    console.log("proj r2: ", r2);
    let X = (r1*r1)/(x1);
    console.log("X: ", X);
    let Y = (y1*X)/x1;
    console.log("Y: ", Y);
  },[]);
  
  return (
    <>
      <circle
        cx={x2}
        cy={y2}
        r={r2}
        stroke="green"
        strokeWidth=".5"
      />
      <circle
        cx={x2}
        cy={y2}
        r={.1}
        stroke="green"
        strokeWidth=".5"
      />
      {/* <circle
        cx={((r1*r1*y1)/(x1*x1+y1*y1))}
        cy={0}
        r={1}
        stroke="orange"
        strokeWidth=".5"
      /> */}
      {/* <PointPairs
        x={refX-projectionX}
        y={refY-projectionY}
        cx={invertedX}
        cy={invertedY}
        r={projectionR}
        red={150}
        green={150}
        blue={150}
      /> */}
      {props.children}
    </>
  );
}

export default ProjectionCircle;