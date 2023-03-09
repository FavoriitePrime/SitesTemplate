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
    <Post content="CSGO" header="Header" image={NightLightImg}></Post>,
    <Post content="Team Fortress" header="Header" image={NightLightImg}></Post>,
    <Post
      content="Minecraft"
      header="Header"
      tag="Arcade"
      image={NightLightImg}
    ></Post>,
    <Post content="Minesweper" header="Header" image={NightLightImg}></Post>,
    <Post content="Atomic Heart" header="Header" image={NightLightImg}></Post>,
    <Post content="Over Cocked" header="Header" image={NightLightImg}></Post>,
    <Post content="Tomb Rider" header="Header" image={NightLightImg}></Post>,
    <Post
      content="Genshin Impact"
      header="Header"
      image={NightLightImg}
    ></Post>,
    <Post content="Call of Duty" header="Header" image={NightLightImg}></Post>,
  ];

  const inputRef = useRef();
  const [filter, setfilter] = useState(posts);
  let postContent;
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
      if (element.tag == event.target.name) element.state = !element.state;
    });
    tagsStates.forEach((element) => {
      if (element.state) {
        tags += element.tag;
      }
    });
    console.log(tags);
  };

  const UpdateByName = (event) => {
    setfilter(
      posts.filter((post) => {
        postContent = post.props.content.toLowerCase();
        return postContent.includes(inputRef.current.value.toLowerCase());
      })
    );
  };

  return (
    <div id="Games" className="games-box">
      <div className="games-stickyList-box">
        <div className="games-stickyList">
          <div className="games-stickyList-title">Games made with Unity</div>
          <input ref={inputRef} type="text" onInput={UpdateByName}></input>
          <div className="games-stickyList-checkBox-list">
            <div>
              <input type="checkbox" name="arcade" onChange={UpdateByTags} />
              Arcade
            </div>
            <div>
              <input type="checkbox" name="fps" onChange={UpdateByTags} />
              FPS
            </div>
          </div>
        </div>
        <div className="games-contentBox">{filter}</div>
      </div>
    </div>
  );
}
