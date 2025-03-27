import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { FlyControls, Line, OrbitControls } from '@react-three/drei'
import InvertedSphere from "./InvertedSphere";
import { PointPairs3d } from "./PointPairs3d";
import XYZSlider from "./XYZSlider";
import { Container } from "@mui/material";

export const Home3d = () => {
    const [aspectWidth, setAspectWidth] = useState(200);
    const [aspectHeight, setAspectHeight] = useState(100);
    const [near, setNear] = useState(1);
    const [far, setFar] = useState(10000);
    const [position, setPosition] = useState([200, 0, 0]);
    const [fov, setFov] = useState(45);
    const [ready, setReady] = useState(false);

    const [baseX, setBaseX] = useState(0);
    const [baseY, setBaseY] = useState(0);
    const [baseZ, setBaseZ] = useState(0);
    const [baseR, setBaseR] = useState(50);
    const [pointX, setPointX] = useState(25);
    const [pointY, setPointY] = useState(-25);
    const [pointZ, setPointZ] = useState(25);

    const cameraRef = useRef();

    useEffect(() => {
        cameraRef.current = new THREE.PerspectiveCamera(fov, aspectWidth / aspectHeight, near, far);
        cameraRef.current.position.x = position[0];
        cameraRef.current.position.y = position[1];
        cameraRef.current.position.z = position[2];
        setReady(true);
    }, []);

    return (
        <Container
            role="contain-everything"
            sx={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "96vw !important",
                border: "solid",
                width: "95vw",
                height: "100%"
            }}
        >
            <XYZSlider
                x={pointX}
                y={pointY}
                z={pointZ}
                setX={setPointX}
                setY={setPointY}
                setZ={setPointZ}
                r={baseR}
            />
            <Canvas
                camera={cameraRef.current}
                style={{
                    width: "90vw",
                    height: "98vh",
                    border: "solid",
                    background: "black"
                }}
            >
                <ambientLight
                    intensity={1}
                    color="#fa0202"
                />
                <pointLight
                    position={[200,200,200]}
                    color="#faa302"
                    intensity={1000000}
                />
                <pointLight
                    position={[-200,-200,-200]}
                    color="#97fa02"
                    intensity={1000000}
                />
                <pointLight
                    position={[-200,200,200]}
                    color="#02fa2c"
                    intensity={1000000}
                />
                <pointLight
                    position={[200,-200,-200]}
                    color="#02fa2c"
                    intensity={1000000}
                />
                <pointLight
                    position={[-200,-200,200]}
                    color="#0234fa"
                    intensity={1000000}
                />
                <pointLight
                    position={[-200,200,-200]}
                    color="#9702fa"
                    intensity={1000000}
                />
                <pointLight
                    position={[200,-200,200]}
                    color="#9702fa"
                    intensity={1000000}
                />
                <OrbitControls
                    // enabled={false}
                />
                {
                    ready &&
                    <mesh>
                        <InvertedSphere
                            radius={1}
                            x={baseX}
                            y={baseY}
                            z={baseZ}
                            colorIn="black"
                            colorOut="black"
                        />
                        <InvertedSphere
                            radius={baseR}
                            x={baseX}
                            y={baseY}
                            z={baseZ}
                            colorIn="yellow"
                            colorOut="red"
                        />
                        <PointPairs3d
                            cx={baseX}
                            cy={baseY}
                            cz={baseZ}
                            x={pointX}
                            y={pointY}
                            z={pointZ}
                            rad={baseR}
                            r={100}
                            b={100}
                            g={100}
                        />
                    </mesh>
                }
            </Canvas>
        </Container>
    )
}

export default Home3d;