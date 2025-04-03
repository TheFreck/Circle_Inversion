import React, { useEffect, useState, useRef, useCallback } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import InvertedSphere from "./InvertedSphere";
import { PointPairs3d } from "./PointPairs/PointPairs3d";
import { Container } from "@mui/material";
import Circle3d from "./Circle3d";
import ControlsContext from "./ControlsContext";
import ShapeControls from "./controls/ShapeControls";
import SurroundLights from "./SurroundLights";
import PointsCircle3d from "./PointsCircle/PointsCircle3d";
import PointsSphere3d from "./PointsSphere/PointsSphere3d";
import { PointsRectangle3d } from "./PointsRectangle/PointsRectangle3d";
import PointsCuboid3d from "./PointsCuboid/PointsCuboid3d";

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

    // projections
    const [isInner, setIsInner] = useState(true);
    const [isSurface, setIsSurface] = useState(true);
    const [isOuter, setIsOuter] = useState(true);

    // shapes
    const [isPoint, setIsPoint] = useState(false);
    const [isCircle, setIsCircle] = useState(false);
    const [isSphere, setIsSphere] = useState(false);
    const [isRectangle, setIsRectangle] = useState(false);
    const [isCuboid, setIsCuboid] = useState(false);

    // point
    const [pointX, setPointX] = useState(0);
    const [pointY, setPointY] = useState(0);
    const [pointZ, setPointZ] = useState(50);

    // circle
    const [circleX, setCircleX] = useState(0);
    const [circleY, setCircleY] = useState(0);
    const [circleZ, setCircleZ] = useState(25);
    const [circleR, setCircleR] = useState(25);
    const [circleN, setCircleN] = useState(50);

    // sphere
    const [sphereX, setSphereX] = useState(0);
    const [sphereY, setSphereY] = useState(25);
    const [sphereZ, setSphereZ] = useState(0);
    const [sphereR, setSphereR] = useState(25);
    const [sphereN, setSphereN] = useState(26);

    // square
    const [rectangleX, setRectangleX] = useState(0);
    const [rectangleY, setRectangleY] = useState(0);
    const [rectangleZ, setRectangleZ] = useState(0);
    const [rectangleW, setRectangleW] = useState(10);
    const [rectangleH, setRectangleH] = useState(10);
    const [rectangleN, setRectangleN] = useState(10);

    // cuboid
    const [cuboidX, setCuboidX] = useState(0);
    const [cuboidY, setCuboidY] = useState(0);
    const [cuboidZ, setCuboidZ] = useState(0);
    const [cuboidW, setCuboidW] = useState(40);
    const [cuboidH, setCuboidH] = useState(40);
    const [cuboidD, setCuboidD] = useState(40);
    const [cuboidN, setCuboidN] = useState(10);
    
    // lines
    const [innerLines, setInnerLines] = useState(false);
    const [surfaceLines, setSurfaceLines] = useState(false);
    const [outerLines, setOuterLines] = useState(false);

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
    />,
    [circleX,circleY,circleZ,circleR,circleN, baseR]);

    const PointsSphere3dCallback = useCallback(() => <PointsSphere3d
        n={sphereN}
    />,
    [sphereX,sphereY,sphereZ,sphereR,sphereN, baseR]);

    const PointsRectangle3dCallback = useCallback(() => <PointsRectangle3d
        n={rectangleN} 
    />,
    [rectangleX,rectangleY,rectangleZ,rectangleH,rectangleW,rectangleN]);

    const PointsCuboid3dCallback = useCallback(() => <PointsCuboid3d
        n={cuboidN}
    />,
    [cuboidX,cuboidY,cuboidZ,cuboidW,cuboidH,cuboidD,cuboidN]);

    return (
        <ControlsContext.Provider
            value={{
                baseX, setBaseX,
                baseY, setBaseY,
                baseZ, setBaseZ,
                baseR, setBaseR,
                isPoint, setIsPoint,
                isCircle, setIsCircle,
                isSphere, setIsSphere,
                isRectangle, setIsRectangle,
                isCuboid, setIsCuboid,
                pointX, setPointX,
                pointY, setPointY,
                pointZ, setPointZ,
                circleX, setCircleX,
                circleY, setCircleY,
                circleZ, setCircleZ,
                circleR, setCircleR,
                circleN, setCircleN,
                sphereX, setSphereX,
                sphereY, setSphereY,
                sphereZ, setSphereZ,
                sphereR, setSphereR,
                sphereN, setSphereN,
                rectangleX, setRectangleX,
                rectangleY, setRectangleY,
                rectangleZ, setRectangleZ,
                rectangleW, setRectangleW,
                rectangleH, setRectangleH,
                rectangleN, setRectangleN,
                cuboidX, setCuboidX,
                cuboidY, setCuboidY,
                cuboidZ, setCuboidZ,
                cuboidW, setCuboidW,
                cuboidH, setCuboidH,
                cuboidD, setCuboidD,
                cuboidN, setCuboidN,
                innerLines, setInnerLines,
                surfaceLines, setSurfaceLines,
                outerLines, setOuterLines,
                isInner, setIsInner,
                isSurface, setIsSurface,
                isOuter, setIsOuter,
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
                                colorOut="green"
                                r={1}
                            />
                            <InvertedSphere
                                colorIn="white"
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
                            {
                                isSphere &&
                                <PointsSphere3dCallback />
                            }
                            {
                                isRectangle &&
                                <PointsRectangle3dCallback />
                            }
                            {
                                isCuboid &&
                                <PointsCuboid3dCallback />
                            }
                        </mesh>
                    }
                </Canvas>
            </Container>

        </ControlsContext.Provider>
    )
}

export default Home3d;