import to from 'await-to-js'
import { api } from '@/store/user/api'

interface IMagicLink {
	link: string
	message: string
}

interface IUser {
	email: string | null
}

interface IUserState {
	magicLink: IMagicLink | null
	user: IUser | null
	isAuthorized: boolean
}

export const useUserStore = defineStore('user', {
	state: (): IUserState => ({
		magicLink: null,
		user: {
			email: null,
		},
		isAuthorized: false,
	}),
	getters: {
		hasAuth: (state) => state.isAuthorized
	},
	actions: {
		setUser(user: IUser | null) {
			if(user) {
				this.user = user
				this.isAuthorized = Boolean(user)
			}
		},
		async fetchMagicLink(email: string) {
			const [err, data] = await to(api.fetchMagicLink(email))

			if(data) {
				this.magicLink = data

				return Promise.resolve(this.magicLink)
			}

			if(err) {
				return Promise.reject(err)
			}
		},
		async logout() {
			const [err, data] = await to(api.logout())

			if(data) {
				this.isAuthorized = false
				this.user = null

				return Promise.resolve(true)
			}

			if(err) {
				return Promise.reject()
			}
		}
	}
})