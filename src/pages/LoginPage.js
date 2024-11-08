import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

// =====================
// Component Logo
// =====================
const Logo = ({ onClick }) => (
  <img
    src="/assets/logo.png"
    alt="DDA News"
    className="login-logo"
    onClick={onClick} // Thêm sự kiện onClick
    style={{ cursor: "pointer" }} // Thay đổi con trỏ khi di chuột lên logo
  />
);

// =====================
// Component Đăng Nhập
// =====================
const LoginInput = ({ label, type, value, onChange }) => (
  <div className="form-group">
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      id={label}
      className="form-control"
      value={value}
      onChange={onChange}
    />
  </div>
);

// =====================
// Component Nút Đăng Nhập
// =====================
const LoginButton = ({ onClick }) => (
  <button className="btn btn-primary" onClick={onClick}>
    Đăng Nhập
  </button>
);

// =====================
// Component Đăng Ký
// =====================
const SignupLink = () => (
  <div className="signup-link">
    Chưa có tài khoản?
    <span></span>
    <a href="#">Đăng ký ngay</a>
  </div>
);

// =====================
// Component Đăng Nhập Bằng Google
// =====================
const GoogleLoginButton = ({ onClick }) => (
  <button className="btn btn-google" onClick={onClick}>
    <i className="fab fa-google" /> Đăng nhập bằng Google
  </button>
);

// =====================
// Component Chính
// =====================
const LoginForm = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Xử lý logic đăng nhập ở đây
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    // Xử lý logic đăng nhập bằng Google ở đây
    console.log("Đăng nhập bằng Google");
  };

  const handleLogoClick = () => {
    navigate("/"); // Chuyển hướng về trang HomePage
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <Logo onClick={handleLogoClick} /> {/* Gọi component Logo */}
        <h2 className="login-title">Đăng Nhập</h2>
      </div>
      <LoginInput
        label="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      {/* Gọi component LoginInput cho Email */}
      <LoginInput
        label="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{" "}
      {/* Gọi component LoginInput cho Mật Khẩu */}
      <LoginButton onClick={handleLogin} /> {/* Gọi component LoginButton */}
      <GoogleLoginButton onClick={handleGoogleLogin} />{" "}
      {/* Gọi component GoogleLoginButton */}
      <SignupLink /> {/* Gọi component SignupLink */}
    </div>
  );
};

export default LoginForm;
