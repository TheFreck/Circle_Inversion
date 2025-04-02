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
    const z1 = cuboidZ - cuboidD /2;
    const z2 = cuboidZ + cuboidD /2;
    const [ready, setReady] = useState(false);

    useEffect(() => {
        getPositions(x1,x2,y1,y2,z1,z2,n,baseR,positions => {
            setPointPositions(positions);
            setReady(true);
        });
    }, []);

    const InnerLines = ({p}) => (
        <mesh>
            <mesh
                position={[p.p1.innerP1.x + baseX, p.p1.innerP1.y + baseY, p.p1.innerP1.z + baseZ]}
            >
                <sphereGeometry
                    args={[.5, 50, 50]}
                />
                <meshPhongMaterial
                    color={`rgb(${p.p1.innerP1.red},${p.p1.innerP1.green},${p.p1.innerP1.blue})`}
                    emissive={`rgb(${p.p1.innerP1.red},${p.p1.innerP1.green},${p.p1.innerP1.blue})`}
                />
            </mesh>
            <mesh
                position={[p.p2.innerP2.x + baseX, p.p2.innerP2.y + baseY, p.p2.innerP2.z + baseZ]}
            >
                <sphereGeometry
                    args={[.5, 50, 50]}
                />
                <meshPhongMaterial
                    color={`rgb(${p.p2.innerP2.red},${p.p2.innerP2.green},${p.p2.innerP2.blue})`}
                    emissive={`rgb(${p.p2.innerP2.red},${p.p2.innerP2.green},${p.p2.innerP2.blue})`}
                />
            </mesh>
            <mesh
                position={[p.p3.innerP3.x + baseX, p.p3.innerP3.y + baseY, p.p3.innerP3.z + baseZ]}
            >
                <sphereGeometry
                    args={[.5, 50, 50]}
                />
                <meshPhongMaterial
                    color={`rgb(${p.p3.innerP3.red},${p.p3.innerP3.green},${p.p3.innerP3.blue})`}
                    emissive={`rgb(${p.p3.innerP3.red},${p.p3.innerP3.green},${p.p3.innerP3.blue})`}
                />
            </mesh>
            <mesh
                position={[p.p4.innerP4.x + baseX, p.p4.innerP4.y + baseY, p.p4.innerP4.z + baseZ]}
            >
                <sphereGeometry
                    args={[.5, 50, 50]}
                />
                <meshPhongMaterial
                    color={`rgb(${p.p4.innerP4.red},${p.p4.innerP4.green},${p.p4.innerP4.blue})`}
                    emissive={`rgb(${p.p4.innerP4.red},${p.p4.innerP4.green},${p.p4.innerP4.blue})`}
                />
            </mesh>
            <mesh
                position={[p.p5.innerP5.x + baseX, p.p5.innerP5.y + baseY, p.p5.innerP5.z + baseZ]}
            >
                <sphereGeometry
                    args={[.5, 50, 50]}
                />
                <meshPhongMaterial
                    color={`rgb(${p.p5.innerP5.red},${p.p5.innerP5.green},${p.p5.innerP5.blue})`}
                    emissive={`rgb(${p.p5.innerP5.red},${p.p5.innerP5.green},${p.p5.innerP5.blue})`}
                />
            </mesh>
            <mesh
                position={[p.p6.innerP6.x + baseX, p.p6.innerP6.y + baseY, p.p6.innerP6.z + baseZ]}
            >
                <sphereGeometry
                    args={[.5, 50, 50]}
                />
                <meshPhongMaterial
                    color={`rgb(${p.p6.innerP6.red},${p.p6.innerP6.green},${p.p6.innerP6.blue})`}
                    emissive={`rgb(${p.p6.innerP6.red},${p.p6.innerP6.green},${p.p6.innerP6.blue})`}
                />
            </mesh>
        </mesh>
    )

    return (
        <mesh>
            {
                ready && pointPositions.map((p, i) => (
                    <mesh
                        key={i}
                    >
                        {
                            isInner &&
                            <InnerLines p={p}/>
                        }
                        {
                            innerLines &&
                            <mesh>
                                <Line
                                    points={[[0, 0, 0], [p.p1.innerP1.x, p.p1.innerP1.y, p.p1.innerP1.z]]}
                                    color={`rgb(${p.p1.innerP1.red},${p.p1.innerP1.green},${p.p1.innerP1.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[0, 0, 0], [p.p2.innerP2.x, p.p2.innerP2.y, p.p2.innerP2.z]]}
                                    color={`rgb(${p.p2.innerP2.red},${p.p2.innerP2.green},${p.p2.innerP2.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[0, 0, 0], [p.p3.innerP3.x, p.p3.innerP3.y, p.p3.innerP3.z]]}
                                    color={`rgb(${p.p3.innerP3.red},${p.p3.innerP3.green},${p.p3.innerP3.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[0, 0, 0], [p.p4.innerP4.x, p.p4.innerP4.y, p.p4.innerP4.z]]}
                                    color={`rgb(${p.p4.innerP4.red},${p.p4.innerP4.green},${p.p4.innerP4.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[0, 0, 0], [p.p5.innerP5.x, p.p5.innerP5.y, p.p5.innerP5.z]]}
                                    color={`rgb(${p.p5.innerP5.red},${p.p5.innerP5.green},${p.p5.innerP5.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[0, 0, 0], [p.p6.innerP6.x, p.p6.innerP6.y, p.p6.innerP6.z]]}
                                    color={`rgb(${p.p6.innerP6.red},${p.p6.innerP6.green},${p.p6.innerP6.blue})`}
                                    lineWidth={.1}
                                />
                            </mesh>
                        }
                        {
                            isSurface &&
                            <mesh>
                                <mesh
                                    name="p1"
                                    position={[p.p1.surfaceP1.x + baseX, p.p1.surfaceP1.y + baseY, p.p1.surfaceP1.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p1.surfaceP1.red},${p.p1.surfaceP1.green},${p.p1.surfaceP1.blue})`}
                                        emissive={`rgb(${p.p1.surfaceP1.red},${p.p1.surfaceP1.green},${p.p1.surfaceP1.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    name="p2"
                                    position={[p.p2.surfaceP2.x + baseX, p.p2.surfaceP2.y + baseY, p.p2.surfaceP2.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p2.surfaceP2.red},${p.p2.surfaceP2.green},${p.p2.surfaceP2.blue})`}
                                        emissive={`rgb(${p.p2.surfaceP2.red},${p.p2.surfaceP2.green},${p.p2.surfaceP2.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    name="p3"
                                    position={[p.p3.surfaceP3.x + baseX, p.p3.surfaceP3.y + baseY, p.p3.surfaceP3.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p3.surfaceP3.red},${p.p3.surfaceP3.green},${p.p3.surfaceP3.blue})`}
                                        emissive={`rgb(${p.p3.surfaceP3.red},${p.p3.surfaceP3.green},${p.p3.surfaceP3.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    name="p4"
                                    position={[p.p4.surfaceP4.x + baseX, p.p4.surfaceP4.y + baseY, p.p4.surfaceP4.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p4.surfaceP4.red},${p.p4.surfaceP4.green},${p.p4.surfaceP4.blue})`}
                                        emissive={`rgb(${p.p4.surfaceP4.red},${p.p4.surfaceP4.green},${p.p4.surfaceP4.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    name="p5"
                                    position={[p.p5.surfaceP5.x + baseX, p.p5.surfaceP5.y + baseY, p.p5.surfaceP5.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p5.surfaceP5.red},${p.p5.surfaceP5.green},${p.p5.surfaceP5.blue})`}
                                        emissive={`rgb(${p.p5.surfaceP5.red},${p.p5.surfaceP5.green},${p.p5.surfaceP5.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    name="p6"
                                    position={[p.p6.surfaceP6.x + baseX, p.p6.surfaceP6.y + baseY, p.p6.surfaceP6.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p6.surfaceP6.red},${p.p6.surfaceP6.green},${p.p6.surfaceP6.blue})`}
                                        emissive={`rgb(${p.p6.surfaceP6.red},${p.p6.surfaceP6.green},${p.p6.surfaceP6.blue})`}
                                    />
                                    {console.log("p6: ", [p.p6.surfaceP6.x + baseX, p.p6.surfaceP6.y + baseY, p.p6.surfaceP6.z + baseZ])}
                                </mesh>
                            </mesh>
                        }
                        {
                            surfaceLines &&
                            <mesh>
                                <Line
                                    points={[[p.p1.innerP1.x, p.p1.innerP1.y, p.p1.innerP1.z], [p.p1.surfaceP1.x, p.p1.surfaceP1.y, p.p1.surfaceP1.z]]}
                                    color={`rgb(${p.p1.surfaceP1.red},${p.p1.surfaceP1.green},${p.p1.surfaceP1.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p2.innerP2.x, p.p2.innerP2.y, p.p2.innerP2.z], [p.p2.surfaceP2.x, p.p2.surfaceP2.y, p.p2.surfaceP2.z]]}
                                    color={`rgb(${p.p2.surfaceP2.red},${p.p2.surfaceP2.green},${p.p2.surfaceP2.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p3.innerP3.x, p.p3.innerP3.y, p.p3.innerP3.z], [p.p3.surfaceP3.x, p.p3.surfaceP3.y, p.p3.surfaceP3.z]]}
                                    color={`rgb(${p.p3.surfaceP3.red},${p.p3.surfaceP3.green},${p.p3.surfaceP3.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p4.innerP4.x, p.p4.innerP4.y, p.p4.innerP4.z], [p.p4.surfaceP4.x, p.p4.surfaceP4.y, p.p4.surfaceP4.z]]}
                                    color={`rgb(${p.p4.surfaceP4.red},${p.p4.surfaceP4.green},${p.p4.surfaceP4.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p5.innerP5.x, p.p5.innerP5.y, p.p5.innerP5.z], [p.p5.surfaceP5.x, p.p5.surfaceP5.y, p.p5.surfaceP5.z]]}
                                    color={`rgb(${p.p5.surfaceP5.red},${p.p5.surfaceP5.green},${p.p5.surfaceP5.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p6.innerP6.x, p.p6.innerP6.y, p.p6.innerP6.z], [p.p6.surfaceP6.x, p.p6.surfaceP6.y, p.p6.surfaceP6.z]]}
                                    color={`rgb(${p.p6.surfaceP6.red},${p.p6.surfaceP6.green},${p.p6.surfaceP6.blue})`}
                                    lineWidth={.1}
                                />
                            </mesh>
                        }
                        {
                            isOuter &&
                            <mesh>
                                <mesh
                                    position={[p.p1.outerP1.x + baseX, p.p1.outerP1.y + baseY, p.p1.outerP1.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p1.outerP1.red},${p.p1.outerP1.green},${p.p1.outerP1.blue})`}
                                        emissive={`rgb(${p.p1.outerP1.red},${p.p1.outerP1.green},${p.p1.outerP1.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    position={[p.p2.outerP2.x + baseX, p.p2.outerP2.y + baseY, p.p2.outerP2.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p2.outerP2.red},${p.p2.outerP2.green},${p.p2.outerP2.blue})`}
                                        emissive={`rgb(${p.p2.outerP2.red},${p.p2.outerP2.green},${p.p2.outerP2.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    position={[p.p3.outerP3.x + baseX, p.p3.outerP3.y + baseY, p.p3.outerP3.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p3.outerP3.red},${p.p3.outerP3.green},${p.p3.outerP3.blue})`}
                                        emissive={`rgb(${p.p3.outerP3.red},${p.p3.outerP3.green},${p.p3.outerP3.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    position={[p.p4.outerP4.x + baseX, p.p4.outerP4.y + baseY, p.p4.outerP4.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p4.outerP4.red},${p.p4.outerP4.green},${p.p4.outerP4.blue})`}
                                        emissive={`rgb(${p.p4.outerP4.red},${p.p4.outerP4.green},${p.p4.outerP4.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    position={[p.p5.outerP5.x + baseX, p.p5.outerP5.y + baseY, p.p5.outerP5.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p5.outerP5.red},${p.p5.outerP5.green},${p.p5.outerP5.blue})`}
                                        emissive={`rgb(${p.p5.outerP5.red},${p.p5.outerP5.green},${p.p5.outerP5.blue})`}
                                    />
                                </mesh>
                                <mesh
                                    position={[p.p6.outerP6.x + baseX, p.p6.outerP6.y + baseY, p.p6.outerP6.z + baseZ]}
                                >
                                    <sphereGeometry
                                        args={[.5, 50, 50]}
                                    />
                                    <meshPhongMaterial
                                        color={`rgb(${p.p6.outerP6.red},${p.p6.outerP6.green},${p.p6.outerP6.blue})`}
                                        emissive={`rgb(${p.p6.outerP6.red},${p.p6.outerP6.green},${p.p6.outerP6.blue})`}
                                    />
                                </mesh>
                            </mesh>
                        }
                        {
                            outerLines &&
                            <mesh>
                                <Line
                                    points={[[p.p1.surfaceP1.x,p.p1.surfaceP1.y,p.p1.surfaceP1.z], [p.p1.outerP1.x, p.p1.outerP1.y, p.p1.outerP1.z]]}
                                    color={`rgb(${p.p1.outerP1.red},${p.p1.outerP1.green},${p.p1.outerP1.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p2.surfaceP2.x,p.p2.surfaceP2.y,p.p2.surfaceP2.z], [p.p2.outerP2.x, p.p2.outerP2.y, p.p2.outerP2.z]]}
                                    color={`rgb(${p.p2.outerP2.red},${p.p2.outerP2.green},${p.p2.outerP2.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p3.surfaceP3.x,p.p3.surfaceP3.y,p.p3.surfaceP3.z], [p.p3.outerP3.x, p.p3.outerP3.y, p.p3.outerP3.z]]}
                                    color={`rgb(${p.p3.outerP3.red},${p.p3.outerP3.green},${p.p3.outerP3.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p4.surfaceP4.x,p.p4.surfaceP4.y,p.p4.surfaceP4.z], [p.p4.outerP4.x, p.p4.outerP4.y, p.p4.outerP4.z]]}
                                    color={`rgb(${p.p4.outerP4.red},${p.p4.outerP4.green},${p.p4.outerP4.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p5.surfaceP5.x,p.p5.surfaceP5.y,p.p5.surfaceP5.z], [p.p5.outerP5.x, p.p5.outerP5.y, p.p5.outerP5.z]]}
                                    color={`rgb(${p.p5.outerP5.red},${p.p5.outerP5.green},${p.p5.outerP5.blue})`}
                                    lineWidth={.1}
                                />
                                <Line
                                    points={[[p.p6.surfaceP6.x,p.p6.surfaceP6.y,p.p6.surfaceP6.z], [p.p6.outerP6.x, p.p6.outerP6.y, p.p6.outerP6.z]]}
                                    color={`rgb(${p.p6.outerP6.red},${p.p6.outerP6.green},${p.p6.outerP6.blue})`}
                                    lineWidth={.1}
                                />
                            </mesh>
                        }
                    </mesh>
                ))
            }
        </mesh>
    )
}

export default PointsCuboid3d;