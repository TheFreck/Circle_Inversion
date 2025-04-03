import { useContext, useEffect, useRef, useState } from "react";
import ControlsContext from "../ControlsContext";
import { Line } from "@react-three/drei";
import { getPositions } from "./cuboidHelper";

export const PointsCuboid3d = ({ n }) => {
    const {
        cuboidX,
        cuboidY,
        cuboidZ,
        cuboidW,
        cuboidH,
        cuboidD,
        baseX,
        baseY,
        baseZ,
        baseR,
        innerLines,
        surfaceLines,
        outerLines,
        isInner,
        isSurface,
        isOuter
    } = useContext(ControlsContext);

    const [pointPositions, setPointPositions] = useState([]);
    const x1 = cuboidX - cuboidW / 2;
    const x2 = cuboidX + cuboidW / 2;
    const y1 = cuboidY - cuboidH / 2;
    const y2 = cuboidY + cuboidH / 2;
    const z1 = cuboidZ - cuboidD / 2;
    const z2 = cuboidZ + cuboidD / 2;
    const [ready, setReady] = useState(false);

    useEffect(() => {
        getPositions(x1, x2, y1, y2, z1, z2, n, baseR, positions => {
            setPointPositions(positions);
            setReady(true);
        });
    }, []);

    const panelColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "violet"
    ];
    
    const Points = ({positions}) => (
        <mesh>
            {
                Object.values(positions).map((p,i) => (
                    <mesh
                        key={i}
                    >
                        {
                            isInner &&
                            <mesh
                                position={[p.inner.x+baseX,p.inner.y+baseY,p.inner.z+baseZ]}
                            >
                                <sphereGeometry
                                    args={[.5, 1, 1]}
                                />
                                <meshPhongMaterial
                                    color={panelColors[i]}
                                    emissive={panelColors[i]}
                                />
                            </mesh>
                        }
                        {
                            isSurface &&
                            <mesh
                                position={[p.surface.x+baseX,p.surface.y+baseY,p.surface.z+baseZ]}
                            >
                                <sphereGeometry
                                    args={[.5, 1, 1]}
                                />
                                <meshPhongMaterial
                                    color={panelColors[i]}
                                    emissive={panelColors[i]}
                                />
                            </mesh>
                        }
                        {
                            isOuter &&
                            <mesh
                                position={[p.outer.x+baseX,p.outer.y+baseY,p.outer.z+baseZ]}
                            >
                                <sphereGeometry
                                    args={[.5, 1, 1]}
                                />
                                <meshPhongMaterial
                                    color={panelColors[i]}
                                    emissive={panelColors[i]}
                                />
                            </mesh>
                        }
                    </mesh>
                ))
            }
        </mesh>
    )

    const Lines = ({positions}) => (
        <mesh>
            {
                Object.values(positions).map((p,i) => (
                    <mesh
                        key={i}
                    >
                        {
                            innerLines &&
                            <Line
                                points={[[baseX, baseY, baseZ], [p.inner.x+baseX, p.inner.y+baseY, p.inner.z+baseZ]]}
                                color={panelColors[i]}
                                lineWidth={.1}
                            />
                        }
                        {
                            surfaceLines &&
                            <Line
                                points={[[p.inner.x+baseX, p.inner.y+baseY, p.inner.z+baseZ],[p.surface.x+baseX,p.surface.y+baseY,p.surface.z+baseZ]]}
                                color={panelColors[i]}
                                lineWidth={.1}
                            />
                        }
                        {
                            outerLines &&
                            <Line
                                points={[[p.surface.x+baseX,p.surface.y+baseY,p.surface.z+baseZ],[p.outer.x+baseX,p.outer.y+baseY,p.outer.z+baseZ]]}
                                color={panelColors[i]}
                                lineWidth={.1}
                            />
                        }
                    </mesh>
                ))
            }
        </mesh>
    )

    return (
        <mesh>
            {
                pointPositions.map((p,i) => (
                    <mesh
                        key={i}
                    >
                        <Points
                            positions={p}
                        />
                        <Lines
                            positions={p}
                        />
                    </mesh>
                ))
            }
        </mesh>
    )
}

export default PointsCuboid3d;