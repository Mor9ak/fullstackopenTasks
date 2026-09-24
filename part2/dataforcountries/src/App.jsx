import Filter from "./components/Filter.jsx";
import {useEffect, useState} from "react";
import {getAll} from "./backend.js";
import Show from "./components/Show.jsx";

const App = () => {

    const [countries, setCountries] = useState([]);
    const [filter, setFilter] = useState('');

    const getData = async () => {
        const data = (await getAll()).data;
        setCountries(data);
    }

    useEffect(() => {
        try {
            getData();
        } catch (error) {
            console.error(error);
        }
    }, []);

    const countriesToShow = countries.filter(c =>
        c.name.official.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <Filter setQuery={setFilter}/>
            <Show countries={countriesToShow} />
        </div>
    );
}

export default App;