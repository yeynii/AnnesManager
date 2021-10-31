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

  removeInformation(student, info, infoStr){
    const dbRef = ref(this.db, `students/${student.id}/${infoStr}s/${info.id}`);
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