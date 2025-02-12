import { useState } from "react";
import toast from "react-hot-toast";

import s from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.error("Ops... Please write something.")
      return;
    }

    onSubmit(query);
    setQuery('');
  };
    return (
    <header className={s.SearchBarHeader}>
        <form onSubmit={handleSubmit} className={s.SearchBarForm}>
            <input className={s.SearchBarInput}
      type="text"
      placeholder="Search images and photos"
      value={query}
      onChange={e => setQuery(e.target.value.toLowerCase())}
    />
            <button type="submit" className={s.SearchBarBtn}>Search</button>
        </form>
    </header>);
}

export default SearchBar;