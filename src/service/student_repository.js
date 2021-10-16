import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class StudentRepository{
  db = getDatabase(firebaseApp);

  saveStudent(userId, student) {
    const dbRef = ref(this.db, `${userId}/students/${student.id}`);
    set(dbRef, student);
  }

  removeStudent(userId, student){
    const dbRef = ref(this.db, `${userId}/students/${student.id}`);
    remove(dbRef, student);
  }

  syncStudents(userId, onUpdate){
    const dbRef = ref(this.db, `${userId}/students`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default StudentRepository;