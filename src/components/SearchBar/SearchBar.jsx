import React from 'react';
import styles from './searchBar.module.css';

const SearchBar = ({getSearchedStudents}) => {
  const onChange = e =>{
    getSearchedStudents(e.target.value);
  }
  return(
    <input className={styles.search} placeholder="이름 검색" onChange={onChange}>
    </input>
  );  
}

export default SearchBar;