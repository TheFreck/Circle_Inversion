import React, { useContext, useRef } from "react";
import * as THREE from "three";
import ControlsContext from "./ControlsContext";

export const InvertedSphere = ({colorIn,colorOut,r}) => {
    const {baseX,baseY,baseZ} = useContext(ControlsContext);
    const sphereRef = useRef();

    return (
        <mesh>
            <mesh
                ref={sphereRef}
                position={[baseX,baseY,baseZ]}
            >
                <sphereGeometry
                    args={[r,50,50]}
                />
                <meshPhongMaterial
                    color={colorIn}
                    side={THREE.BackSide}
                    transparent={true}
                    opacity={.8}
                />
            </mesh>
            <mesh
                ref={sphereRef}
                position={[baseX,baseY,baseZ]}
            >
                <sphereGeometry
                    args={[r,50,50]}
                />
                <meshPhongMaterial
                    color={colorOut}
                    side={THREE.FrontSide}
                    transparent={true}
                    opacity={.5}
                />
            </mesh>
        </mesh>
    );
}

export default InvertedSphere;