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
        return new BufferAttribute(new Float32Array(p), 3);
      }, [count]);

    
    return(
        <>
        <PerspectiveCamera makeDefault position={[0,1,5]}/>
        <OrbitControls ref={orbitControlsRef} enableZoom={false} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)}/>
        <points>
            <bufferGeometry>
                <bufferAttribute attach={"attributes-position"} {...points} />
            </bufferGeometry>
            <pointsMaterial
                map={imgTex}
                size={0.1}
                threshold={0.1}
                color={0xff00ff}
                sizeAttenuation={true}
            />
        </points>

        </>
        
    )

}

export default Three