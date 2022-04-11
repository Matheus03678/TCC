import React,{useState} from "react";
import "./header.css";
  


const header = () => {

  // const [state, setState] = useState("");
  
  return (
    <div className="header">
      {hamburgue()}
      <div className="logo"> 
          <p>Fome Zero</p>
          <div className="header-links">
            <p>sobre nós</p>
            <p>pontos</p>
            <p>contato</p>
          </div>
      </div>
      <div className="wapper-login">
          <button>login</button>
          <button>sing up</button>
      </div>
    </div>
  );
};

// const handleClickHamburgue = () =>{

// };

const hamburgue = () => {
  return (
    <div  className="warrep-hamburgue">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default header;
