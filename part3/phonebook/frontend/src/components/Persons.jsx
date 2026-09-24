import Line from "./Line.jsx";
import DeleteButton from "./DeleteButton.jsx";

const Persons = ({persons, onChange}) => {
    return (
        <ul>
            {persons.map((person) => (
                <li key={person.id}>
                    <Line name={person.name} number={person.number}/>
                    <DeleteButton person={person} onChange={onChange} />
                </li>
            ))}
        </ul>
    );
}

export default Persons;