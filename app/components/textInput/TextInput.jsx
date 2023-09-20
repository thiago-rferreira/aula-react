import React from 'react';
import styles from './TextInput.module.css';

const TextInput = ({ label, type, value, onChange }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;
