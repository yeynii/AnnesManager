import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class DocsRepository{
  db = getDatabase(firebaseApp);

  saveDoc(doc) {
    const dbRef = ref(this.db, `docs/${doc.id}`);
    set(dbRef, doc);
  }

  removeDoc(doc){
    const dbRef = ref(this.db, `docs/${doc.id}`);
    remove(dbRef, doc);
  }
  
  syncDocs(onUpdate){
    const dbRef = ref(this.db, `docs`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default DocsRepository;