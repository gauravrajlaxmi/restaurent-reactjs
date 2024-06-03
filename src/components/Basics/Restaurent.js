import React, { useState } from "react";
 import "./style.css";
import Menu from "./Menuapi";
//eslint-disable-next-line
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";



const uniqueList = [...new Set(Menu.map((curElem)=>{
  return curElem.category;
})

),
"All",
];
console.log(uniqueList);

const Restaurent = () => {
  const [menuData, setmenuData] = useState(Menu);
  const [menuList,setmenuList]= useState(uniqueList);

  const filterItem = (category) => {
if (category==="All") {
  setmenuData(Menu);
  return;
  
}

    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setmenuData(updateList);
    setmenuList(setmenuList);
  };
  return (
    <>
     <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
     
    </>
  );
};

export default Restaurent;
