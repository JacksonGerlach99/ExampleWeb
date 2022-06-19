import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Camera } from "three"
import {angleToRadians} from "../../Assets/angle"
import * as THREE from "three";

function Three() {
    const orbitControlsRef = useRef(null);
    useFrame((state) =>{
        if(!!orbitControlsRef) {
            const {x,y} =state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y+1) * angleToRadians(90-30));
            orbitControlsRef.current.update();
        }

    })
    
    useEffect(() =>{
        if(!!orbitControlsRef) {
            console.log(orbitControlsRef.current);
        }

    }, [orbitControlsRef.current])
    
    
    return(
        <>
        <PerspectiveCamera makeDefault position={[0,1,5]}/>
        <OrbitControls ref={orbitControlsRef} enableZoom={false} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>



        {/* Ball */}
        <mesh position={[0, 0.5, 0]} castShadow>
            <sphereGeometry args={[0.5,32,32]}/>
            <meshStandardMaterial color="#FFFFFF" metalness={0.6} roughness={0.2}/>
        </mesh>
        {/* floor */}
        <mesh rotation={[-(angleToRadians(90)),0,0]} receiveShadow>
            <planeGeometry args={[20,20]}/>
            <meshStandardMaterial color="#4EC5F1"/>
        </mesh>



        <ambientLight args={["#FFFFFF", 0.25]}/>


        {/* spotlight light */}
        <spotLight args={ ["#ffffff", 1.5, 7, angleToRadians(45), 0.4 ]} position={[-3, 1, 0]} castShadow/>
        
        {/* environment */}
        <Environment background>
            <mesh>
                <sphereGeometry args={[50, 100,100]} />
                <meshBasicMaterial color={"#11a0d4"} side = {THREE.BackSide}/>
            </mesh>
        </Environment>

        </>
        
    )

}

export default Three