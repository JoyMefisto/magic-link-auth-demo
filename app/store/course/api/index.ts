export const api = {
  fetchCourses() {
    return $fetch('/api/courses')
  },
  fetchUserCourses() {
    return $fetch('/api/user/courses')
  }
}
