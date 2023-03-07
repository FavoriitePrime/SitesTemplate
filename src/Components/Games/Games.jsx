import React from "react";
import Post from "./Post/Post";
import NightLightImg from "../../Images/Games/NightLight.jpg";
import "./Games.css";
import { useRef, useState } from "react";

export default function Games() {
  const posts = [
    <Post content="Fortnite" header="Header" image={NightLightImg}></Post>,
    <Post content="CSGO" header="Header" image={NightLightImg}></Post>,
    <Post content="Team Fortress" header="Header" image={NightLightImg}></Post>,
    <Post content="Minecraft" header="Header" image={NightLightImg}></Post>,
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
  const [filter, setfilter] = useState(posts);
  //Filter CheckBoxs
  const inputRef = useRef();
  const [arcade, setArcade] = useState(false);
  const [FPS, setFPS] = useState(false);
  const [ThirdPerson, setThirdPerson] = useState(false);
  let message;
  const handleChange = (event) => {
    console.log(inputRef.current.value);
    setfilter(
      posts.filter((post) => {
        message = post.props.content.toLowerCase();
        return message.includes(inputRef.current.value.toLowerCase());
      })
    );
    console.log(filter);
  };

  return (
    <div id="Games" className="games-box">
      <div className="games-stickyList-box">
        <div className="games-stickyList">
          <div className="games-stickyList-title">Games made with Unity</div>
          <input
            ref={inputRef}
            type="text"
            id="message"
            name="message"
            onInput={handleChange}
          ></input>
          <div className="games-stickyList-checkBox-box">
            <div>
              <input
                type="checkbox"
                checked={arcade}
                onChange={() => setArcade(!arcade)}
              />
              Аркада?
            </div>
          </div>
        </div>
        <div className="games-contentBox">{filter}</div>
      </div>
    </div>
  );
}
