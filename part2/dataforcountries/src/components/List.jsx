import Line from "./Line.jsx";

const List = ({toShow}) => {

    return (
        <ul>
            {toShow.map(c =>
                <li key={c.name.official}>
                    <Line country={c} />
                </li>
            )}
        </ul>
    );
}

export default List;