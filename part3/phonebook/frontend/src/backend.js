import axios from "axios";

const url = "http://localhost:3001/api/persons";

export const getData = async () => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const addPerson = async (person) => {
    try {
        return await axios.post(url, person);
    } catch (error) {
        console.log(error);
    }
}

export const delPerson = async (personId) => {
    try {
        return await axios.delete(`${url}/${personId}`);
    } catch (error) {
        console.log(error);
    }
}

export const putPerson = async (person) => {
    try {
        return await axios.put(`${url}/${person.id}`, person);
    } catch (error) {
        console.log(error);
    }
}