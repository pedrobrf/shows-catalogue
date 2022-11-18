import axios from 'axios';
import { BASE_URL } from '../constants/api';

export const getService = (url, params, headers) =>
	axios
		.get(url, { params, headers })
		.then(r => r)
		.catch(e => alert('Error'));

export const searchName = search =>
	getService(BASE_URL + `search/shows?q=${search}`).then(r => r);
