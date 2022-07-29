import React from 'react';
import './Body.css'

type BodyType = {
  title: string;
}

function Body(props:BodyType) {
  return (
    <div className = 'Body'>{props.title}</div>
  );
}

export default Body;