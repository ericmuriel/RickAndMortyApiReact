import React, { useEffect, useState } from "react";
import "./Main.css";

import { NavLink, withRouter } from "react-router-dom";
import Character from "./Character";
const Characters = ({ match }) => {
  const page = +match.params.page || 1;
  const [characters, setCharacters] = useState([]);
  const [maxPages, setMaxPages] = useState(null);
  const baseUrl = "https://rickandmortyapi.com/api/character/";

  useEffect(() => {

    const fetchData = async () => {
      const dataCharacters = await fetch(
        page === 1 ? baseUrl : baseUrl + "?page=" + page
      );
      const characters = await dataCharacters.json();
      setCharacters(characters.results);
      setMaxPages(characters?.info?.pages);
    };
    fetchData();
  }, [page]);

  useEffect(()=>{
window.scrollTo(0,0)
  },[match])


  return (
    <div className="background-Page">
      {characters ?
        <>
          <h1 className="character-Title">Characters</h1>
          <ul className="info-container">
            {characters?.map(character => <Character key={character.id} character={character} />)}
          </ul>
        </> : "Page not found"
      }
      <div className="pages-Container">
      {page >= 2 && 2 < maxPages && (
        <NavLink className="previous-Page" to={"/" + (page - 1)} exact>
          Previous Page
        </NavLink>
      )}
      {page < maxPages && (
        <NavLink className="next-Page" to={"/" + (page + 1)} exact>
          Next Page
        </NavLink>
        )}
        </div>
    </div>
  );
};

export default withRouter(Characters);
