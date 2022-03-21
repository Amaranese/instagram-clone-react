import React from "react";
import { useSelector } from "react-redux";
import HomeBox from "../../components/HomeBox/HomeBox";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import Post from "../../components/Post/Post";
import Suggestions from "../../components/Suggestions/Suggestions";
import "./Home.scss";

const Home = () => {
  let posts = useSelector((state) => state.posts);
  return (
    <HomeBox>
      <div className="feed">
        <div className="posts">
          {posts.map((post) => (
            <Post
              userImage={post.userimage}
              username={post.username}
              displayName={post.displayName}
              postImage={post.image}
              postDescription={post.description}
            />
          ))}
          <BottomNavigation />
        </div>
        <div className="widgets">
          <Suggestions />
        </div>
      </div>
    </HomeBox>
  );
};

export default Home;
