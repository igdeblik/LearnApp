import { getWeather } from "../../services/getWeather";
import { addCityWeather } from "../../utils/addCityList";

export const Form = ({ upgradeData, deleteData }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = {};
    for (const [key, value] of form.entries()) {
      body[key] = value;
      e.target[0].value = "";
      const city = await addCityWeather(value);
      upgradeData(city);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" autoComplete="off" />
      </form>
      <button onClick={deleteData}>Delete List</button>
    </>
  );
};
