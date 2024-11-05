import React from "react";
import "../styles/Footer.css";

// =====================
// Các Component Footer
// =====================

// Component Logo và Mô tả Ngắn
const FooterLogoDescription = () => (
  <div className="col-md-3">
    <h5 className="fw-bold">DDA News</h5>
    <p>
      Trang báo điện tử cung cấp tin tức mới nhất về thế giới, kinh tế, chính
      trị, và giải trí.
    </p>
  </div>
);

// Component Danh Mục
const FooterCategories = () => (
  <div className="col-md-3">
    <h5 className="fw-bold">Danh mục</h5>
    <ul className="list-unstyled">
      <li>
        <a href="#" className="text-white">
          Chính trị
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          Kinh tế
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          Thể thao
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          Giải trí
        </a>
      </li>
      <li>
        <a href="#" className="text-white">
          Sức khỏe
        </a>
      </li>
    </ul>
  </div>
);

// Component Liên Kết Mạng Xã Hội
const FooterSocialLinks = () => (
  <div className="col-md-3">
    <h5 className="fw-bold">Theo dõi chúng tôi</h5>
    <ul className="list-unstyled d-flex">
      <li className="me-3">
        <a href="#" className="text-white">
          <i className="fab fa-facebook"></i>
        </a>
      </li>
      <li className="me-3">
        <a href="#" className="text-white">
          <i className="fab fa-twitter"></i>
        </a>
      </li>
      <li className="me-3">
        <a href="#" className="text-white">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  </div>
);

// Component Thông Tin Liên Hệ
const FooterContactInfo = () => (
  <div className="col-md-3">
    <h5 className="fw-bold">Liên hệ</h5>
    <ul className="list-unstyled">
      <li>Địa chỉ: 123 Đường ABC, TP. Hồ Chí Minh</li>
      <li>Email: lienhe@ddanews.com</li>
      <li>Điện thoại: +84 123 456 789</li>
    </ul>
  </div>
);

// Component Chính Sách và Điều Khoản
const FooterBottom = () => (
  <div className="row mt-4">
    <div className="col-12 text-center">
      <p className="mb-0">
        © 2024 DDA News. All rights reserved.{" "}
        <a href="#" className="text-white">
          Chính sách bảo mật
        </a>{" "}
        |{" "}
        <a href="#" className="text-white">
          Điều khoản sử dụng
        </a>
      </p>
    </div>
  </div>
);

// Component Footer Chính
const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* Logo và Mô tả Ngắn */}
          <FooterLogoDescription />
          {/* Danh Mục */}
          <FooterCategories />
          {/* Liên Kết Mạng Xã Hội */}
          <FooterSocialLinks />
          {/* Thông Tin Liên Hệ */}
          <FooterContactInfo />
        </div>

        {/* Chính Sách và Điều Khoản */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
