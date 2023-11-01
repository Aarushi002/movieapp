import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRmNDJjOGFiMzJmNjdmM2ZjYTg4YzYzYzhjNzU2OSIsInN1YiI6IjY1NDFlYTRiMWFjMjkyMDBmZmU5ZDFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zXksCWmPNDbjReKWAb9O0mDeogWNqiJMLk3R-k58aZo'

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};