import React from 'react';
import Part from './Part';
import Total from "./Total.jsx";

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} part={part} />
            ))}
            <Total key={parts.length} parts={parts} />
        </div>
    );
}

export default Content;