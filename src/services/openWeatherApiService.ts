import axios from "axios";

export default class OpenWeatherApiService {
  private apiKey: string | undefined =
    process.env.REACT_APP_OPEN_WEATHER_API_ID;
  private limit: number = 1;

  public async getDataByCity(city: string) {
    const cityData = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${this.limit}&appid=${this.apiKey}`
    );

    const allData = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}&appid=${this.apiKey}&units=metric`
    );

    return allData.data;
  }
}
