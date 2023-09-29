type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

import Button from "@material-ui/core/Button";
import classes from "./Search.module.css";

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };
  return (
    <div className={classes.search}>
      <h2>Buscar por usuario</h2>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Ingrese nombre de usuario o repositorio"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button
          onClick={() => loadUser(userName)}
          size="small"
          variant="contained"
          color="primary"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default Search;
