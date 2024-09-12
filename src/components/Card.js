import React from "react";

export default function Card({ user }) {
  return (
    <div className="carousel-item">
      <div className="carousel-img">
        <img src={user.imageUrl} />
      </div>
      <div className="carousel-content">
        <h3>{user.name}</h3>
        <p>{`"${user.description}"`}</p>
      </div>
    </div>
  );
}
