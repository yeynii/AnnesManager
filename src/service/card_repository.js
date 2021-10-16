import { getDatabase, ref, set, remove, onValue, off } from "firebase/database";
import { firebaseApp } from "./firebase";

class CardRepository{
  db = getDatabase(firebaseApp);

  saveCard(userId, card) {
    const dbRef = ref(this.db, `${userId}/cards/${card.id}`);
    set(dbRef, card);
  }

  removeCard(userId, card){
    const dbRef = ref(this.db, `${userId}/cards/${card.id}`);
    remove(dbRef, card);
  }

  syncCards(userId, onUpdate){
    const dbRef = ref(this.db, `${userId}/cards`);
    onValue(dbRef, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(dbRef);
  }
}

export default CardRepository;