import React, { useState } from 'react';
import { ISearchBar } from '../../types';
import styles from '../../styles/components/Search/SearchBar.module.css';
import yandexLogo from '../../assets/img/Yandex_logo_Cyrillic.svg';
import keyboardIcon from '../../assets/img/keyboard_5643.png';

/**
 * Компонент поисковой строки
 */
const SearchBar: React.FC = () => {
  const searchConfig: ISearchBar = {
    logo: {
      icon: yandexLogo,
      link: 'https://yandex.ru',
    },
    input: {
      placeholder: 'Найдётся всё',
      value: '',
    },
    keyboard: {
      icon: keyboardIcon,
      isVisible: true,
    },
    button: {
      text: 'Найти',
      type: 'submit',
    },
  };

  const [inputValue, setInputValue] = useState(searchConfig.input.value);

  return (
    <div className={styles.searchBar}>
      <form className={styles.form}>
        <label className={styles.logo}>
          <img src={searchConfig.logo.icon} alt="Яндекс" />
        </label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.input}
            placeholder={searchConfig.input.placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {searchConfig.keyboard.isVisible && (
            <button type="button" className={styles.keyboard}>
              <img src={searchConfig.keyboard.icon} alt="Клавиатура" />
            </button>
          )}
        </div>
        <button type={searchConfig.button.type} className={styles.button}>
          {searchConfig.button.text}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
