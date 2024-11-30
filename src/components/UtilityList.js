import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

// Component WeatherCard
const WeatherCard = ({ weather, city, setCity, fetchWeather }) => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-header bg-success text-white">
          Thời tiết {weather?.location?.name || "TP.HCM"}
        </div>
        <div className="card-body">
          <p>
            <strong>Nhiệt độ:</strong>{" "}
            {weather?.current?.temp_c
              ? `${weather.current.temp_c}°C`
              : "Đang tải..."}
          </p>
          <p>
            <strong>Mô tả:</strong>{" "}
            {weather?.current?.condition?.text || "Đang tải..."}
          </p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên thành phố"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button className="btn btn-primary" onClick={fetchWeather}>
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component TimeCard
const TimeCard = ({ currentTime }) => (
  <div className="col-md-6 mb-4">
    <div className="card">
      <div className="card-header bg-warning text-dark">Lịch</div>
      <div className="card-body">
        <p>{currentTime}</p>
      </div>
    </div>
  </div>
);

// Component CurrencyCard
const CurrencyCard = ({ currency }) => (
  <div className="col-md-6 mb-4">
    <div className="card">
      <div className="card-header bg-info text-white">Tỷ giá ngoại tệ</div>
      <div className="card-body">
        {currency.length > 0 ? (
          <ul className="list-group">
            {currency.map((rate, idx) => (
              <li key={idx} className="list-group-item">
                {rate.currency}: Mua vào {rate.buy} - Bán ra {rate.sell}
              </li>
            ))}
          </ul>
        ) : (
          "Đang tải..."
        )}
      </div>
    </div>
  </div>
);

// Component LotteryCard
const LotteryCard = () => (
  <div className="col-md-6">
    <div className="card">
      <div className="card-header bg-primary text-white">Xổ số</div>
      <div className="card-body">
        <iframe
          src="https://www.minhngoc.net.vn/free/index.php"
          width="100%"
          height="810"
          id="iframe_xosominhngoc"
          name="iframe_xosominhngoc"
          title="Xổ số Minh Ngọc"
        ></iframe>
      </div>
    </div>
  </div>
);

// Component chính
const UtilityList = () => {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState("Ho Chi Minh");
  const [currency, setCurrency] = useState([]);
  const [currentTime, setCurrentTime] = useState("");

  // Fetch dữ liệu thời tiết
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=4e31589ea29246d7a92111104242611&q=${city}&aqi=no`
      );
      setWeather(response.data);
    } catch (error) {
      alert("Không tìm thấy dữ liệu cho thành phố này!");
    }
  };

  // Fetch dữ liệu ngoại tệ
  useEffect(() => {
    const fetchCurrencyRates = async () => {
      try {
        const response = await axios.get(
          "https://portal.vietcombank.com.vn/Usercontrols/TVPortal.TyGia/pXML.aspx?b=8"
        );
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data, "application/xml");
        const rates = Array.from(xml.querySelectorAll("Exrate")).map(
          (rate) => ({
            currency: rate.getAttribute("CurrencyCode"),
            buy: rate.getAttribute("Buy"),
            sell: rate.getAttribute("Sell"),
          })
        );
        setCurrency(rates);
      } catch (error) {
        console.error("Error fetching currency rates:", error);
      }
    };

    fetchCurrencyRates();
  }, []);

  // Cập nhật thời gian thực
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const weekdays = [
        "Chủ Nhật",
        "Thứ Hai",
        "Thứ Ba",
        "Thứ Tư",
        "Thứ Năm",
        "Thứ Sáu",
        "Thứ Bảy",
      ];
      const dayOfWeek = weekdays[now.getDay()];
      const formattedDate = now.toLocaleString("vi-VN", { hour12: false });
      setCurrentTime(`${dayOfWeek}, ${formattedDate}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mt-4">
      <div className="row g-3">
        <WeatherCard
          weather={weather}
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeather}
        />
        <TimeCard currentTime={currentTime} />
        <CurrencyCard currency={currency} />
        <LotteryCard />
      </div>
    </div>
  );
};

export default UtilityList;
