import React, { useState, useEffect } from "react";
import RecentKudos from "./RecentKudos";
import SayThankyou from "./SayThankyou";

function KudosBoard(props) {
  const [kudosList, setKudosList] = useState([{}]);

  useEffect(() => {
      fetch("/kudos")
        .then((res) => res.json())
        .then((kudosList) => {
          setKudosList(kudosList);
          console.log(kudosList);
        })
  }, []);

  const updateKudosList = (kudosList) => {
    setKudosList(kudosList);
  }

  return <div>
    <SayThankyou updateKudosList={updateKudosList} />
    <RecentKudos kudosList={kudosList} />
  </div>;
}

KudosBoard.propTypes = {};

export default KudosBoard;
