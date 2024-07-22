import { useId } from 'react';
import css from './searchBox.module.css';
import { useSelector, useDispatch} from 'react-redux';
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const searchName = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const value = event.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchName}>Find contacts by name</label>
      <input
        type="text"
        name="searchName"
        id={searchName}
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}