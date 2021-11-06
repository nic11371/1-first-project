import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "3aade411-572d-4e59-a034-44be6761daea"
	}
})

export const usersAPI = {
	getUsers() {
		return instance.get(``)
	}
}