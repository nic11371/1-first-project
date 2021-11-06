import { instance } from "./instance";

export const usersAPI = {
	getUsers(currentPage, pageSize) {
		return instance().get(`users?page=${currentPage}&count=${pageSize}`)
			.then(resolve => resolve.data)
	},
	follow(userId) {
		return instance().post(`follow/${userId}`)
			.then(response => response.data)
	},
	unfollow(userId) {
		return instance().delete(`follow/${userId}`)
			.then(resolve => resolve.data)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance().get(`profile/${userId}`)
			.then(response => response.data)
	}
}

export const authAPI = {
	getAuth() {
		return instance().get(`auth/me`)
			.then(response => response.data)
	}
}