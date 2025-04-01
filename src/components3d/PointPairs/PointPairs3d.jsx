import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ControlsContext from "../ControlsContext";

export const PointPairs3d = () => {
    const { 
        pointX, 
        pointY, 
        pointZ, 
        baseX, 
        baseY, 
        baseZ, 
        baseR,
        innerLines,
        surfaceLines,
        outerLines
     } = useContext(ControlsContext);

    const splashRef = useRef();
    const R = Math.sqrt(pointX * pointX + pointY * pointY + pointZ * pointZ);
    const X = (baseR * baseR * pointX) / (pointX * pointX + pointY * pointY + pointZ * pointZ);
    const Y = (baseR * baseR * pointY) / (pointX * pointX + pointY * pointY + pointZ * pointZ);
    const Z = (baseR * baseR * pointZ) / (pointX * pointX + pointY * pointY + pointZ * pointZ);
    let X1 = (R / baseR) * X;
    let Y1 = (R / baseR) * Y;
    let Z1 = (R / baseR) * Z;
    const outer = 1.00399;
    const inner = .994;

    return (
        <mesh>
            <mesh
                position={[pointX + baseX, pointY + baseY, pointZ + baseZ]}
                castShadow
                receiveShadow
            >
                <sphereGeometry
                    args={[1, 50, 50]}
                />
                <meshPhongMaterial
                    color="white"
                />
            </mesh>
            <mesh
                position={[X + baseX, Y + baseY, Z + baseZ]}
                castShadow
                receiveShadow
            >
                <sphereGeometry
                    args={[1, 50, 50]}
                />
                <meshPhongMaterial
                    color="blue"
                />
            </mesh>
            <mesh
                ref={splashRef}
                position={[X1 * outer, Y1 * outer, Z1 * outer]}
                castShadow
                receiveShadow
            >
                <sphereGeometry
                    args={[.25, 50, 50]}
                />
                <meshPhongMaterial
                    color="black"
                />
            </mesh>
            <mesh
                ref={splashRef}
                position={[X1 * inner, Y1 * inner, Z1 * inner]}
                castShadow
                receiveShadow
            >
                <sphereGeometry
                    args={[.25, 50, 50]}
                />
                <meshPhongMaterial
                    color="black"
                />
            </mesh>
            <Line
                points={[[0, 0, 0], [pointX, pointY, pointZ]]}
                color="green"
                lineWidth={innerLines ? 1 : 0}
            />
            <Line
                points={[[pointX,pointY,pointZ],[X1,Y1,Z1]]}
                color="green"
                lineWidth={surfaceLines ? 1 : 0}
            />
            <Line
                points={[[X1,Y1,Z1], [X, Y, Z]]}
                color="green"
                lineWidth={outerLines ? 1 : 0}
            />
        </mesh>
    )
}