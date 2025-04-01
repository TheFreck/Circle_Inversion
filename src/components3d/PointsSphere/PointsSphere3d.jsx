import { useContext, useEffect, useRef, useState } from "react";
import ControlsContext from "../ControlsContext";
import { Line } from "@react-three/drei";
import { getPositions } from "./sphereHelper";


export const PointsSphere3d = ({ n }) => {
    const {
        sphereX,
        sphereY,
        sphereZ,
        sphereR,
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

    useEffect(() => {
        getPositions(sphereX,sphereY,sphereZ,sphereR,baseR,n,positions => {
            setPointPositions(positions);
            setReady(true);
        });
    },[]);

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
                                emissiveIntensity={10}
                            />
                        </mesh>
                            <Line
                                points={[[p.inner.x,p.inner.y,p.inner.z], [p.surface.x, p.surface.y, p.surface.z]]}
                                color={`rgb(${p.surface.red},${p.surface.green},${p.surface.blue})`}
                                lineWidth={surfaceLines ? .1 : 0}
                            />
                        <mesh
                            key={i}
                        >
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
                    </mesh>
                ))
            }
        </mesh>
    )
}

export default PointsSphere3d;