import React from 'react';
import './Header.css'

type HeaderType = {
  title: string;
}

function Header(props: HeaderType) {
  return (
    <div className='Header'>{props.title}</div>
  );
}

export default Header;