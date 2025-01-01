import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import './index.css'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import VideoList from './components/VideoList'
import PlayVideo from './components/PlayVideo'
import {SidebarProvider} from './contexts/SidebarContext'
import Login from "./components/Login";

// Component App
function App() {
  return (
    <Router>
      <SidebarProvider>
        <AppContent />
      </SidebarProvider>
    </Router>
  );
}

// Component chứa logic của trang
const AppContent = () => {
  const location = useLocation();

  // Kiểm tra xem URL có phải là '/play-video' không
  const isPlayVideoPage = location.pathname.startsWith('/play-video');

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {/* Nếu không phải là trang play-video thì hiển thị sidebar */}
        {!isPlayVideoPage && <Sidebar />}
        <div className="main-content" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<VideoList />} /> {/* Trang danh sách video */}
            <Route path="/play-video/:id" element={<PlayVideo />} /> {/* Trang phát video */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;