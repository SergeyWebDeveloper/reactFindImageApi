import axios from "axios/index";

const keyAPI = '8771405-07c286bc5c0e1192d6878ae2e';
const urlAPI = 'https://pixabay.com/api/';

export const callAPI = (search,amountImage,page) => {
	return axios.get(`${urlAPI}?key=${keyAPI}&q=${search}&image_type=photo&per_page=${amountImage}&page=${page}`)
};