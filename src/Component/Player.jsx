import { useState } from "react";
export default function Player({ symbol, initialName }) {
  const [playerName, setPlayerName] =useState(initialName)
  const [isEditing, setIsEditing] = useState(false);

  function handleEditBtn() {
    //This aproach is not good cause its performed instatly
    //setIsEditing(!isEditing)
    //setIsEditing(isEditing ? false : true);
    // when you doing trought function its instantly
    setIsEditing((edited) => !edited);
    console.log(isEditing);
  }
  function handleInputElement(event) {
    event.preventDefault();
    setPlayerName(event.target.value)
  }

  return (
    <li className="player">
      {!isEditing ? (
        <span className="player-name">{playerName}</span>
      ) : (
        <input
          type="text"
          required
          value={playerName}
          onChange={handleInputElement}
        ></input>
      )}

      <span className="player-symbol">{symbol}</span>
      <button onClick={handleEditBtn}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
