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
	},
	getProfile(userId) {
		console.warn("Obsolete method. Please ProfileAPI object")
		return profileAPI.getProfile(userId)
	}
}

export const profileAPI = {
	getProfile(userId) {
		return instance().get(`profile/${userId}`)
			.then(response => response.data)
	},
	getStatus(userId) {
		return instance().get(`profile/status/${userId}`)

	},
	updateStatus(status) {
		return instance().put(`profile/status`, {
			status: status
		})
	},
	savePhoto(photoFile) {
		const formData = new FormData();
		formData.append("image", photoFile)
		return instance().put(`profile/photo`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}
		)
	},
	updateProfile(profile) {
		return instance().put(`profile`, profile)
}
}

export const authAPI = {
	me() {
		return instance().get(`auth/me`)
	},
	login(email, password, rememberMe = false, captcha = null) {
		return instance().post(`auth/login`, {
			email: email,
			password: password,
			rememberMe: rememberMe,
			captcha: captcha
		}
		)
	},
	logout() {
		return instance().delete(`auth/login/`);
	}
}

export const securityAPI = {
	getCaptchaURL() {
		return instance().get(`security/get-captcha-url`);
	}
}



