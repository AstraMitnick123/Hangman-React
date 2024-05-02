
import { useEffect, useState } from "react"
import "../styles/Counter.css"

export const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setCounter(counter + 1);
        }, 1000) 

        return () => {
            clearInterval(interval);
        }
            
        
    }, [counter]);

  return (
    <>
      <div className="cajita" style={{gap: "30px"}}>
        <p style={{ fontFamily: 'monospace', fontWeight: 'bold', fontSize: '25px' }}>
          Han pasado: {counter} segundos <br /> desde que entraste a jugar 
        </p>
      </div>
    </>
  )
}
