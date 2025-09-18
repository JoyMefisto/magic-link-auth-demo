import { defineEventHandler } from 'h3';
import { COURSES } from '../../db/course'

export default defineEventHandler((event) => {
  try {
    setResponseStatus(event, 200)

    return { courses: [COURSES[0], COURSES[1]], message: 'Data sent successfully' };
  } catch(e) {
    setResponseStatus(event, e.code || 400)

		return { message: e.message || 'Something went wrong' }
  }
});
