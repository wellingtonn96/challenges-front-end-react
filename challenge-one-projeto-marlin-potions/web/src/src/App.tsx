import React, { useEffect, useState } from "react";
import {
  FaShoppingBag,
  FaBars,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaGooglePlus,
  FaTumblr,
} from "react-icons/fa";
import axios from "axios";

import "./App.css";

interface IPotions {
  id: number;
  name: string;
  image: string;
  price: number;
  effect: string;
  ingredients: [string];
}

function App() {
  const [potionsList, setPotionsList] = useState<IPotions[]>([]);
  const [potion, setPotion] = useState<IPotions>();
  const [cartList, setCartList] = useState<IPotions[]>([]);
  const [total, setTotal] = useState<number>();

  const POTIONS_URL =
    "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json";

  useEffect(() => {
    axios.get(POTIONS_URL).then((results) => {
      const { potions } = results.data;

      const list: IPotions[] = [];

      Object.keys(potions).forEach((item) => {
        list.push(potions[item]);
      });

      console.log(list);

      setPotionsList(list);
    });
  }, []);

  useEffect(() => {
    const total = cartList.reduce((prev, current) => {
      return prev + current.price;
    }, 0);
    setTotal(total);
  }, [cartList]);

  function handleProduct(id: number) {
    const item = potionsList.find((item) => item.id === id);

    setPotion(item);
  }

  function handleAddBag() {
    if (potion) setCartList([...cartList, potion]);
    setPotion(undefined);
  }

  return (
    <div className="contanier">
      {potion && (
        <fieldset className="lightbox" style={{ position: "fixed" }}>
          <table style={{ background: "white" }}>
            <tr>
              <td>
                <img
                  src={require(`./assets/${potion.image}`)}
                  alt="potions"
                  style={{ width: 200, height: 200 }}
                />
              </td>
              <td>
                <ul>
                  <li>
                    <h3>Aging Potion</h3>
                  </li>
                  <li>
                    <h3>Use/Effect</h3>
                    <ul>
                      <li>{potion.effect}</li>
                    </ul>
                  </li>
                  <li>
                    <h3>Ingredients</h3>
                    <ul>
                      {potion.ingredients.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <h3>Price</h3>
                    <ul>
                      <li>
                        <h3 style={{ color: "red" }}>${potion.price}</h3>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <button onClick={handleAddBag}>Add to cart</button>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </fieldset>
      )}

      <header className="header">
        <div className="bars">
          <FaBars size={35} />
        </div>

        <div>
          <h1 style={{ textTransform: "uppercase", fontSize: 25 }}>
            merlin`s potions
          </h1>
          <p>five potions sice 1026</p>
        </div>

        <div className="search">
          <input type="text" placeholder="Search our stock" />
        </div>

        <div className="promotion">
          <p>Free shippin</p>
          <p>on order over $50</p>
        </div>

        <div className="bag">
          <FaShoppingBag size={35} />

          <p>Bag: {cartList.length.toString()}</p>
        </div>
      </header>

      <nav className="menu">
        <ul>
          <li>potions</li>
          <li>ingredients</li>
          <li>books</li>
          <li>supplies</li>
          <li>charms</li>
          <li>clearence!</li>

          <li>sigin</li>
          <li>singn up</li>
        </ul>
      </nav>

      <main className="promotion-mobile">
        <p>Free shippin on order over $50</p>
      </main>

      <div className="content">
        <h1>Potions</h1>

        {potionsList.map((item: IPotions) => (
          <div
            className="potion-item"
            key={item.id}
            onClick={() => handleProduct(item.id)}
          >
            <div>
              <img
                src={require(`./assets/${item.image}`)}
                alt="potions"
                style={{ width: 200, height: 200 }}
              />
            </div>
            <p>
              {item.name} - ${item.price}
            </p>
          </div>
        ))}
      </div>

      <div className="footer">
        <div className="container">
          <div className="newsletter">
            <p>Sing up our Newsletter</p>
            <p>Sing up for our newsletter E get esclusive discounts!</p>
            <form action="">
              <div className="input-group">
                <input type="text" placeholder="Enter your email" />
                <button>submit</button>
              </div>
            </form>
          </div>
          <div>
            <ul className="links-footer">
              <li>company</li>
              <li>contact us</li>
              <li>shipping</li>
              <li>returns</li>
              <li>carreers</li>
            </ul>
            <div className="social-medias">
              <FaFacebook size={27} />
              <FaTwitter size={27} />
              <FaPinterest size={27} />
              <FaGooglePlus size={27} />
              <FaTumblr size={27} />
            </div>
            <p>© 2020 Marlin's Potions | All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
