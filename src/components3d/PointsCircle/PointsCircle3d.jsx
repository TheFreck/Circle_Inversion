import { useContext, useEffect, useRef, useState } from "react";
import ControlsContext from "../ControlsContext";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";


export const PointsCircle3d = ({ n }) => {
    const {
        circleX,
        circleY,
        circleZ,
        circleR,
        baseX,
        baseY,
        baseZ,
        baseR,
        innerLines,
        surfaceLines,
        outerLines,
    } = useContext(ControlsContext);
    const [pointPositions, setPointPositions] = useState([]);
    const [ready, setReady] = useState(false);

    const innerRef = useRef();
    const outerRef = useRef();

    useEffect(() => {
        const positions = [];
        for (let i = 0; i < Math.PI * 2; i += Math.PI * 2 / n) {
            const red = Math.floor((Math.cos(i)+1) * 95 + 50);
            const green = Math.floor((Math.sin(i)+1) * 70 + 50);
            const blue = Math.floor((Math.tan(i)+1) * 50 + 35);
            const innerPoint = {
                x: Math.cos(i) * circleR + circleX,
                y: Math.sin(i) * circleR + circleY,
                z: circleZ,
                red, green, blue
            };
            
            const outerPoint = {
                x: (baseR*baseR*innerPoint.x)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                y: (baseR*baseR*innerPoint.y)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                z: (baseR*baseR*innerPoint.z)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                red, green, blue
            };
            const R = Math.sqrt(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z);

            const surfacePoint = {
                x: (R/baseR) * outerPoint.x,
                y: (R/baseR) * outerPoint.y,
                z: (R/baseR) * outerPoint.z,
                red,green,blue
            }

            positions.push({
                inner: innerPoint,
                surface: surfacePoint,
                outer: outerPoint
            });
        }

        setPointPositions(positions);
        
        setReady(true);
    }, []);


    return (
        <mesh>
            {
                ready && pointPositions.map((p,i) => (
                    <mesh
                        key={i}
                    >
                        <mesh
                            position={[p.inner.x + baseX, p.inner.y + baseY, p.inner.z + baseZ]}
                            castShadow
                            receiveShadow
                        >
                            <sphereGeometry
                                args={[.5, 50, 50]}
                            />
                            <meshPhongMaterial
                                color={`rgb(${p.inner.red},${p.inner.green},${p.inner.blue})`}
                                emissive={`rgb(${p.inner.red},${p.inner.green},${p.inner.blue})`}
                            />
                        </mesh>
                        <Line
                            points={[[0, 0, 0], [p.inner.x, p.inner.y, p.inner.z]]}
                            color={`rgb(${p.inner.red},${p.inner.green},${p.inner.blue})`}
                            lineWidth={innerLines ? .1 : 0}
                        />
                        <mesh
                            position={[p.surface.x,p.surface.y,p.surface.z]}
                        >
                            <sphereGeometry
                                args={[.125,50,50]}
                                />
                            <meshPhongMaterial
                                color={`rgb(${p.surface.red},${p.surface.green},${p.surface.blue})`}
                                emissive={`rgb(${p.surface.red},${p.surface.green},${p.surface.blue})`}
                            />
                        </mesh>
                        <Line
                            points={[[p.inner.x,p.inner.y,p.inner.z],[p.surface.x,p.surface.y,p.surface.z]]}
                            color={`rgb(${p.surface.red},${p.surface.green},${p.surface.blue})`}
                            lineWidth={surfaceLines ? .1 : 0}
                        />
                        <mesh
                            position={[p.outer.x + baseX, p.outer.y + baseY, p.outer.z + baseZ]}
                            castShadow
                            receiveShadow
                        >
                            <sphereGeometry
                                args={[.5, 50, 50]}
                            />
                            <meshPhongMaterial
                                color={`rgb(${p.outer.red},${p.outer.green},${p.outer.blue})`}
                                emissive={`rgb(${p.outer.red},${p.outer.green},${p.outer.blue})`}
                            />
                        </mesh>
                        <Line
                            points={[[p.surface.x,p.surface.y,p.surface.z], [p.outer.x, p.outer.y, p.outer.z]]}
                            color={`rgb(${p.outer.red},${p.outer.green},${p.outer.blue})`}
                            lineWidth={outerLines ? .1 : 0}
                        />
                    </mesh>
                ))
            }
        </mesh>
    );
}

export default PointsCircle3d;