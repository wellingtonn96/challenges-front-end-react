import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

import "./style.css";

interface item {
  id: string;
  name: string;
}

function Dogs() {
  const [breeds, setBreeds] = useState<item[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [urlImageBreed, setUrlImageBreed] = useState(
    localStorage.getItem("urlImageBreed") || ""
  );
  const [nameOfTheDog, setNameOfTheDog] = useState(
    localStorage.getItem("nameOfTheDog") || ""
  );
  const [colorName, setColorName] = useState(
    localStorage.getItem("colorName") || ""
  );
  const [fontName, setFontName] = useState(
    localStorage.getItem("fontName") || ""
  );

  function handleSelectedBreed(event: ChangeEvent<HTMLSelectElement>) {
    const result = event.target.value;

    setSelectedBreed(result);
  }

  function handleColorNameBreed(event: ChangeEvent<HTMLSelectElement>) {
    const result = event.target.value;

    setColorName(result);
  }

  function handleNameOfTheDog(event: ChangeEvent<HTMLInputElement>) {
    const resultOfInput = event.target.value;

    setNameOfTheDog(resultOfInput);
  }

  function handleSelectedFont(event: ChangeEvent<HTMLSelectElement>) {
    const resultsOfInput = event.target.value;

    setFontName(resultsOfInput);
  }

  function handleSaveLocalStorage() {
    localStorage.setItem("fontName", fontName);
    localStorage.setItem("colorName", colorName);
    localStorage.setItem("nameOfTheDog", nameOfTheDog);
    localStorage.setItem("urlImageBreed", urlImageBreed);

    alert("salvo com sucesso");
  }

  useEffect(() => {
    axios("https://dog.ceo/api/breeds/list/all").then((response) => {
      const results = Object.keys(response.data.message);

      const list: item[] = [];

      results.map((item) =>
        list.push({ id: String(Math.random()), name: item })
      );

      setBreeds(list);
    });
  }, []);

  useEffect(() => {
    axios(`https://dog.ceo/api/breed/${selectedBreed}/images/random`).then(
      (results) => {
        setUrlImageBreed(results.data.message);
      }
    );
  }, [selectedBreed]);

  return (
    <>
      <header className="header">
        <h1>API Dog Challenge</h1>
      </header>
      <main className="main">
        <form>
          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <div className="field">
              <label htmlFor="">Raças</label>
              <select onChange={handleSelectedBreed}>
                <option value="#">Selecione uma raça</option>
                {breeds.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="">Nome</label>
              <input
                type="text"
                placeholder="digite o nome do cachorro"
                onChange={handleNameOfTheDog}
              />
            </div>
            <div className="field-group">
              <div className="field">
                <label htmlFor="">Cor</label>
                <select onChange={handleColorNameBreed}>
                  <option value="#">Selecione uma cor</option>
                  <option value="green">verde</option>
                  <option value="red">vermelho</option>
                  <option value="blue">azul</option>
                  <option value="yellow">amarelo</option>
                  <option value="purple">roxo</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="">Fonte</label>
                <select onChange={handleSelectedFont}>
                  <option value="">Selecione uma Fonte</option>
                  <option value="'Montserrat', sans-serif">Montserrat</option>
                  <option value="'Open Sans Condensed', sans-serif">
                    Open Sans Condensed
                  </option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Roboto', sans-serif">Roboto</option>
                  <option value="'Roboto Mono', monospace">Roboto Mono</option>
                </select>
              </div>
            </div>
          </fieldset>

          <div>
            <h2
              style={{
                fontFamily: fontName,
                color: colorName,
              }}
            >
              {nameOfTheDog}
            </h2>
            {urlImageBreed && <img src={urlImageBreed} alt="the breed" />}
          </div>

          <button type="button" onClick={handleSaveLocalStorage}>
            Salvar
          </button>
        </form>
      </main>
    </>
  );
}

export default Dogs;
