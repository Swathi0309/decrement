import React from 'react';
import { useParams } from 'react-router-dom';

const Userinfo = () => {
    const {userid}=useParams();
  return (
    <div>Userinfo{userid}</div>
  )
}

export default Userinfo;