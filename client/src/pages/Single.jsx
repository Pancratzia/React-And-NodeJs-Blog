import * as React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="user"
          />
          <div className="info">
            <span>Emily Doe</span>
            <p>Posted 2 Days Ago</p>
          </div>

          <div className="edit">

            <Link to="/write?id=1">
              <img src={Edit} alt="edit" />
            </Link>

            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h2>Post One Has a Really Really Really Really Big Title</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facere exercitationem rerum expedita cum voluptate sed, sapiente quidem quae? Facilis tempora, sit tempore quasi non molestiae velit magni fugit ex, est eligendi, ea dolorum minima totam unde harum dolor recusandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates maiores aut beatae animi, illum sit, soluta quidem quibusdam ullam ex adipisci. Inventore iure blanditiis velit temporibus quis voluptatum maiores corrupti, aperiam distinctio deserunt officia, impedit excepturi tenetur soluta dolorem veniam facere earum a obcaecati officiis assumenda iste porro ad! Quas dignissimos at laborum soluta voluptatem sed necessitatibus optio reiciendis. Asperiores maxime sed veniam rem aperiam dolores laudantium soluta, atque iure non ab amet ea id perspiciatis voluptas corporis! Quia nisi repellendus beatae autem explicabo a? Odio amet quasi placeat, recusandae ipsum magnam illo est magni nesciunt autem, aliquam odit hic!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel quia repellendus suscipit nobis laboriosam, natus ipsa necessitatibus, ullam voluptatum accusamus voluptates odio dolor numquam placeat veritatis mollitia. Quibusdam, eos libero, magni aliquam mollitia nihil dolorem doloremque quaerat nesciunt fuga at, aliquid modi laborum. Praesentium libero distinctio, impedit magni accusamus consequatur.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, doloremque veniam harum facere corrupti, quae esse molestias doloribus eveniet magnam quo aperiam, laborum labore voluptatibus?</p>
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}

export default Single;
