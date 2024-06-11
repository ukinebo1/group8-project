import React from "react";
import "./FoodDisplay.css";
import asun from "../../assets/Images/Asun.png";
import rating from "../../assets/Images/rating_starts.png";
import baobab from "../../assets/Images/Baobab_Juice.png";
import egusi from "../../assets/Images/Egusi_Soup.png";
import fura from "../../assets/Images/Fura_da_Nono.png";
import hibiscus from "../../assets/Images/Hibiscus_Tea.png";
import kelewele from "../../assets/Images/kelewele.png";
import pate from "../../assets/Images/Snoek_Pâté.png";
import tagine from "../../assets/Images/tagine.png";
import wakye from "../../assets/Images/Waakye.png";

function DisplayMenu() {
  return (
    <div>
      <div className="food-display">
        <h2>Menu</h2>
        <div className="cardText">
          <p>Appertizer</p>
          <button>See More</button>
        </div>
        <div>
          <div className="food-item">
            <div className="food-display-list">
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={kelewele} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Kelewele</p>
                  <p className="food-item-description">A Ghanaian dish made of fried plantains seasoned with spices like ginger and chili</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$2</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={pate} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Snoek_Pâté</p>
                  <p className="food-item-description">A South African appetizer made from smoked snoek fish blended with cream cheese, lemon juice, and spices.</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$3</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={asun} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Asun</p>
                  <p className="food-item-description">A mouth-watering Nigerian appetizer bursting with flavor of spicy grilled goat meat.</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$4</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardText">
            <p>Main Course</p>
            <button>See More</button>
          </div>
          <div className="food-item">
            <div className="food-display-list">
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={tagine} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Tagine</p>
                  <p className="food-item-description">A Morocco  dish named after the earthenware pot in which it's cooked. It's made with meat  vegetables, and a variety of spices.</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$6</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={wakye} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Waakye</p>
                  <p className="food-item-description">Ghanaian dish made  of  rice and beans cooked together with dried millet leaves, which give the dish its distinctive color.</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$7</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={egusi} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Egusi Soup</p>
                  <p className="food-item-description">Nigeria soup made with melon, served with a variety of starchy sides such as pounded yam, eba , fufu, or semovita.</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$10</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cardText">
            <p>Breverages</p>
            <button>See More</button>
          </div>
          <div className="food-item">
            <div className="food-display-list">
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={fura} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Fura da Nono</p>
                  <p className="food-item-description">A traditional Northern Nigerian drink made from fermented milk (nono) mixed with ground millet (fura). Its served cold</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$2</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={hibiscus} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Hibiscus Tea</p>
                  <p className="food-item-description">Made from dried hibiscus petals, that is refreshing and slightly tart, sweetened with sugar and flavored with ginger, pineapple, or cloves.</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$3</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
              <div className="food-item">
                <div className="food-item-img-container">
                  <img src={baobab} className="food-item-image" alt="" />
                </div>
                <div className="food-item-info">
                  <p>Baobab Juice</p>
                  <p className="food-item-description">Made from the fruit of the baobab tree, this juice is rich in vitamin C and has a tangy, citrus-like flavor. It’s often mixed with water and sweetened.</p>
                  <div className="food-item-name-rating">
                    <p className="food-item-price">$3</p>
                    <span>
                      <img src={rating} alt="" /> 5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={asun} alt="" /> */}
    </div>
  );
}

export default DisplayMenu;
