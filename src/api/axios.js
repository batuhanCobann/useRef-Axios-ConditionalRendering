import axios from "axios";

const BASEURL_HACKERRANK_API = `https://jsonmock.hackerrank.com/api/`,
BASEURL_JSON_JSON_PLACEHOLDER_API = `https://jsonplaceholder.typicode.com/`;

export const hackerrankAPI = axios.create({
    baseURL: BASEURL_HACKERRANK_API,
});

hackerrankAPI.interceptors.response.use((response) => response.data)


export const jsonPlaceHolderAPI = axios.create({
    baseURL: BASEURL_JSON_JSON_PLACEHOLDER_API,
})

jsonPlaceHolderAPI.interceptors.response.use((response) => response.data)


