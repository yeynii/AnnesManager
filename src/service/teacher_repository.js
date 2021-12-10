import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class TeacherRepository{
  db = getDatabase(firebaseApp);

  saveTeacher(teacher) {
    const dbRef = ref(this.db, `teachers/${teacher.id}`);
    set(dbRef, teacher);
  }

  removeTeacher(teacher){
    const dbRef = ref(this.db, `teachers/${teacher.id}`);
    remove(dbRef, teacher);
  }
  getTeacherName(id, onUpdate){
    const dbRef = ref(this.db, `teachers/${id}`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
  syncTeachers(onUpdate){
    const dbRef = ref(this.db, `teachers`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default TeacherRepository;