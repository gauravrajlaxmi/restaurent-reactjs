import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          return (
            <div className="card-container" key={curElem.id}>
              <div className="card">
                <div className="card-body">
                  {/* <span className="card-numbar card-circle subtle">
                    {curElem.id}
                  </span> */}
                  {/* <span className="card-author subtle">Breakfast</span> */}
                  <h1 className="card-title">{curElem.name}</h1>
                  <span className="card-description ">
                    {curElem.description}
                  </span>

                  <div className="card-read">read</div>
                </div>
                
                <img src={curElem.image} alt="images" className="card-media" />

                <span className="card-tag">ORDER</span>
                <span className="card-price-tag"> {curElem.price}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
