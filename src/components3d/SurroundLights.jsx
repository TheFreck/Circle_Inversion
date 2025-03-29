export const SurroundLights = () => {
    return (
        <mesh>
            <ambientLight
                intensity={1}
                color="red"
            />
            <pointLight
                position={[200,200,200]}
                color="#faa302"
                intensity={100000}
            />
            <pointLight
                position={[-200,-200,-200]}
                color="#97fa02"
                intensity={100000}
            />
            <pointLight
                position={[-200,200,200]}
                color="#02fa2c"
                intensity={100000}
            />
            <pointLight
                position={[200,-200,-200]}
                color="#02fa2c"
                intensity={100000}
            />
            <pointLight
                position={[-200,-200,200]}
                color="#0234fa"
                intensity={100000}
            />
            <pointLight
                position={[-200,200,-200]}
                color="#9702fa"
                intensity={100000}
            />
            <pointLight
                position={[200,-200,200]}
                color="#9702fa"
                intensity={100000}
            />
        </mesh>
    )
}

export default SurroundLights;