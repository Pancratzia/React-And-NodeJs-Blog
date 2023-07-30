import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8800/api";
axios.defaults.withCredentials = true;

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fecthData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fecthData();
  }, [cat]);

  // const posts = [
  //     {
  //       id: 1,
  //       title: "Post One Has a Really Really Really Really Big Title",
  //       description:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facere exercitationem rerum expedita cum voluptate sed, sapiente quidem quae? Facilis tempora, sit tempore quasi non molestiae velit magni fugit ex, est eligendi, ea dolorum minima totam unde harum dolor recusandae.",
  //       img: "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //     {
  //       id: 2,
  //       title:
  //         "Post Two Has a Much Bigger Title Than The First Post in This List",
  //       description:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facere exercitationem rerum expedita cum voluptate sed, sapiente quidem quae? Facilis tempora, sit tempore quasi non molestiae velit magni fugit ex, est eligendi, ea dolorum minima totam unde harum dolor recusandae.",
  //       img: "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //     {
  //       id: 3,
  //       title: "Post Three Has a Tiny Title",
  //       description:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facere exercitationem rerum expedita cum voluptate sed, sapiente quidem quae? Facilis tempora, sit tempore quasi non molestiae velit magni fugit ex, est eligendi, ea dolorum minima totam unde harum dolor recusandae.",
  //       img: "https://images.pexels.com/photos/594233/pexels-photo-594233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     },
  //   ];

  return (
    <div className="menu">
      <h2>Other posts you may like</h2>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          {post?.img && <img src={"/upload/" + post.img} alt={post.title} />}
          <h3>{post.title}</h3>
          <Link to={`/post/${post.id}`}>
                <button>Read More</button>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Menu;
