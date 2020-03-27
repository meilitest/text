import { login, logout } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

export default {
	namespaced: true,
	state: {
		token: getToken()
	},
	mutations: {
		RESET_STATE: (state) => {
			Object.assign(state, {
				token: getToken(),
			})
		},
		SET_TOKEN: (state, token) => {
			state.token = token
		}
	},
	actions: {
		// user login
		login({
			commit
		}, userInfo) {
			const {
				username,
				password
			} = userInfo
			return new Promise((resolve, reject) => {
				login({
					username: username.trim(),
					password: password
				}).then(response => {
					const data = {
						token: "admin-token"
					}
					commit('SET_TOKEN', data.token)
					setToken(data.token);
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},
		// user logout
		logout({
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				logout(state.token).then(() => {
					removeToken() // must remove  token  first
					resetRouter()
					commit('RESET_STATE')
					resolve()
				}).catch(error => {
					reject(error)
				})
			})
		},

		// remove token
		resetToken({
			commit
		}) {
			return new Promise(resolve => {
				removeToken() // must remove  token  first
				commit('RESET_STATE')
				resolve()
			})
		}

	}
}