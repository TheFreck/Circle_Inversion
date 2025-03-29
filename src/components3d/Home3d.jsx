import React, { useEffect, useState, useRef, useCallback } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import InvertedSphere from "./InvertedSphere";
import { PointPairs3d } from "./PointPairs3d";
import { Container } from "@mui/material";
import Circle3d from "./Circle3d";
import ControlsContext from "./ControlsContext";
import ShapeControls from "./controls/ShapeControls";
import SurroundLights from "./SurroundLights";
import PointsCircle3d from "./PointsCircle3d";

export const Home3d = () => {
    const [aspectWidth, setAspectWidth] = useState(200);
    const [aspectHeight, setAspectHeight] = useState(100);
    const [near, setNear] = useState(.1);
    const [far, setFar] = useState(10000);
    const [position, setPosition] = useState([0, 0, 200]);
    const [fov, setFov] = useState(45);
    const [ready, setReady] = useState(false);

    const [baseX, setBaseX] = useState(0);
    const [baseY, setBaseY] = useState(0);
    const [baseZ, setBaseZ] = useState(0);
    const [baseR, setBaseR] = useState(50);

    // shapes
    const [isPoint, setIsPoint] = useState(false);
    const [isCircle, setIsCircle] = useState(false);

    // point
    const [pointX, setPointX] = useState(0);
    const [pointY, setPointY] = useState(0);
    const [pointZ, setPointZ] = useState(50);

    // circle
    const [circleX, setCircleX] = useState(0);
    const [circleY, setCircleY] = useState(0);
    const [circleZ, setCircleZ] = useState(25);
    const [circleR, setCircleR] = useState(25);
    const [rotateCX,setRotateCX] = useState(1);
    const [rotateCY,setRotateCY] = useState(1);
    const [rotateCZ,setRotateCZ] = useState(1);
    const [circleN, setCircleN] = useState(50);

    const cameraRef = useRef();

    useEffect(() => {
        cameraRef.current = new THREE.PerspectiveCamera(fov, aspectWidth / aspectHeight, near, far);
        cameraRef.current.position.x = position[0];
        cameraRef.current.position.y = position[1];
        cameraRef.current.position.z = position[2];
        setReady(true);
    }, []);

    const PointsCircle3dCallback = useCallback(() => <PointsCircle3d
        n={circleN}
    />
    ,[circleX,circleY,circleZ,circleR,rotateCX,rotateCY,rotateCZ]);

    return (
        <ControlsContext.Provider
            value={{
                baseX, setBaseX,
                baseY, setBaseY,
                baseZ, setBaseZ,
                baseR, setBaseR,
                isPoint, setIsPoint,
                isCircle, setIsCircle,
                pointX, setPointX,
                pointY, setPointY,
                pointZ, setPointZ,
                circleX, setCircleX,
                circleY, setCircleY,
                circleZ, setCircleZ,
                circleR, setCircleR,
                circleN, setCircleN,
                rotateCX, setRotateCX,
                rotateCY, setRotateCY,
                rotateCZ, setRotateCZ,
            }}
        >
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
                <ShapeControls />
                <Canvas
                    camera={cameraRef.current}
                    style={{
                        width: "90vw",
                        height: "98vh",
                        border: "solid",
                        background: "black"
                    }}
                >
                    <SurroundLights />
                    <OrbitControls
                        // enabled={false}
                    />
                    {
                        ready &&
                        <mesh>
                            <InvertedSphere
                                colorIn="black"
                                colorOut="black"
                                r={1}
                            />
                            <InvertedSphere
                                colorIn="black"
                                colorOut="white"
                                r={baseR}
                            />
                            {
                                isPoint &&
                                <PointPairs3d />
                            }
                            {
                                isCircle &&
                                <PointsCircle3dCallback />
                            }
                        </mesh>
                    }
                </Canvas>
            </Container>

        </ControlsContext.Provider>
    )
}

export default Home3d;