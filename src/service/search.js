import { getDatabase, ref, query, equalTo, onValue } from "firebase/database";
import { firebaseApp } from "./firebase";

class Search{
  db = getDatabase(firebaseApp);

  async students(name) {
    const dbRef = ref(this.db, 'students')
    const searched = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const value = childSnapshot.val();
        if (value.name.includes(name))
          searched.push(value);
      });
    });
    return searched;
  }

  async books(title) {
    const dbRef = ref(this.db, 'books')
    const searched = [];
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const value = childSnapshot.val();
        if (value.title.includes(title))
          searched.push(value);
      });
    });
    return searched;
  }
} 

export default Search;