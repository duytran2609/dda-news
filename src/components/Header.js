import React, { useState } from "react";
import "../styles/Header.css";

// Các component con
const Logo = () => (
  <a className="navbar-brand" href="#">
    <img src="/assets/logo.png" alt="Logo" />
  </a>
);

const SearchBar = () => (
  <form className="d-flex ms-auto w-50">
    <input
      className="form-control me-2 w-75"
      type="search"
      placeholder="Nhập nội dung tìm kiếm"
      aria-label="Search"
    />
    <button className="btn btn-outline-dark" type="submit">
      <i className="fas fa-search"></i>
    </button>
  </form>
);

const UserDropdown = () => (
  <div className="dropdown-menu show custom-dropdown-menu">
    <a href="#" className="dropdown-item">
      <i className="fa-solid fa-user-circle"></i> Xem trang cá nhân
    </a>
    <a href="#" className="dropdown-item logout-item">
      <i className="fa-solid fa-sign-out-alt"></i> Đăng xuất
    </a>
  </div>
);

const UserMenu = ({ showDropdown, toggleDropdown }) => (
  <div className="d-flex align-items-center ms-auto position-relative">
    <a href="#" className="avatar-icon" onClick={toggleDropdown}>
      <i className="fa-solid fa-user"></i>
    </a>
    {showDropdown && <UserDropdown />}
  </div>
);

const CategoryMenu = () => (
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
);

// Component chính Header
const Header = () => {
  // State để điều khiển hiển thị dropdown
  const [showDropdown, setShowDropdown] = useState(false);

  // Hàm xử lý sự kiện nhấn vào avatar
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <Logo />

          {/* Thanh tìm kiếm */}
          <SearchBar />

          {/* Icon người dùng */}
          <UserMenu
            showDropdown={showDropdown}
            toggleDropdown={toggleDropdown}
          />
        </div>
      </nav>

      {/* Thanh menu dưới */}
      <CategoryMenu />
    </header>
  );
};

export default Header;
