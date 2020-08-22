import React from 'react';
import './UnderConstruction.scss';
import img from 'assets/construction.png';

export default function UnderConstructionComponent(props: { title?: string }) {
  return (
    <div className='container'>
      <h2>{props?.title}</h2>
      <h3>This page is currently under construction.</h3>
      <img
        id='imgUnderConstruction'
        width='300'
        alt='Under Construction'
        src={img}
      />
    </div>
  );
}
