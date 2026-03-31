// import React, { useState } from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

// const carData = {
//   "ALFA ROMEO": [],
//   "ALL MODELS": ["ALTERNATOR HOSE", "AUTOMATIC TRANSMISSION FLUID", "BRAKE FLUID", "GEAR LEVER OIL SEAL", "MOTOR OIL"],
//   AUDI: ["Brake Pads", "Oil Filter", "Spark Plugs"],
//   BMW: ["Air Filter", "Brake Fluid", "Engine Oil"],
//   BYD: ["Battery", "Brake Discs", "Coolant"],
// };

// const MultiLevelMenu = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleChange = (panel) => (event, isExpanded) => {
//     setExpanded(isExpanded ? panel : false);
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: "50px auto" }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Car Parts Menu
//       </Typography>
//       {Object.entries(carData).map(([brand, parts]) => (
//         <Accordion
//           key={brand}
//           expanded={expanded === brand}
//           onChange={handleChange(brand)}
//           sx={{ mb: 1 }}
//         >
//           <AccordionSummary
//             expandIcon={parts.length > 0 ? <ExpandMoreIcon /> : null}
//             aria-controls={`${brand}-content`}
//             id={`${brand}-header`}
//           >
//             <DirectionsCarIcon sx={{ mr: 1 }} />
//             <Typography>{brand}</Typography>
//           </AccordionSummary>
//           {parts.length > 0 && (
//             <AccordionDetails>
//               <List>
//                 {parts.map((part) => (
//                   <ListItem key={part} sx={{ pl: 4 }}>
//                     <ListItemText primary={part} />
//                   </ListItem>
//                 ))}
//               </List>
//             </AccordionDetails>
//           )}
//         </Accordion>
//       ))}
//     </div>
//   );
// };

// export default MultiLevelMenu;
// src/Footer.jsx
import React, { useState } from "react";

const Products = () => {
  const [hover, setHover] = useState(false);

  const footerStyle = {
    background: "linear-gradient(135deg, #4285F4, #34A853)",
    color: "white",
    borderRadius: "15px",
    padding: "2rem",
    textAlign: "center",
    transform: hover ? "translateY(-5px)" : "translateY(0)",
    boxShadow: hover
      ? "0 12px 35px rgba(0,0,0,0.3)"
      : "0 8px 25px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  };

  const badgeStyle = {
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    margin: "0 0.25rem",
    backgroundColor: "white",
    fontWeight: "600",
  };

  return (
    <div className="container"> 
        <div
        style={footerStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        <h2 style={{ marginBottom: "1rem" }}>Made With 🤖 Using</h2>
        <div>
            <span style={{ ...badgeStyle, color: "#4285F4" }}>React</span>
            <span style={{ ...badgeStyle, color: "#34A853" }}>Bootstrap</span>
            <span style={{ ...badgeStyle, color: "#a834a4" }}>ChatGPT</span>
        </div>
        <p style={{ fontStyle: "italic", marginTop: "1rem" }}>
            Launched on 31/3/2026
        </p>
        </div>
    </div>
  );
};

export default Products;