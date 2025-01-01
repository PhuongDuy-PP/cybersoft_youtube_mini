import React, {useState} from "react";
import "../style/Sidebar.css";
import { useSidebar } from "../contexts/SidebarContext";

const Sidebar = () => {
  const {isSmallSidebar} = useSidebar();
  return (
    <div className={`sidebar ${isSmallSidebar ? "small-sidebar" : ""}`}>
      <div className="shortcut-links">
        <a href="#"><img src="/src/assets/home.png" alt /><p>Home</p></a>
        <a href="#"><img src="/src/assets/explore.png" alt /><p>Explore</p></a>
        <a href="#"><img src="/src/assets/subscriprion.png" alt /><p>Subscriprion</p></a>
        <a href="#"><img src="/src/assets/library.png" alt /><p>Library</p></a>
        <a href="#"><img src="/src/assets/history.png" alt /><p>History</p></a>
        <a href="#"><img src="/src/assets/cast.png" alt /><p>Cast Videos</p></a>
        <a href="#"><img src="/src/assets/playlist.png" alt /><p>Playlist</p></a>
        <a href="#"><img src="/src/assets/messages.png" alt /><p>Messages</p></a>
        <a href="#"><img src="/src/assets/show-more.png" alt /><p>Show More</p></a>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <a href="#"><img src="/src/assets/Jack.png" alt /><p>Jack Nicholson</p></a>
        <a href="#"><img src="/src/assets/simon.png" alt /><p>Simon Baker</p></a>
        <a href="#"><img src="/src/assets/tom.png" alt /><p>Tom Hardy</p></a>
        <a href="#"><img src="/src/assets/megan.png" alt /><p>Megan Ryan</p></a>
        <a href="#"><img src="/src/assets/cameron.png" alt /><p>Cameron Diaz</p></a>
      </div>
    </div>

  );
};

export default Sidebar;
