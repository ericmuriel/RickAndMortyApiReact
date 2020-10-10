import React from "react";
import "./Character.css";

const Character = ({ character }) => {
  return (
    <li className="Character">
      <img alt={character.title} className="character-photo" src={character.image} />
      <div className="character-texts">
        <h1 className="characterName">{character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h2>Specie: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Location: {character.location.name}</h2>
        <h2>Created: {character.created}</h2>
      </div>
    </li>
  );
};
export default Character;
