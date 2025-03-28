import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const PointPairs3d = ({cx,cy,cz,x,y,z,rad,r,g,b,ax,ay,az}) => {
    const splashRef = useRef();
    const R = Math.sqrt(x*x+y*y+z*z);
    const X = (rad*rad*x)/(x*x+y*y+z*z);
    const Y = (rad*rad*y)/(x*x+y*y+z*z);
    const Z = (rad*rad*z)/(x*x+y*y+z*z);
    let X1 = (R/rad)*X;
    let Y1 = (R/rad)*Y;
    let Z1 = (R/rad)*Z;
    useEffect(() => {

        splashRef.current.rotation.x = Math.PI*ax; //orange
        splashRef.current.rotation.y = Math.PI*ay; //green
        splashRef.current.rotation.z = Math.PI*az; //blue
    });

    useFrame(() => {
        // splashRef.current.rotation.x += .01;
        // splashRef.current.rotation.y += .01;
        // splashRef.current.rotation.z += .01;
    })
    
    return (
        <mesh>
            <mesh
                position={[x+cx,y+cy,z+cz]}
                castShadow
                receiveShadow
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
                castShadow
                receiveShadow
            >
                <sphereGeometry
                    args={[1,10,10]}
                />
                <meshPhongMaterial
                    color="blue"
                />
            </mesh>
                <mesh
                    ref={splashRef}
                    position={[X1*1.0025,Y1*1.0025,Z1*1.0025]}
                    castShadow
                    receiveShadow
                >
                    <circleGeometry
                        args={[10,10]}
                    />
                    <sphereGeometry
                        args={[.25,10,10]}
                    />
                    <meshPhongMaterial
                        color="black"
                    />
                </mesh>
                <mesh
                    ref={splashRef}
                    position={[X1*.995,Y1*.995,Z1*.995]}
                    castShadow
                    receiveShadow
                >
                    <sphereGeometry
                        args={[.25,10,10]}
                    />
                    <meshPhongMaterial
                        color="black"
                    />
                </mesh>
            <Line
                points={[[0,0,0],[X,Y,Z]]}
                color="green"
                lineWidth={1}
            />
            <Line
                points={[[0,0,0],[x,y,z]]}
                color="green"
                lineWidth={1}
            />
        </mesh>
    )
}