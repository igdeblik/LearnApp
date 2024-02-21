import { getWeather } from "../services/getWeather";

export const addCityWeather = async (city) => {
  const data = await getWeather(city);
  const name = await data.name;
  const temperature = await data.main.temp;
  const result = name + " " + temperature + "°C ";
  return result;
};
