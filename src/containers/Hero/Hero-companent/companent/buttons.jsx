import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const buttons = (props) => {
  return (
    <div style={{
      width:'100%'
    }}>
      <button style={{
      color:'black',
      fontFamily:'robota',
      fontSize:'19.434px',
      display:'flex',
      width:'210.384px',
      height:'54.342px',
      padding:'6.95px 8.936px',
      justifyContent:"center",
      alignItems:'center',
      gap:'4.964px',
      borderRadius:'9.432px',
      border: '3.971px solid #5241F2',
      background:"#fff",
      boxShadow:'4.96436px 4.96436px 9.92873px 0px rgba(0, 0, 0, 0.25)',
    ':hover': {
        backgroundColor: "red",
      },
      }}>{props.text}       <FontAwesomeIcon icon={faArrowRight} /> </button>


    </div>
  );
};

export default buttons;
