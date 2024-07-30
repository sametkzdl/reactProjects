import axios from "axios";
import React, { useEffect, useState } from "react";

const RandomCard = () => {
  const [value, setValue] = useState("");
  const [getRandomCard, setGetRandomCard] = useState(1);
  const randomNumber = () => {
    const number = Math.floor(Math.random() * 20);
    return number;
  };
  useEffect(() => {
    const getUsers = async () => {
      setValue(false);
      const { data } = await axios(
        `https://fakestoreapi.com/products/${getRandomCard}`
      );
      setValue(data);
    };
    getUsers();
  }, [getRandomCard]);
  return (
    <div
      style={{
        textAlign: "center",
        width: "400px",
        border: "2px solid black",
        padding: "20px",
        marginInline: "auto",
        marginBlock: "30px",
      }}
    >
      {value ? (
        <button onClick={() => setGetRandomCard(randomNumber())}>
          Get Random Card
        </button>
      ) : (
        <button onClick={() => alert("data is loading ... wait 3 seconds")}>
          Loading
        </button>
      )}
      {value ? (
        <div>
          <h2>{value.title}</h2>
          <p>ID: {value.id}</p>
          <p>Price: ${value.price}</p>
          <p>Description: {value.description}</p>
          <p>Category: {value.category}</p>
          <img width={300} height={300} src={value.image} alt={value.title} />
          <p>
            Rating: {value.rating.rate} (Count: {value.rating.count})
          </p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default RandomCard;
