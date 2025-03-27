import { Line } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";

export const PointPairs3d = ({cx,cy,cz,x,y,z,rad,r,g,b}) => {
    const X = (rad*rad*x)/(x*x+y*y+z*z);
    const Y = (rad*rad*y)/(x*x+y*y+z*z);
    const Z = (rad*rad*z)/(x*x+y*y+z*z);
    const matrix = new THREE.Matrix4();
    
    return (
        <mesh>
            <mesh
                position={[x+cx,y+cy,z+cz]}
            >
                <sphereGeometry
                    args={[1,10,10]}
                />
                <meshPhongMaterial
                    color="white"
                />
            </mesh>
            <mesh
                position={[X+cx,Y+cy,Z+cz]}
            >
                <sphereGeometry
                    args={[1,10,10]}
                />
                <meshPhongMaterial
                    color="blue"
                />
            </mesh>
            <Line
                points={[[0,0,0],[X,Y,Z]]}
                color="green"
                lineWidth={1}
            />
        </mesh>
    )
}