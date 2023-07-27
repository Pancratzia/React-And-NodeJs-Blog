import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/menu";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

axios.defaults.baseURL = "http://localhost:8800/api";
axios.defaults.withCredentials = true;

function Single() {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt={post?.title} />
        <div className="user">
          {post.userImage && <img
            src={post?.userImage}
            alt={post?.username}
          />}
          
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post?.date).fromNow()}</p>
          </div>

          {currentUser?.username === post?.username && (
            <div className="edit">
              <Link to={`/write?id=${postId}`} state={{ post }}>
                <img src={Edit} alt="edit" />
              </Link>

              <img onClick={handleDelete} src={Delete} alt="delete" />
            </div>
          )}
        </div>
        <h2>{post?.title}</h2>
        {post?.description}
      </div>
      <div className="menu">
        <Menu cat={post?.cat} />
      </div>
    </div>
  );
}

export default Single;
