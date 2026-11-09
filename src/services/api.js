import { axiosInstance as axios } from "./axiosInstance";

const GET_ALL_COURSES = () => "course/all";
const GET_ALL_STUDENTS = () => "student/all";
const CREATE_STUDENT = () => "student/create";

const getAllCourses = () => {
  return axios.get(GET_ALL_COURSES());
};

const getAllStudents = () => {
  return axios.get(GET_ALL_STUDENTS());
};

const createStudent = (studnetBody) => {
  return axios.post(CREATE_STUDENT(), studnetBody);
};

export { getAllCourses, getAllStudents, createStudent };
