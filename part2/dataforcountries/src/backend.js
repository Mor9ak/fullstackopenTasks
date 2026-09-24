import axios from "axios";

export const getAll = async () => {
    return await axios.get('https://studies.cs.helsinki.fi/restcountries/api/all');
}
export const getOne = async ({name}) => {
    return await axios.get(`https://studies.cs.helsinki.fi/restcountries/api/name/${name}`);
}