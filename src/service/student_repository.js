import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class StudentRepository{
  db = getDatabase(firebaseApp);

  saveStudent(student) {
    const dbRef = ref(this.db, `students/${student.id}`);
    set(dbRef, student);
  }

  removeStudent(student){
    const dbRef = ref(this.db, `students/${student.id}`);
    remove(dbRef, student);
  }

  removeCourse(student, course){
    const dbRef = ref(this.db, `students/${student.id}/courses/${course.id}`);
    remove(dbRef, student);
  }
  removeBook(student, book){
    const dbRef = ref(this.db, `students/${student.id}/books/${book.id}`);
    remove(dbRef, student);
  }

  syncStudents(onUpdate){
    const dbRef = ref(this.db, `students`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default StudentRepository;