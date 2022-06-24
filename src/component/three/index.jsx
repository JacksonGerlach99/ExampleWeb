import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect, useRef, useMemo } from "react"
import { Camera } from "three"
import {angleToRadians} from "../../Assets/angle"
import circleImg from '../../Assets/circle.png';
import * as THREE from "three";
import gsap from "gsap"
import { BufferAttribute } from "three";

function Three({ count = 1000 }) {
    const orbitControlsRef = useRef(null);

    const imgTex = useLoader(THREE.TextureLoader, circleImg);
    const bufferRef = useRef();

    
    const points = useMemo(() => {
        const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
        return new BufferAttribute(new Float32Array(p), 2);
      }, [count]);

    
    return(
        <>
        <PerspectiveCamera makeDefault position={[0,1,5]}/>
        <OrbitControls ref={orbitControlsRef} enableZoom={false} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(360)}/>
        <points>
            <bufferGeometry>
                <bufferAttribute attach={"attributes-position"} {...points} />
            </bufferGeometry>
            <pointsMaterial
                attach={"material"}
                map={imgTex}
                size={0.1}
                sizeAttenuation
                color={0x00AAff}
                transparent ={false}
                alphaTest ={0.5}
                opacity={1}
            />
        </points>

        </>
        
    )

}

export default Three