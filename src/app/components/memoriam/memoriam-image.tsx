import React from 'react';
export default function MemoriamImage(props: {
  src: any;
  alt: string;
  description?: string;
}) {
  return <img src={props.src} alt={props.alt} />;
}
