const Filter = ({ setQuery }) => {

    const handleQueryChange = (e) => {
        const q = e.target.value;
        if (!q) {
            setQuery('');
        } else {
            setQuery(q);
        }
    }

    return (
        <div>
            <label>Search</label>
            <input
                type="text"
                onChange={(e) =>  handleQueryChange(e)}
            />
        </div>
    )
}

export default Filter