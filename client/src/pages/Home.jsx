import * as React from "react";
import { Link } from "react-router-dom";

function Home() {
  const posts = [
    {
      id: 1,
      title: "Post One Has a Really Really Really Really Big Title",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facere exercitationem rerum expedita cum voluptate sed, sapiente quidem quae? Facilis tempora, sit tempore quasi non molestiae velit magni fugit ex, est eligendi, ea dolorum minima totam unde harum dolor recusandae.",
      img: "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title:
        "Post Two Has a Much Bigger Title Than The First Post in This List",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facere exercitationem rerum expedita cum voluptate sed, sapiente quidem quae? Facilis tempora, sit tempore quasi non molestiae velit magni fugit ex, est eligendi, ea dolorum minima totam unde harum dolor recusandae.",
      img: "https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Post Three Has a Tiny Title",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facere exercitationem rerum expedita cum voluptate sed, sapiente quidem quae? Facilis tempora, sit tempore quasi non molestiae velit magni fugit ex, est eligendi, ea dolorum minima totam unde harum dolor recusandae.",
      img: "https://images.pexels.com/photos/594233/pexels-photo-594233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

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
