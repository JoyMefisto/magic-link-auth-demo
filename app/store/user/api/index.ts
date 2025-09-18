export const api = {
	fetchMagicLink(email: string) {
		return $fetch('/api/auth/magic', {
			method: 'POST',
			body: { email }
		})
	},
	logout() {
		return $fetch('/api/auth/logout', {
			method: 'POST'
		})
	}
}