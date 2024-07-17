import { useId } from 'react';
import css from './searchBox.module.css';

export default function SearchBox({ filter, onFilter }) {
    const searchId = useId();
    return (
        <div className={css.searchBox}>
            <label htmlFor={searchId}>Find contacts by name</label>
            <input
                type="text"
                name="search"
                id={searchId}
                value={filter}
                onChange={(event) => onFilter(event.target.value)}
            />
        </div>
    );
};