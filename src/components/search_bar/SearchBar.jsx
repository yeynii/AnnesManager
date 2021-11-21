import React from 'react';
import styles from './searchBar.module.css';

const SearchBar = ({search, getSearchedStudents}) => {
  const onChange = e =>{
    search.students(e.target.value).then(result => getSearchedStudents(e.target.value, result));
  }
  return(
    <input className={styles.search} placeholder="이름 검색" onChange={onChange}>
    </input>
  );  
}

export default SearchBar;