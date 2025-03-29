import React, { useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import ControlsContext from "./ControlsContext";
import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Circle3d = () => {
    const {
        circleX, 
        circleY, 
        circleZ, 
        circleR, 
        baseX, 
        baseY, 
        baseZ, 
        baseR,
        rotateCX,
        rotateCY,
        rotateCZ
    } = useContext(ControlsContext);
    const R = Math.sqrt(circleX*circleX+circleY*circleY+circleZ*circleZ);
    const X = (baseR*baseR*circleX)/(circleX*circleX+circleY*circleY+circleZ*circleZ);
    const Y = (baseR*baseR*circleY)/(circleX*circleX+circleY*circleY+circleZ*circleZ);
    const Z = (baseR*baseR*circleZ)/(circleX*circleX+circleY*circleY+circleZ*circleZ);
    const X1 = (R/baseR)*X;
    const Y1 = (R/baseR)*Y;
    const Z1 = (R/baseR)*Z;

    const innerRef = useRef();
    const outerRef = useRef();

    useFrame(() => {
        innerRef.current.position.x = circleX+baseX;
        innerRef.current.position.y = circleY+baseY;
        innerRef.current.position.z = circleZ+baseZ;
        innerRef.current.rotation.x = rotateCX;
        innerRef.current.rotation.y = rotateCY;
        innerRef.current.rotation.z = rotateCZ;
        
        outerRef.current.position.x = X+baseX;
        outerRef.current.position.y = Y+baseY;
        outerRef.current.position.z = Z+baseZ;
        outerRef.current.rotation.x = rotateCX;
        outerRef.current.rotation.y = rotateCY;
        outerRef.current.rotation.z = rotateCZ;
    },[]);

    return (
        <mesh
        >
            <mesh
                name="inner circle"
                ref={innerRef}
            >
                <circleGeometry
                    args={[circleR,50]}
                />
                <meshPhongMaterial
                    color="white"
                    side={THREE.DoubleSide}
                    />
            </mesh>
            <mesh
                name="outer circle"
                ref={outerRef}
                >
                <circleGeometry
                    args={[R,50]}
                    />
                <meshPhongMaterial
                    color="white"
                    side={THREE.DoubleSide}
                />
            </mesh>
            <Line
                points={[[0,0,0],[X,Y,Z]]}
                color="green"
                lineWidth={1}
            />
            <Line
                points={[[0,0,0],[X1,Y1,Z1]]}
                color="green"
                lineWidth={1}
            />
        </mesh>
    );
}

export default Circle3d;