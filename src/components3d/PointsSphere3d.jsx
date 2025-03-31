import { useContext, useEffect, useRef, useState } from "react";
import ControlsContext from "./ControlsContext";
import { Line } from "@react-three/drei";


export const PointsSphere3d = ({ n }) => {
    const {
        sphereX,
        sphereY,
        sphereZ,
        sphereR,
        baseX,
        baseY,
        baseZ,
        baseR
    } = useContext(ControlsContext);
    const [innerPointPositions, setInnerPointPosistions] = useState([]);
    const [surfacePointPositions, setSurfacePointPositions] = useState([]);
    const [outerPointPositions, setOuterPointPosistions] = useState([]);
    const [ready, setReady] = useState(false);

    const innerRef = useRef();
    const outerRef = useRef();

    useEffect(() => {
        const innerPositions = [];
        const surfacePositions = [];
        const outerPositions = [];
        for(let i=-Math.PI; i<Math.PI; i+= Math.PI*2/n) {
            for(let j=-Math.PI; j<=Math.PI; j+=2*Math.PI/n) {
                const red = Math.floor((Math.cos(i)+1) * 95 + 50);
                const green = Math.floor((Math.sin(i)+1) * 70 + 50);
                const blue = Math.floor((Math.tan(i)+1) * 50 + 35);
                const innerPoint = {
                    x : sphereR * Math.sin(i) * Math.cos(j) + sphereX,
                    y : sphereR * Math.sin(i) * Math.sin(j) + sphereY,
                    z : sphereR * Math.cos(i) + sphereZ,
                    red,green,blue
                };
                innerPositions.push(innerPoint);
            
                const outerPoint = {
                    x: (baseR*baseR*innerPoint.x)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                    y: (baseR*baseR*innerPoint.y)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                    z: (baseR*baseR*innerPoint.z)/(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z),
                    red, green, blue
                };
                outerPositions.push(outerPoint);
                const R = Math.sqrt(innerPoint.x*innerPoint.x+innerPoint.y*innerPoint.y+innerPoint.z*innerPoint.z);
    
                const surfacePoint = {
                    x: (R/baseR) * outerPoint.x,
                    y: (R/baseR) * outerPoint.y,
                    z: (R/baseR) * outerPoint.z,
                    red,green,blue
                }
                surfacePositions.push(surfacePoint);
            }
        }

        setInnerPointPosistions(innerPositions);
        setSurfacePointPositions(surfacePositions);
        setOuterPointPosistions(outerPositions);
        
        setReady(true);
    },[]);

    return (
        <mesh>
            <mesh
                ref={innerRef}
            >
                {
                    ready && innerPointPositions.map((inner,i) => (
                        <mesh key={i}>
                            <mesh
                                position={[inner.x + baseX, inner.y + baseY, inner.z + baseZ]}
                                castShadow
                                receiveShadow
                            >
                                <sphereGeometry
                                    args={[.5, 50, 50]}
                                />
                                <meshPhongMaterial
                                    color={`rgb(${inner.red},${inner.green},${inner.blue})`}
                                    emissive={`rgb(${inner.red},${inner.green},${inner.blue})`}
                                />
                            </mesh>
                        </mesh>
                    ))
                }
            </mesh>
            <mesh>
                {
                    ready && surfacePointPositions.map((surface,i) => (
                        <mesh
                        key={i}
                        position={[surface.x,surface.y,surface.z]}
                        >
                            <sphereGeometry
                                args={[.125,50,50]}
                                />
                            <meshPhongMaterial
                                color={`rgb(${surface.red},${surface.green},${surface.blue})`}
                                emissive={`rgb(${surface.red},${surface.green},${surface.blue})`}
                                emissiveIntensity={10}
                            />
                        </mesh>
                    ))
                }
            </mesh>
            <mesh
                ref={outerRef}
            >
                {
                    ready && outerPointPositions.map((outer, i) => (
                        <mesh
                            key={i}
                        >
                            <mesh
                                position={[outer.x + baseX, outer.y + baseY, outer.z + baseZ]}
                                castShadow
                                receiveShadow
                            >
                                <sphereGeometry
                                    args={[.5, 50, 50]}
                                />
                                <meshPhongMaterial
                                    color={`rgb(${outer.red},${outer.green},${outer.blue})`}
                                    emissive={`rgb(${outer.red},${outer.green},${outer.blue})`}
                                />
                            </mesh>
                        </mesh>
                    ))
                }
            </mesh>
        </mesh>
    )
}

export default PointsSphere3d;