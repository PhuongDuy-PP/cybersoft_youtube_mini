import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/Navbar.css";
import { useSidebar } from "../contexts/SidebarContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { toggleSidebar } = useSidebar();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Trạng thái đăng nhập
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSignOut = () => {
    setIsLoggedIn(false); // Đặt lại trạng thái đăng nhập
    // setIsPopupVisible(false); // Đóng menu
    // navigate('/signin'); // Điều hướng về trang đăng nhập
  };

  // Hide popup when clicking outside
  const handleClickOutside = (event) => {
    const popupMenu = document.querySelector('.popup-menu');
    const userIcon = document.querySelector('.user-icon');
    if (
      popupMenu &&
      !popupMenu.contains(event.target) &&
      userIcon &&
      !userIcon.contains(event.target)
    ) {
      setIsPopupVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img src="/src/assets/menu.png" alt="Menu" className="menu-icon" onClick={toggleSidebar} />
        <img
          src="/src/assets/logo.png"
          alt="Logo"
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
          className="logo" />
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src="/src/assets/search.png" alt="Search" />
        </div>
        <img src="/src/assets/voice-search.png" alt="Mic" className="mic-icon" />
      </div>
      <div className="nav-right flex-div">
        <img src="/src/assets/upload.png" alt="Upload" />
        <img src="/src/assets/more.png" alt="More" />
        <img src="/src/assets/notification.png" alt="Notifications" />
        {isLoggedIn ? (
          <>
            <img
              src="/src/assets/jack.png"
              alt="User"
              className="user-icon"
              onClick={togglePopup}
              style={{ cursor: 'pointer' }}
            />
            {isPopupVisible && (
              <div className="popup-menu">
                <div className="popup-item">
                  <i className="fas fa-user-circle"></i>Tài khoản Google
                </div>
                <div className="popup-item">
                  <i className="fas fa-exchange-alt"></i>Chuyển đổi tài khoản
                </div>
                <div className="popup-item">
                  <i className="fas fa-cogs"></i>YouTube Studio
                </div>
                <div className="popup-item">
                  <i className="fas fa-gem"></i>Lợi ích của gói Premium
                </div>
                <div className="popup-item">
                  <i className="fas fa-chart-line"></i>Giao dịch mua và gói thành viên
                </div>
                <div className="popup-item">
                  <i className="fas fa-shield-alt"></i>Dữ liệu của bạn trong YouTube
                </div>
                <div className="popup-item">
                  <i className="fas fa-cog"></i>Cài đặt
                </div>
                <div className="popup-item">
                  <i className="fas fa-question-circle"></i>Trợ giúp
                </div>
                <div className="popup-item">
                  <i className="fas fa-comment-dots"></i>Gửi ý kiến phản hồi
                </div>
                <div className="popup-item">
                  <i className="fas fa-sign-out-alt"></i>
                  <span onClick={handleSignOut}>Đăng xuất</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <button
            className="sign-in-button"
            onClick={() => navigate('/login')}
          >
            Sign In
          </button>
        )
        }
      </div>
    </nav>
  );
};

export default Navbar;
