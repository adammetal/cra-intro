import { useState, useCallback, useEffect } from "react";

const api = "https://api.chucknorris.io/jokes/random";
const getJoke = async () => {
  const res = await fetch(api);
  const joke = await res.json();
  return joke.value;
};

function useJokeApi() {
  const [text, setText] = useState("");

  const fetchNextJoke = useCallback(() => {
    getJoke().then((text) => {
      setText(text);
    });
  }, []);

  useEffect(() => {
    getJoke().then((text) => {
      setText(text);
    });
  }, []);

  return [text, fetchNextJoke];
}

export default useJokeApi;
