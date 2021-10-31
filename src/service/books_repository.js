import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class BooksRepository{
  db = getDatabase(firebaseApp);

  saveBook(book) {
    const dbRef = ref(this.db, `books/${book.id}`);
    set(dbRef, book);
  }

  removeBook(book){
    const dbRef = ref(this.db, `books/${book.id}`);
    remove(dbRef, book);
  }
  
  syncBooks(onUpdate){
    const dbRef = ref(this.db, `books`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default BooksRepository;