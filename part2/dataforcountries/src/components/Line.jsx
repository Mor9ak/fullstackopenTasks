import Country from './Country';
import {useState} from "react";

const Line = ({country}) => {

    const [showFull, setShowFull] = useState(false);

    return (
        <div>
            <p>{country.name.official}</p>
            <button type={'button'} onClick={() => setShowFull(!showFull)}>{showFull ? 'Hide' : 'Show'}</button>
            {showFull && <Country country={country}/>}
        </div>
    )
}

export default Line;