import { useEffect, useRef } from "react";

const useIdleCall = (callback: () => void,data:[any], delay: number,) => {
    const idleRef = useRef<NodeJS.Timeout>();
    
    useEffect(() => {
        if(idleRef.current) clearTimeout(idleRef.current);
        idleRef.current =setTimeout(callback, delay);
    }, [...data,delay]);
}

export default useIdleCall;