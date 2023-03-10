import React from "react";

export default function Post(props) {
  return (
    <div>
      <div className="games-contentBox-card">
        <img
          className="games-contentBox-card-image"
          src={props.image}
          alt="Help"
        />
        <div className="games-contentBox-card-title">{props.header}</div>
        <div>{props.content}</div>
        <div>{props.tags}</div>
      </div>
    </div>
  );
}
