import {delPerson} from "../backend.js";

const DeleteButton = ({person, onChange}) => {
    return (
        <button onClick={async () => {
            if (confirm(`Do u want to delete ${person.name}`)) {
                await delPerson(person.id);
                await onChange();
            }
        }}>
            delete
        </button>
    );
}

export default DeleteButton;