import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";

interface item {
  id: string;
  name: string;
}

function Dogs() {
  const [breeds, setBreeds] = useState<item[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [urlImageBreed, setUrlImageBreed] = useState("");
  const [nameOfTheDog, setNameOfTheDog] = useState("");
  const [colorName, setColorName] = useState("");
  const [fontName, setFontName] = useState("");

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

  function handleSelecteBreed(event: ChangeEvent<HTMLSelectElement>) {
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

  useEffect(() => {
    axios(`https://dog.ceo/api/breed/${selectedBreed}/images/random`).then(
      (results) => {
        setUrlImageBreed(results.data.message);
      }
    );
  }, [selectedBreed]);

  return (
    <>
      <form action="">
        <label htmlFor="">Raças</label>
        <select onChange={handleSelecteBreed}>
          <option value="">Selecione uma raça</option>
          {breeds.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="">Nome</label>
        <input
          type="text"
          placeholder="digite o nome do cachorro"
          onChange={handleNameOfTheDog}
        />
        <hr />
        <label htmlFor="">Cor</label>
        <select onChange={handleColorNameBreed}>
          <option value="">Selecione uma cor</option>
          <option value="green">green</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
          <option value="purple">purple</option>
        </select>
        <hr />
        <label htmlFor="">Fonte</label>
        <select onChange={handleSelectedFont}>
          <option value="">Selecione uma Fonte</option>
          <option value="'Montserrat', sans-serif">Montserrat</option>
          <option value="'Open Sans Condensed', sans-serif">
            Open Sans Condensed
          </option>
          <option value="'Poppins', sans-serif">'Poppins</option>
          <option value="'Roboto', sans-serif">Roboto</option>
          <option value="'Roboto Mono', monospace">Roboto Mono</option>
        </select>
        <hr />
        <div>
          <p
            style={{
              fontSize: 20,
              fontFamily: fontName,
              color: colorName,
            }}
          >
            {nameOfTheDog}
          </p>
          <img
            src={urlImageBreed}
            alt="breed image"
            style={{ height: 400, maxWidth: 800 }}
          />
        </div>
      </form>
    </>
  );
}

export default Dogs;
