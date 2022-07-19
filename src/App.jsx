// eslint react-hooks/exhaustive-deps:off

import React, { StrictMode, useEffect, useState } from "react";
import ReactDom from "react-dom";
import ColufulMessage from "./componets/ColourfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceshowFlag] = useState(false);

  // const onCllickButton = () => {
  //   return alert();
  // };
  const onCllickCuntup = () => {
    setNum(num + 1);
  };

  const onClickFaceShowFlag = () => {
    setFaceshowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceshowFlag(true);
    } else {
      faceShowFlag && setFaceshowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>aaんにちは</h1>
      <ColufulMessage color="blue">お元気ですか？</ColufulMessage>
      <ColufulMessage color="pink">　チルドレン </ColufulMessage>
      <button onClick={onCllickCuntup}>countup</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickFaceShowFlag}> on/off</button>
      {faceShowFlag && <p>^^</p>}
    </>
  );
};

export default App;
