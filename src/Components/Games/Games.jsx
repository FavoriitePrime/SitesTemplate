import React from "react";
import Post from "./Post/Post";
import NightLightImg from "../../Images/Games/NightLight.jpg";
import "./Games.css";
import { useRef, useState } from "react";


export default function Games() {
  //Data
  const posts = [
    <Post
      content="Fortnite"
      header="Header"
      tags="arcade"
      image={NightLightImg}
    ></Post>,

    <Post 
    content="CSGO" 
    header="Header" 
    tags="fps" 
    image={NightLightImg}
    ></Post>,
  ];


  const [filter, setfilter] = useState(posts);

  let tagsStates = [
    {
      tag: "arcade",
      state: false,
    },
    {
      tag: "fps",
      state: false,
    },
  ];

  const UpdateByTags = (event) => {
    let tags = "";
    tagsStates.forEach((element) => {
      console.log(event.target.id);
      if (element.tag == event.target.id) 
      {
        element.state = !element.state
      };
    });
    tagsStates.forEach((element) => {
      if (element.state) 
      {
        tags += element.tag;
      }
    });
      setfilter(
        posts.filter((post) => {
          return post.props.tags.includes(tags);
        })
      )
    }

return (
  <div id="Games" className="games-box">
    <div className="games-stickyList-box">
      <div className="games-stickyList">
        <div className="games-stickyList-title">Games made with Unity</div>
        <div className="games-stickyList-checkBox-list">
          {/* <div>
          <input type="radio" name="Tags" id = "arcade" onChange={UpdateByTags} />
            Arcade
          </div>
          <div>
            <input type="radio" name="Tags" id = "fps" onChange={UpdateByTags} />
            FPS
          </div> */}
        </div>
      </div>
      <div className="games-contentBox">{filter}</div>
    </div>
  </div>
);
}
