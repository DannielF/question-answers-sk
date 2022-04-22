const questions_tech = {
  1: {
    question: "Es un framework para JavaScript",
    answers: ["Read", "Angular", "Vuex", "Embert"],
    correct: "Angular",
  },
  2: {
    question: "¿En qué año salió Vue.js?",
    answers: ["2015", "2016", "2017", "2018"],
    correct: "2015",
  },
  3: {
    question: "¿Qué significa JSON?",
    answers: ["JavaScript Object Notation", "JavaScript Object Notable", "JavaScript Object Number", "JavaScript Object Number One"],
    correct: "JavaScript Object Notation",
  },
  4: {
    question: "¿Cuál es el motor de JS de Chrome?",
    answers: ["V8", "Chrome", "Blink", "Webkit"],
    correct: "V8",
  },
  5: {
    question: "¿Cuál el fue uno de los primero nombres de JS?",
    answers: ["LiveScript", "JavaScript", "CoffeeScript", "TypeScript"],
    correct: "CoffeeScript",
  }
}

const questions_culture = {
  1: {
    question: "¿En qué año se dio la independencia Colombiana?",
    answers: ["1900", "1010", "1991", "1810"],
    correct: "1810"
  },
  2: {
    question: "¿Con qué país no limita Colombia?",
    answers: ["Venezuela", "Ecuador", "Perú", "México"],
    correct: "México"
  },
  3: {
    question: "¿Quién ganó la guerra de los Mil Días?",
    answers: ["Centro democrático", "Cambio radical", "Partido liberal", "Partido conservador"],
    correct: "Partido conservador"
  },
  4: {
    question: "¿Cuál es el significado de el color azul de la bandera Colombiana?",
    answers: ["Por las naciones unidas", "Los sumerios", "Por el color de ojos de las ballenas", "Por los dos mares que nos rodean"],
    correct: "Por los dos mares que nos rodean"
  },
  5: {
    question: "¿De qué país se independizó Colombia?",
    answers: ["Perú", "Estados unidos", "Venezuela", "España"],
    correct: "España"
  }
}

const questions_biology = {
  1: {
    question: "¿Significado de ADN?",
    answers: ["Add, Delete, New", "Anuncios de google", "Comida tipica China", "Ácido Desoxirribonucleico"],
    correct: "Ácido Desoxirribonucleico",
  },
  2: {
    question: "Se alimenta de toda clase de sustancias orgánicas...",
    answers: ["Animales", "Herviboros", "Carnivoros", "Omnívoro"],
    correct: "Omnívoro",
  },
  3: {
    question: "No es un animal cuadrupedo",
    answers: ["Perro", "Tigre", "Elefante", "Gallina"],
    correct: "Gallina",
  },
  4: {
    question: "¿Cómo se le llama al ser vivo que se sostiene en dos patas?",
    answers: ["Homo-sapiens", "Mono", "Cuadrupedo", "Bípedo"],
    correct: "bípedo",
  },
  5: {
    question: "¿Qué comen las vacas?",
    answers: ["Leche", "Queso", "Carne", "Pasto"],
    correct: "Pasto",
  },
}

const questions_math = {
  1: {
    question: "¿Cuánto es un lustro?",
    answers: ["3 años", "2 años", "1 año", "5 años"],
    correct: "5 años",
  },
  2: {
    question: "¿Cómo se lee este número: 3 DM+ 6UM + 8C",
    answers: ["36", "336", "36000", "36800"],
    correct: "36800",
  },
  3: {
    question: "Para calcular cuánto es un tercio de 3996, ¿qué tienes que hacer?",
    answers: [ "Multiplicar por tres", "Restar tres","Sumar tres", "Dividir entre tres"],
    correct: "Dividir entre tres",
  },
  4: {
    question: "Número ordinal trigésimo quinto en cifras...",
    answers: ["35", "83","73", "63"],
    correct: "35",
  },
  5: {
    question: "¿Cuál es el resultado de multiplicar 7x9?",
    answers: ["63", "14", "49", "70"],
    correct: "63",
  },
}

const questions_spanish = {
  1: {
    question: "Grupo de dos vocales distintas y contiguas que se pronuncian en una sola sílaba",
    answers: ["Párrafo", "Oración", "Tílde", "Diptongo"],
    correct: "Diptongo"
  },
  2: {
    question: "Signos de puntuación que se emplean para insertar una información complementaria en medio de una frase",
    answers: ["Coma", "Punto y Coma", "Comillas", "Paréntesis"],
    correct: "Paréntesis"
  },
  3: {
    question: "Que llevan el acento en la antepenúltima sílaba y a todas se les marca la tilde",
    answers: ["Agudas", "Graves", "Sobresdrújulas", "Esdrújulas"],
    correct: "Esdrújulas"
  },
  4: {
    question: "¿Cúal es el signo ampersand?",
    answers: ["!", ":", "%", "&"],
    correct: "&"
  },
  5: {
    question: "Palabra que suena de igual modo que otra, pero que difiere en el significado",
    answers: ["Graves", "Agudas", "Esdrújulas", "Homófona"],
    correct: "Homófona"
  }
}

export {
  questions_tech as tech,
  questions_math as math,
  questions_spanish as spanish,
  questions_culture as culture,
  questions_biology as biology
}