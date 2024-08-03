import { Fragment, useState } from "react";
import paper from "../../public/icons/paper.svg";
import rock from "../../public/icons/rock.svg";
import sicissor from "../../public/icons/sicissor.svg";

const Rps = () => {
  const ingredients = {
    rock: rock,
    paper: paper,
    sicissor: sicissor,
  };
  const [pcSelect, setPcSelect] = useState("");
  const [mySelect, setMySelect] = useState("");
  const [myScore, setMyScore] = useState(0);
  const [pcScore, setPcScore] = useState(0);

  const handleClick = (choice) => {
    const randomNumber = Math.floor(Math.random() * 3).toString();
    setPcSelect(randomNumber);
    setMySelect(choice);

    const increasePcScore = () => setPcScore((prevScore) => prevScore + 1);
    const increaseMyScore = () => setMyScore((prevScore) => prevScore + 1);

    if (randomNumber === "0" && choice === "1") {
      increasePcScore();
    } else if (choice === "0" && randomNumber === "1") {
      increaseMyScore();
    } else if (choice === "1" && randomNumber === "2") {
      increaseMyScore();
    } else if (randomNumber === "1" && choice === "2") {
      increasePcScore();
    } else if (choice === "2" && randomNumber === "0") {
      increaseMyScore();
    } else if (randomNumber === "2" && choice === "0") {
      increasePcScore();
    }
  };

  const reset = () => {
    setMySelect("");
    setPcSelect("");
    setMyScore(0);
    setPcScore(0);
  };

  const renderSelection = () => {
    switch (pcSelect) {
      case "0":
        return (
          <div>
            <h5>Paper</h5>
            <img src={ingredients.paper} width={40} height={40} alt="Paper" />
          </div>
        );
      case "1":
        return (
          <div>
            <h5>Rock</h5>
            <img src={ingredients.rock} width={40} height={40} alt="Rock" />
          </div>
        );
      case "2":
        return (
          <div>
            <h5>Scissor</h5>
            <img
              src={ingredients.sicissor}
              width={40}
              height={40}
              alt="Scissor"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const mySelection = () => {
    switch (mySelect) {
      case "0":
        return (
          <Fragment>
            <h5>Paper</h5>
            <img src={ingredients.paper} width={40} height={40} alt="Paper" />
          </Fragment>
        );
      case "1":
        return (
          <Fragment>
            {" "}
            <h5>Rock</h5>
            <img src={ingredients.rock} width={40} height={40} alt="Rock" />
          </Fragment>
        );
      case "2":
        return (
          <Fragment>
            <h5>Scissor</h5>
            <img
              src={ingredients.sicissor}
              width={40}
              height={40}
              alt="Scissor"
            />
          </Fragment>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ textAlign: "center" }}>ROCK PAPER SCISSOR</h2>
      <div
        style={{
          width: "600px",
          margin: "40px auto",
          border: "1px solid gray",
          padding: "40px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <span style={{ fontSize: "40px" }}>{pcScore}</span>

          <h3>Computers Choice</h3>
          {renderSelection()}
        </div>

        <br />

        <div>
          <span style={{ fontSize: "40px" }}>{myScore}</span>
          <h3>Users Choice</h3>
          <button
            onClick={() => {
              handleClick("1");
            }}
          >
            Rock
          </button>
          <button
            onClick={() => {
              handleClick("0");
            }}
          >
            Paper
          </button>
          <button
            onClick={() => {
              handleClick("2");
            }}
          >
            Scissor
          </button>
          <div>
            <div style={{ padding: "50px" }}>{mySelection()}</div>
          </div>
        </div>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Rps;
