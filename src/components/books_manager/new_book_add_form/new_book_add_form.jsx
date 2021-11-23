import React from "react";
import styles from "./new_book_add_form.module.css";
import { useRef } from "react";

const NewBookAddForm = ({ createOrUpdateBook }) => {
  const titleRef = useRef();
  const priceRef = useRef();

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick(e);
    }
  }
  const onChange = e => {
    if (e.currentTarget == null) {
      return;
    }
    e.preventDefault();
  };
  const onClick = e => {
    e.preventDefault();
    if (titleRef.current.value.length === 0) {
      alert("책 제목을 입력하지 않았습니다");
      return;
    }
    createOrUpdateBook({
      id: Date.now(),
      title: titleRef.current.value,
      price: priceRef.current.value,
    });
    titleRef.current.value = "";
    priceRef.current.value = "";
  };
  return (
    <div className={styles.addForm}>
      <div className={styles.inputs}>
      <input
        id="title"
        ref={titleRef}
        className={styles.title}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="제목"
      />
      <input
        id="price"
        ref={priceRef}
        className={styles.price}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="가격"
      /></div>
      <button className={styles.button} onClick={onClick}>
        등록
      </button>
    </div>
  );
};

export default NewBookAddForm;
