window.addEventListener('DOMContentLoaded',()=>{
  const extraKnockout=[
    {text:"Who painted the Mona Lisa?",answer:"Leonardo da Vinci",explain:"Leonardo da Vinci painted the Mona Lisa.",chaos:1},
    {text:"What is the highest mountain above sea level?",answer:"Mount Everest",explain:"Mount Everest is the highest mountain above sea level.",chaos:1},
    {text:"What is the largest mammal on Earth?",answer:"The blue whale",explain:"The blue whale is the largest known animal on Earth.",chaos:1},
    {text:"What is the fastest land animal?",answer:"The cheetah",explain:"Cheetahs can reach roughly 60–70 mph in short bursts.",chaos:1},
    {text:"Which planet is closest to the Sun?",answer:"Mercury",explain:"Mercury is the innermost planet in our solar system.",chaos:1},
    {text:"Which country has the most natural lakes?",answer:"Canada",explain:"Canada has more natural lakes than any other country.",chaos:1},
    {text:"What is the tallest living animal?",answer:"The giraffe",explain:"Giraffes are the tallest living land animals.",chaos:1},
    {text:"What is the smallest country in the world?",answer:"Vatican City",explain:"Vatican City is the world's smallest sovereign state by area.",chaos:1},
    {text:"Samsung originated in which country?",answer:"South Korea",explain:"Samsung was founded in South Korea.",chaos:1},
    {text:"In what year did the Titanic sink?",answer:"1912",explain:"The Titanic sank in April 1912.",chaos:1},
    {text:"Who was the first person to walk on the Moon?",answer:"Neil Armstrong",explain:"Neil Armstrong stepped onto the Moon in 1969.",chaos:1},
    {text:"Who painted the ceiling of the Sistine Chapel?",answer:"Michelangelo",explain:"Michelangelo painted the famous ceiling frescoes.",chaos:1},
    {text:"Which ocean is the smallest?",answer:"The Arctic Ocean",explain:"The Arctic is the smallest of the world's five oceans.",chaos:1},
    {text:"Which sport is played at Wimbledon?",answer:"Tennis",explain:"Wimbledon is one of tennis's four Grand Slam tournaments.",chaos:1},
    {text:"What currency is used in Japan?",answer:"The yen",explain:"Japan's currency is the yen.",chaos:1},
    {text:"What is the hardest naturally occurring substance?",answer:"Diamond",explain:"Diamond ranks 10 on the Mohs hardness scale.",chaos:1},
    {text:"In which country is most of the Amazon rainforest?",answer:"Brazil",explain:"The largest share of the Amazon rainforest lies in Brazil.",chaos:1},
    {text:"In which country would you find the Great Barrier Reef?",answer:"Australia",explain:"The Great Barrier Reef lies off Queensland, Australia.",chaos:1},
    {text:"How many bones are in a typical adult human body?",answer:"206",explain:"A typical adult skeleton has 206 bones.",chaos:1},
    {text:"Which gas makes up most of Earth's atmosphere?",answer:"Nitrogen",explain:"Earth's atmosphere is about 78% nitrogen.",chaos:1},
    {text:"How many teeth does a typical adult have, including wisdom teeth?",answer:"32",explain:"A full adult set normally contains 32 teeth.",chaos:1},
    {text:"Which element has atomic number 1?",answer:"Hydrogen",explain:"Hydrogen is the first element on the periodic table.",chaos:1},
    {text:"Which band recorded 'Hey Jude'?",answer:"The Beatles",explain:"The Beatles released 'Hey Jude' in 1968.",chaos:1},
    {text:"Who sang 'Bad Romance'?",answer:"Lady Gaga",explain:"Lady Gaga released 'Bad Romance' in 2009.",chaos:1},
    {text:"In what year was the first iPhone released?",answer:"2007",explain:"Apple released the first iPhone in 2007.",chaos:1},
    {text:"How many strings does a standard guitar usually have?",answer:"6",explain:"A standard guitar normally has six strings.",chaos:1},

    {text:"Finish the quote: Beauty is in the eye of the ___?",answer:"Beholder",explain:"The familiar phrase ends with 'beholder'.",chaos:3},
    {text:"Finish the quote: To be, or not to be, that is the ___.",answer:"Question",explain:"From Shakespeare's Hamlet.",chaos:3},
    {text:"Finish the phrase: All that glitters is not ___.",answer:"Gold",explain:"The familiar form ends with 'gold'.",chaos:3},
    {text:"Finish the saying: A picture is worth a thousand ___.",answer:"Words",explain:"The saying ends with 'words'.",chaos:3},
    {text:"Finish the saying: When in Rome, do as the ___ do.",answer:"Romans",explain:"The phrase ends with 'Romans do'.",chaos:3},
    {text:"Finish the phrase: The pen is mightier than the ___.",answer:"Sword",explain:"Edward Bulwer-Lytton's famous line ends with 'sword'.",chaos:3},
    {text:"Finish the phrase: Fortune favours the ___.",answer:"Bold",explain:"A common English form of the Latin proverb.",chaos:3},
    {text:"Finish the quote: I think, therefore I ___.",answer:"Am",explain:"René Descartes: 'I think, therefore I am.'",chaos:3},
    {text:"Finish the quote: The only thing we have to fear is fear ___.",answer:"Itself",explain:"From Franklin D. Roosevelt's 1933 inaugural address.",chaos:3},
    {text:"Finish the quote: That's one small step for man, one giant leap for ___.",answer:"Mankind",explain:"Neil Armstrong's famous Moon-landing line.",chaos:3},
    {text:"Finish the proverb: Better late than ___.",answer:"Never",explain:"The proverb ends with 'never'.",chaos:3},
    {text:"Finish the proverb: Actions speak louder than ___.",answer:"Words",explain:"The proverb contrasts actions with words.",chaos:3}
  ];

  const addMissing=list=>{
    const existing=new Set(list.map(q=>q.text));
    extraKnockout.forEach(q=>{if(!existing.has(q.text)){list.push({...q});existing.add(q.text);}});
  };
  addMissing(DEFAULTS.knockout);
  addMissing(data.knockout);
  save();
  localStorage.removeItem('chooseLoserQuestionHistory');
});