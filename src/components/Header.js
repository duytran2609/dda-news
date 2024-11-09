import React from "react";
import { useNavigate } from "react-router-dom"; // Nhập useNavigate
import "../styles/Header.css";

// Các component con
const Logo = () => (
  <a className="navbar-brand" href="#">
    <img src="/assets/logo.png" alt="Logo" />
  </a>
);

// Component tìm kiếm
const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form className="d-flex align-items-center" style={{ width: "600px" }}>
    <input
      className="form-control me-2"
      type="search"
      placeholder="Nhập bài báo cần tìm"
      aria-label="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)} // Cập nhật giá trị khi người dùng nhập
    />
    <button
      className="btn btn-outline-dark btn-sm px-2"
      type="submit"
      style={{ width: "40px" }}
    >
      <i className="fas fa-search"></i>
    </button>
  </form>
);

// Component chính Header
const Header = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate(); // Khởi tạo useNavigate

  // Hàm xử lý sự kiện nhấn vào avatar để chuyển đến trang đăng nhập
  const handleLoginClick = () => {
    navigate("/login"); // Chuyển hướng đến trang đăng nhập
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <Logo />

          {/* Thanh tìm kiếm */}
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Icon người dùng */}
          <a href="#" className="avatar-icon ms-3" onClick={handleLoginClick}>
            <i className="fa-solid fa-user"></i>
          </a>
        </div>
      </nav>

      {/* Thanh menu dưới */}
      <div className="bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center category-menu sticky-top">
          <a href="#" className="text-white category-menu-link fw-bold">
            Bóng đá
          </a>
          <a href="#" className="text-white category-menu-link fw-bold">
            Công nghệ
          </a>
          <a href="#" className="text-white category-menu-link fw-bold">
            Kinh doanh
          </a>
          <a href="#" className="text-white category-menu-link fw-bold">
            Giải trí
          </a>
          <a href="#" className="text-white category-menu-link fw-bold">
            Sức khỏe
          </a>
          <a href="#" className="text-white category-menu-link fw-bold">
            Thế giới
          </a>
          <a href="#" className="text-white category-menu-link fw-bold">
            Chính trị
          </a>
          <a href="#" className="text-white category-menu-link fw-bold">
            Môi trường
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
