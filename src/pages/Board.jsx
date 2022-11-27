import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import { check } from "../rules/rules";

const x = "X";
const o = "O";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Board = () => {
  const [turn, setTurn] = useState(x);
  const [moves, setMoves] = useState(0);
  const [values, setValues] = useState({ [x]: [], [o]: [] });
  const [winner, setWinner] = useState(undefined);

  const toggleTurn = () => {
    setTurn(turn === x ? o : x);
  };

  const reset = () => {
    setValues({ [x]: [], [o]: [] });
    setMoves(0);
    setTurn(x);
    setWinner(undefined);

    items.forEach((i) => {
      document.getElementById(i).innerHTML = "";
    });
  };

  const handleClick = (e) => {
    if (e.target.innerHTML.trim() !== "" || winner) {
      return;
    }
    e.target.innerHTML = turn;
    const newValues = { ...values };
    newValues[turn].push(+e.target.id);
    setValues(newValues);

    const isAWinner = check(values, turn);

    if (isAWinner) {
      setWinner(`${turn} is the winner!`);
    } else if (moves >= 8) {
      setWinner("Draw! No winners today.");
    } else {
      toggleTurn();
      setMoves(moves + 1);
    }
  };

  return (
    <div>
      <h4>Your turn, {turn}</h4>
      <Grid container justifyContent="center">
        <Grid container item xs={1} justifyContent="center">
          {items.map((i) => {
            return (
              <Grid
                item
                xs={4}
                id={i}
                key={i}
                onClick={handleClick}
                style={{
                  border: "1px solid black",
                  height: "50px",
                  width: "50px",
                }}
              ></Grid>
            );
          })}
        </Grid>
      </Grid>
      {winner && <h1>{winner}</h1>}
      <p>
        <Button onClick={reset}>Reset</Button>
      </p>
    </div>
  );
};
