const http = require("http");
const fetch = require("node-fetch"); // importando o node-fetch
const APIXU_KEY = "171530b85ab042eeb2933923191706"; // a chave pra acessar os dados

const fetchNow = async city => {
  const response = await fetch(
    `http://api.apixu.com/v1/current.json?key=${APIXU_KEY}&q=${city}&lang=pt`
  );

  const data = await response.json();

  const now = {
    local: data.location.name,
    país: data.location.country,
    longitude: data.location.lon,
    latitude: data.location.lat,
    temperatura: data.current.temp_c,
    temperaturefeel: data.current.feelslike_c,
    umidade: data.current.humidity,
    condições: data.current.condition.text
  };

  console.log(now);
};

const weatherForecast = async city => {
  const response = await fetch(
    `http://api.apixu.com/v1/current.json?key=${APIXU_KEY}&q=${city}&lang=pt`
  );

  const data = await response.json();

  console.log(data.forecast);
};
/* The fetchNow function is an asynchronous function that will return a Promise. It takes the passed city as a parameter in order to make the complete API request. The await operator can only be used inside an asynchronous function and it returns the fulfilled value of the Promise, or the value itself if it's not a Promise.

The now object holds just the necessary information we need from the data returned from the API request. The same thing applies to the weatherForecast function: */

// agora eu tenho que exportar as funções pra serem usadas na linha de comando

module.exports = {
  fetchNow,
  weatherForecast
};
