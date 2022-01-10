import React from "react";
import useJokeApi from "./model";

function JokeDiv(props) {
  const className = props.className;
  const onClick = props.onClick;
  const text = props.text;

  return (
    <div className={className} onClick={onClick}>
      Here is your joke: {text}
    </div>
  );
}

function Joke(props) {
  const className = props.className;
  const [text, fetchNextJoke] = useJokeApi();

  return <JokeDiv className={className} text={text} onClick={fetchNextJoke} />;
}

function App() {
  return (
    <>
      <h1>Jokes from Norris</h1>
      <Joke className="small-joke" />
      <Joke className="joke" />
    </>
  );
}

export default App;

// WEBPACK

// App.js --> module --> Component(App)
// index.js --> module --> main
// model.js --> module --> useJokeApi
// | |
// | |
// | |
//  ----> app.js
