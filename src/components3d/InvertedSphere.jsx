import React, { useRef } from "react";
import * as THREE from "three";

export const InvertedSphere = ({x,y,z,radius,color}) => {
    const sphereRef = useRef();

    return (
        <mesh
            ref={sphereRef}
            position={[x,y,z]}
        >
            <sphereGeometry
                args={[radius,50,50]}
            />
            <meshPhongMaterial
                color={color}
                side={THREE.DoubleSide}
                transparent={true}
                opacity={.5}
            />
        </mesh>
    );
}

export default InvertedSphere;