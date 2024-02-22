import { useState } from "react";
import { addCityWeather } from "../../utils/addCityList";
const btnStyle = {
  marginTop: "20px",
};

export const Form = ({ upgradeData, deleteData }) => {
  const [text, setText] = useState("");

  const addList = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
      const city = await addCityWeather(value);
      upgradeData(city);
      setText("");
    }
  };

  const newState = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <form onSubmit={addList}>
        <input
          type="text"
          name="city"
          autoComplete="off"
          onChange={newState}
          value={text}
          placeholder="City"
        />
      </form>
      <button style={btnStyle} onClick={deleteData}>
        Delete List
      </button>
    </>
  );
};
