import React from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import search from "./search.png";
import close from "./close.png";
import { SearchContext } from "../../App";

const Search = () => {
  const [value, setValue] = React.useState("");
  const { setSearchValue } = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    //чтоб при очищении инпута курсор был в нем
    setSearchValue(""); //очищение инпута
    setValue("");
    inputRef.current.focus();
  };
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  const updateSearchValue = React.useCallback(
    debounce((string) => {
      setSearchValue(string);
    }, 500),
    []
  );

  return (
    <div className={styles.root}>
      <img className={styles.icon} src={search} alt="#" />
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="поиск пиццы...."
      />
      {value && (
        <img
          onClick={onClickClear}
          className={styles.icon_close}
          src={close}
          alt="#"
        />
      )}
    </div>
  );
};

export default Search;
