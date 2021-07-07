//Welcome:
//Write a 'welcome' function that takes a parameter 'language', and returns a greeting. It should default to English if the language is not in the database, 
//or in the event of an invalid input.

const language = 'Estonian';

function greet(language) {
  const greetings = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };

  if (greetings[language.toLowerCase()] === undefined) {
    return greetings['english'];
  } else {
    return greetings[language.toLowerCase()];
  }
}

console.log(`The greeting in ${language} is ${greet(language)}`);

//Output to Console ->  The greeting in Estonian is Tere tulemast
