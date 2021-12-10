import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styles from "./cloud.module.css";
import CloudAddForm from "./CloudAddForm/CloudAddForm";
import DocList from "./DocList/DocList";

const Cloud = ({ authService, docsRepository }) => {
  const history = useHistory();
  const historyState = useHistory().state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [docs, setDocs] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const goHome = () => {
    history.push({ pathname: "/home", state: { id: userId } });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const createOrUpdateDoc = (doc) => {
    setDocs(() => {
      const updated = { ...docs };
      updated[doc.id] = doc;
      return updated;
    });
    docsRepository.saveDoc(doc);
  };
  const removeDoc = (doc) => {
    setDocs(() => {
      const updated = { ...docs };
      delete updated[doc.id];
      return updated;
    });
    docsRepository.removeDoc(doc);
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [history, authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = docsRepository.syncDocs((docs) => setDocs(docs));
    return () => stopSync();
  }, [userId, docsRepository]);

  return (
    <div className={styles.container}>
      <button className={styles.return} onClick={goHome}>
        돌아가기 💨 💨
      </button>
      <div className={styles.cloud}>
        <h2 className={styles.title}>앤즈 문서</h2>
        <div className={styles.docs}>
          {docs &&
            Object.keys(docs).map((key) => (
              <DocList key={key} doc={docs[key]} removeDoc={removeDoc} />
            ))}
        </div>

        <button className={styles.addDoc} onClick={() => setIsModalOpen(true)}>
          +
        </button>
        <CloudAddForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          createOrUpdateDoc={createOrUpdateDoc}
        />
      </div>
    </div>
  );
};

export default Cloud;
