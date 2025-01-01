import React from "react";
import "../style/PlayVideo.css";

const PlayVideo = () => {
  return (
    <div>

      <div className="container play-container">
        <div className="row">
          <div className="play-video">
            <video controls autoPlay muted>
              <source src="/src/assets/video.mp4" type="video/mp4" />
            </video>
            <div className="tags">
              <a href="#">#Coding</a> <a href="#">#HTML</a> <a href="#">#CSS</a> <a href="#">#JavaScript</a>
            </div>
            <h3>Best YouTube Channel To Learn Web Development</h3>
            <div className="play-video-info">
              <p>1525 Views  • 2 days ago</p>
              <div>
                <a href="#"><img src="/src/assets/like.png" alt />125</a>
                <a href="#"><img src="/src/assets/dislike.png" alt />2</a>
                <a href="#"><img src="/src/assets/share.png" alt />Share</a>
                <a href="#"><img src="/src/assets/save.png" alt />Save</a>
              </div>
            </div>
            <hr />
            <div className="publisher">
              <img src="/src/assets/jack.png" alt />
              <div>
                <p>Easy Tutorials</p>
                <span>500k Subscribers</span>
              </div>
              <button type="button">Subscribe</button>
            </div>
            <div className="vid-description">
              <p>Channel that makes learning Easy</p>
              <p>Subscribe Easy Tutorials to watch more tutorials on web development</p>
              <hr />
              <h4>134 Comments</h4>
              <div className="add-comment">
                <img src="/src/assets/jack.png" alt />
                <input type="text" placeholder="Write comments.." />
              </div>
              <div className="old-comment">
                <img src="/src/assets/jack.png" alt />
                <div>
                  <h3>Jack Nicholson <span>2 days ago</span></h3>
                  <p>A global computer network providing a variety of information and communication facilities, consisting
                    of interconnected networks using standardized communication protocols.</p>
                  <div className="comment-action">
                    <img src="/src/assets/like.png" alt />
                    <span>244</span>
                    <img src="/src/assets/dislike.png" alt />
                    <span>2</span>
                    <span>REPLY</span>
                    <a href="$">All replies</a>
                  </div>
                </div>
              </div>
              <div className="old-comment">
                <img src="/src/assets/jack.png" alt />
                <div>
                  <h3>Jack Nicholson <span>2 days ago</span></h3>
                  <p>A global computer network providing a variety of information and communication facilities, consisting
                    of interconnected networks using standardized communication protocols.</p>
                  <div className="comment-action">
                    <img src="/src/assets/like.png" alt />
                    <span>244</span>
                    <img src="/src/assets/dislike.png" alt />
                    <span>2</span>
                    <span>REPLY</span>
                    <a href="$">All replies</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-sidebar">
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail1.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail2.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail3.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail4.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail5.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail6.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail7.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
            <div className="side-video-list">
              <a href="#" className="small-thumbnail"><img src="/src/assets/thumbnail8.png" alt /></a>
              <div className="vid-info">
                <a href>Best channel that help you to be a web developer</a>
                <p>Easy Tutorials</p>
                <p>15k Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
