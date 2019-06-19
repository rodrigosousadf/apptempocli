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
    sensacao_termica: data.current.feelslike_c,
    umidade: data.current.humidity,
    condições: data.current.condition.text
  };

  console.log(now);
};

const weatherForecast = async city => {
  const response = await fetch(
    `http://api.apixu.com/v1/forecast.json?key=${APIXU_KEY}&q=${city}&lang=pt`
  );

  const data = await response.json();

  /*  const previsao = {
    local: data.location.name,
    país: data.location.country,
    condições: data.forecastday.condition.text
  }; */
  // dar uma limpada nos dados do forecast
  console.log(data.forecast.forecastday);
};
/* o fetchNow é uma função assincrona que retorna uma promise. Pega a cidade que passou como parametro pra fazer a requisicao com o API. O operador await  só pode ser usado dentro de uma função assincrona e vai retornar a promessa fulfilled, o valor ou valor mesmo se não for uma promisse.

The now object holds just the necessary information we need from the data returned from the API request. The same thing applies to the weatherForecast function: */

// agora eu tenho que exportar as funções pra serem usadas na linha de comando

module.exports = {
  fetchNow,
  weatherForecast
};
