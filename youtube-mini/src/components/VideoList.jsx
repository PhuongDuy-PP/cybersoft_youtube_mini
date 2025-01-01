import React from "react";
import "../style/VideoList.css";
import { useSidebar } from "../contexts/SidebarContext";

const VideoList = () => {
  const {isVideoListExpanded} = useSidebar();
  const videos = [
    { id: 1, title: "Learn Coding", thumbnail: "/src/assets/thumbnail1.png" },
    { id: 2, title: "Learn React", thumbnail: "/src/assets/thumbnail2.png" },
    { id: 3, title: "Learn React", thumbnail: "/src/assets/thumbnail3.png" },
    { id: 4, title: "Learn React", thumbnail: "/src/assets/thumbnail4.png" },
    { id: 5, title: "Learn React", thumbnail: "/src/assets/thumbnail5.png" },
    { id: 6, title: "Learn React", thumbnail: "/src/assets/thumbnail6.png" },
    { id: 7, title: "Learn React", thumbnail: "/src/assets/thumbnail7.png" },
    { id: 8, title: "Learn React", thumbnail: "/src/assets/thumbnail8.png" },
    { id: 9, title: "Learn React", thumbnail: "/src/assets/thumbnail5.png" },
    { id: 10, title: "Learn React", thumbnail: "/src/assets/thumbnail6.png" },
    { id: 11, title: "Learn React", thumbnail: "/src/assets/thumbnail7.png" },
    { id: 12, title: "Learn React", thumbnail: "/src/assets/thumbnail8.png" },
  ];

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "music", name: "Âm nhạc" },
    { id: "live", name: "Trực tiếp" },
    { id: "playlist", name: "Danh sách kết hợp" },
    { id: "news", name: "Tin tức" },
    { id: "nature", name: "Thiên nhiên" },
    { id: "animation", name: "Hoạt họa" },
    { id: "recent", name: "Mới tải lên gần đây" },
    { id: "watched", name: "Đã xem" },
    { id: "new", name: "Đề xuất mới" },
  ];

  return (
    <div className={`container ${isVideoListExpanded ? "large-container" : ""}`}>
      <div className="banner">
        <img src="/src/assets/banner.png" alt />
      </div>

      <div className="categories">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-item ${category.id === "all" ? "active" : ""}`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="list-container">
        {videos.map((video) => (
          <div className="vid-list" key={video.id}>
            <a href={`/play-video/${video.id}`}>
              <img src={video.thumbnail} alt="Thumbnail" className="thumbnail" />
            </a>
            <div className="flex-div">
              <img src="/src/assets/jack.png" alt="" />
              <div className="vid-info">
                <a href="/play-video">{video.title}</a>
                <p>Easy Tutorials</p>
                <p>15k Views &bull; 2 days ago</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default VideoList;
