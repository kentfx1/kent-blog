import { useState } from "react";

const Test = () => {

    const [car, setCar] = useState('Lexus');
    const handleClick = () =>{
        setCar('Tesla');
    }
    return (
        <><p>{car}</p><button onClick={handleClick}>Click Me</button></> 

    );
}
 
export default Test;