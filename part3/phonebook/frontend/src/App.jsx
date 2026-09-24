import {useEffect, useState} from 'react'
import Persons from "./components/Persons.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Filter from "./components/Filter.jsx";

import {getData} from "./backend.js";

const App = () => {

    const [persons, setPersons] = useState([])
    const loadPersons = async () => {
        try {
            const data = await getData();
            setPersons(data)
        } catch (error) {
            console.log(error);
            setPersons([]);
        }
    }

    //npx json-server --port 3001 db.json
    useEffect(() => {
        loadPersons();
    }, []);

    const [query, setQuery] = useState('');
    const filteredPersons = persons ? persons.filter(person => person.name.toLowerCase().includes(query.toLowerCase())) : '';

    return (
        <div>
            <h2>Phonebook</h2>
            <Filter setQuery={setQuery}/>
            <PersonForm persons={persons} onAdded={loadPersons} />
            <h2>Numbers</h2>
            <Persons persons={filteredPersons} onChange={loadPersons}/>
        </div>
    )
}

export default App;