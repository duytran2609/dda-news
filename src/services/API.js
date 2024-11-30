import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://newsdata.io/api/1/latest?country=vi&apikey=pub_474824b746e202c2a0b43d792d0ffd0831b79"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchWeather = async (cityName) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4e31589ea29246d7a92111104242611&q=${cityName}&aqi=no`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Không tìm thấy dữ liệu cho thành phố này!");
  }
};

export const fetchCurrencyRates = async () => {
  try {
    const response = await fetch(
      "https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=8"
    );
    const text = await response.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, "application/xml");
    return Array.from(xml.querySelectorAll("Exrate")).map((rate) => ({
      currency: rate.getAttribute("CurrencyCode"),
      buy: rate.getAttribute("Buy"),
      sell: rate.getAttribute("Sell"),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
export { fetchData };
