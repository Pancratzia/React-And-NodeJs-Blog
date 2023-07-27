import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8800/api";
axios.defaults.withCredentials = true;

function Home() {

const [posts, setPosts] = useState([]);

const cat = useLocation().search;

useEffect(() => {
  const fecthData = async () => {
    try{
      const res = await axios.get(`/posts${cat}`);
      setPosts(res.data);
    } catch(err){
      console.log(err);
    }
  };
  fecthData();
}, [cat]);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>

            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.description}</p>

              <Link to={`/post/${post.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
