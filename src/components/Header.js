import React from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import "../styles/Header.css";

// Các component con
const Logo = () => (
  <Link to="/" className="navbar-brand">
    {" "}
    {/* Thay <a> bằng <Link> */}
    <img src="/assets/logo.png" alt="Logo" />
  </Link>
);

// Thêm component cho Video và Tiện ích
const VideoLink = () => (
  <a href="/video" className="nav-link">
    <i className="fas fa-video me-1"></i> Video
  </a>
);

const UtilityLink = () => (
  <a href="/utility" className="nav-link">
    <i className="fas fa-tools me-1"></i> Tiện ích
  </a>
);

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <form
    className="d-flex align-items-center search-bar"
    style={{ width: "600px" }}
  >
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
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex align-items-center">
          {/* Logo */}
          <Logo />

          {/* Các liên kết mới cho Video và Tiện ích */}
          <div className="navbar-links d-flex ms-4">
            <VideoLink />
            <UtilityLink />
          </div>

          {/* Thanh tìm kiếm */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
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
