import { PerspectiveCamera } from "@react-three/drei"
import { Camera } from "three"
import {angleToRadians} from "../../Assets/angle"

function Three() {
    return(
        <>
        <PerspectiveCamera makeDefault position={[0,1,5]}/>



        {/* Ball */}
        <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.5,32,32]}/>
            <meshStandardMaterial color="#FFFFFF"/>
        </mesh>
        {/* floor */}
        <mesh rotation={[-(angleToRadians(90)),0,0]}>
            <planeGeometry args={[7,7]}/>
            <meshStandardMaterial color="#3A40F3"/>
        </mesh>



        <ambientLight args={["#FFFFFF", 1]}/>
        </>
    )

}

export default Three