import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MaskCursor = () => {
    const cursor = useRef(null)

    const cursorFollower = (e) => {
        gsap.to(cursor.current, {
            x:e.clientX -18,
            y:e.clientY -18,

        }    
        )
    }

    useEffect(() => {
        window.addEventListener("mousemove", cursorFollower)

        return () => window.removeEventListener("mousemove", cursorFollower)
    }, [])


    return(
        <div>hey</div>
    )
}

export default MaskCursor;