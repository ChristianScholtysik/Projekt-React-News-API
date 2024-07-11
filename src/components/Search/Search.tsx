import { useState } from "react";
import "./Search.css";
import Fetch from "../Fetch/Fetch";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [selectLanguage, setSelectLanguage] = useState<string>("");

  const getSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getSelectLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectLanguage(event.target.value);
  };

  const [clickSearch, setClickSearch] = useState<boolean>(false);

  const handleSearch = () => {
    setClickSearch(true);
    console.log("Search:", search);
    console.log("Selected Language:", selectLanguage);
  };

  return (
    <div className="search-form-wrapper">
      <input
        type="text"
        placeholder="Type to search"
        required
        value={search}
        onChange={getSearchInput}
        className="input"
      />
      <select
        name="select"
        value={selectLanguage}
        className="input"
        onChange={getSelectLanguage}>
        <option value="" disabled>
          Select your language
        </option>
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="es">Espanol</option>
        <option value="fr">Francais</option>
      </select>
      <button className="input btn" onClick={handleSearch}>
        Search
      </button>
      {clickSearch && <Fetch search={search} language={selectLanguage} />}
    </div>
  );
};

export default Search;
