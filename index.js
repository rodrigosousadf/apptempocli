const program = require("commander"); // importei o modulo commander
const { fetchNow, weatherForecast } = require("./commands"); // importei o commands.js

program.version("0.0.1").description("Aplicação do tempo na linha de comando");

program
  .command("now <city>")
  .alias("n")
  .description("veja o tempo atual na cidade especificada")
  .action(city => fetchNow(city));

program
  .command("forecast <city>")
  .alias("f")
  .description("veja a previsão de tempo da cidade especificada")
  .action(city => weatherForecast(city));

/*.version allows us define the current version of our command line application
.command defines how the parameter should be passed to the program with any extra arguments
.alias defines an alternative short form parameter that can be passed to the program instead of typing a longer one.
.description is the description of the alias
.action will call whatever function is passed to it. The action runs the functions and displays whatever is returned from the function. The action is also responsible for handling interactions with the user if the command line application is an interactive application. */

program.parse(process.argv);
