import to from 'await-to-js'
import { api } from '@/store/course/api/index'

interface ITopic {
	id: string
	title: string
	desc: string
}

export interface ICourse {
	id: string
	title: string
	topics: ITopic[]
}

interface ICourseState {
	courses: ICourse[] | []
	userCourses: ICourse[] | []
}

export const useCourseStore = defineStore('course', {
	state: (): ICourseState => ({
		courses: [],
		userCourses: []
	}),
	getters: {
		getCourses: (state) => state.courses,
		getUserCourses: (state) => state.userCourses
	},
	actions: {
		async fetchCourses() {
			const [err, data] = await to(api.fetchCourses())

			if(data) {
				this.courses = data?.courses || []

				return Promise.resolve(this.courses)
			}

			if(err) {
				return Promise.reject()
			}
		},
		async fetchUserCourses() {
			const [err, data] = await to(api.fetchUserCourses())

			if(data) {
				this.userCourses = data?.courses || []

				return Promise.resolve(this.courses)
			}

			if(err) {
				return Promise.reject()
			}
		}
	}
})