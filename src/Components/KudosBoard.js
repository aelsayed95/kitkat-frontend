import React, { useState, useEffect } from "react";
import RecentKudos from "./RecentKudos";
import SayThankyou from "./SayThankyou";

function KudosBoard(props) {
  const [kudosList, setKudosList] = useState([{}]);

  useEffect(() => {
      fetch("/recent-kudos")
        .then((res) => res.json())
        .then((kudosList) => {
          setKudosList(kudosList);
          console.log(kudosList);
        })
  }, []);

  const addKudos = (userInput) => {
    let copy = [...kudosList.kudos];
    copy.push(userInput);
    setKudosList({kudos: copy});
  }

  return <div>
    <SayThankyou addKudos={addKudos} />
    <RecentKudos kudosList={kudosList} />
  </div>;
}

KudosBoard.propTypes = {};

export default KudosBoard;
