const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

let persons = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
];

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    res.send(persons);
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = persons.find(note => note.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = persons.filter(note => note.id !== id)

    response.status(204).end()
})

const generateId = () => {
    const maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : persons.length;
    return String(maxId + 1);
}

app.post('/api/persons', (request, response) => {
    const {name, number} = request.body;

    if (!name || !number) {
        return response.status(400).json({error: 'no name or number'});
    }
    if (persons.find(p => p.name === name)) {
        return response.status(400).json({error: 'must be unique'});
    }

    const newPerson = { name, number, id: generateId()}

    persons = [...persons, newPerson];
    response.json(newPerson);
})

app.get('/info', (request, response) => {
    response.send(
        `<div>\n` +
        `        <p>Phonebook has info for ${persons.length}</p>\n` +
        `        <p>${new Date}</p>\n` +
        `    </div>`

    )
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})