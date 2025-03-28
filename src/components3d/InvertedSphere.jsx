import React, { useRef } from "react";
import * as THREE from "three";

export const InvertedSphere = ({x,y,z,radius,colorIn,colorOut}) => {
    const sphereRef = useRef();

    return (
        <mesh>
            <mesh
                ref={sphereRef}
                position={[x,y,z]}
            >
                <sphereGeometry
                    args={[radius,50,50]}
                />
                <meshPhongMaterial
                    color={colorIn}
                    side={THREE.BackSide}
                    transparent={true}
                    opacity={.9}
                />
            </mesh>
            <mesh
                ref={sphereRef}
                position={[x,y,z]}
            >
                <sphereGeometry
                    args={[radius,50,50]}
                />
                <meshPhongMaterial
                    color={colorOut}
                    side={THREE.FrontSide}
                    transparent={true}
                    opacity={.8}
                />
            </mesh>
        </mesh>
    );
}

export default InvertedSphere;