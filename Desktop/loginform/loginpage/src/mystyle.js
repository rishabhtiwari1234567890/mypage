import background from "./image.jpg";
const mystyle={

    color:"black",
    backGroundColor :`url(${Image})`,
    padding: "10px",
    fontFamily:"Arial"
  };
  const login={
    borderRadius: "20px",
      border: "#FF4B2B",
      backgroundColor: "#FF4B2B",
      color: "#FFFFFF",
      fontSize: "12px",
      fontWeight: "bold",
      padding: "12px 45px",
      letterSpacing: "1px",
      transition: "transform 80ms ease-in"
  };

  const form={
    position: 'relative',
  zIndex: '1',
  backgroundImage: `url(${background})` ,
   maxWidth: '200px',
  maxHeight: '2000px',
  margin: '0 auto 100px',
  padding: '200px',
  textAlign: 'center',
  boxShadow: '2 4 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',

  }

  export  {mystyle ,login,form};