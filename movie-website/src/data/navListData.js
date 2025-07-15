import { act } from "react";

const navListData = [
  { 
    _id: 1,
    link: '#',
    name: `home`, 
    active: true, // Assuming you want to track active state 
  },
  { 
    _id: 2,
    link: '#schedule',
    name: `schedule`, 
    active: false,
   
  },
  { 
    _id: 3,
    link: "#trend",
    name: `trend`,
    active: false
  },
  { 
    _id: 4,
    link: "#blogs",
    name: `blog`,
    active: false
  },
];

export default navListData;
