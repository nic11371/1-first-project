import * as axios from "axios";

export const instance = () => {

	return axios.create({
		withCredentials: true,
		baseURL: 'https://social-network.samuraijs.com/api/1.0/',
		headers: {
			"API-KEY": "3aade411-572d-4e59-a034-44be6761daea"
		}
	})
}