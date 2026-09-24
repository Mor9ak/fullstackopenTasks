import { useState } from 'react';
import { addPerson, putPerson } from "../backend.js";

const PersonForm = ({ persons, onAdded }) => {
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    };

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value);
    };

    const resetForm = () => {
        setNewName('');
        setNewNumber('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const trimmedName = newName.trim();
        const trimmedNumber = newNumber.trim();

        if (!trimmedName || !trimmedNumber) {
            alert('Name and number are required');
            return;
        }

        const existingPerson = persons.find(
            p => p.name.toLowerCase() === trimmedName.toLowerCase()
        );

        if (existingPerson) {
            const shouldReplace = confirm(
                `${trimmedName} is already in phonebook, replace old number with a new one?`
            );

            if (!shouldReplace) return;

            try {
                await putPerson({
                    name: trimmedName,
                    number: trimmedNumber,
                    id: existingPerson.id,
                });
                await onAdded();
                resetForm();
            } catch (error) {
                console.error('Failed to update person:', error);
                alert('Failed to rewrite person');
            }

            return;
        }

        try {
            await addPerson({ name: trimmedName, number: trimmedNumber });
            await onAdded();
            resetForm();
        } catch (error) {
            console.error('Failed to add person:', error);
            alert('Failed to add person');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        onChange={handleNameChange}
                        value={newName}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Number</label>
                    <input
                        id="phone"
                        type="text"
                        onChange={handleNumberChange}
                        value={newNumber}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;