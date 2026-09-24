import List from "./List";
import Country from "./Country";

const Show = ({countries}) => {
    if (countries.length > 10) { return <p>too much</p>; }
    if (countries.length > 1) { return <List toShow={countries} />}
    if (countries.length === 1) { return <Country country={countries[0]} /> }
    else { return <p>no matches</p>}
}

export default Show;