import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import ColufulMessage from "./componets/ColourfulMessage";

const App = () => {
  const onCllickButton = () => {
    return alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>aaんにちは</h1>
      <ColufulMessage color="blue">お元気ですか？</ColufulMessage>
      <ColufulMessage color="pink">　チルドレン </ColufulMessage>
      <button onClick={onCllickButton}>送信</button>
    </>
  );
};

export default App;
