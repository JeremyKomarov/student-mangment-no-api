import NewStudent from "./components/newStudent/NewStudent";
import RegisteredStudent from "./components/studentsRegistration/RegisteredStudent";

const DUMMY_AVAILABLE_COURSES = {
  fullstack: {
    id: "1",
    name: "fullstack",
    displayName: "Full Stack Course",
    startDate: new Date(2026, 7, 1),
  },
  qa: {
    id: "2",
    name: "qa",
    displayName: "QA Course",
    startDate: new Date(2026, 2, 30),
  },
  cyber: {
    id: "3",
    name: "cyber",
    displayName: "Cyber  Course",
    startDate: new Date(2026, 4, 5),
  },
  product: {
    id: "4",
    name: "product",
    displayName: "Product Course",
    startDate: new Date(2026, 6, 30),
  },
};

const DUMMY_REGISTERED_STUDENTS = [
  {
    id: "1",
    studentName: "Jeremy Komarov",
    course: "fullstack",
  },
  {
    id: "2",
    studentName: "David Katz",
    course: "qa",
  },
];

function App() {
  return (
    <div>
      <NewStudent courses={DUMMY_AVAILABLE_COURSES} />
      <RegisteredStudent
        registeredStudent={DUMMY_REGISTERED_STUDENTS[0]}
        course={DUMMY_AVAILABLE_COURSES.fullstack}
      />
      <RegisteredStudent
        registeredStudent={DUMMY_REGISTERED_STUDENTS[1]}
        course={DUMMY_AVAILABLE_COURSES.qa}
      />
    </div>
  );
}

export default App;
