// Generates a silly story when the "Generate random story" button is pressed.
// Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.
// Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.
// Generates a new random silly story every time the button is pressed.
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
// raw text strings
const storyText = "Once upon a time, :insertx: decided to visit :inserty:. When they arrived, they couldn't believe their eyes! Suddenly, :insertz:. Bob witnessed the entire scene and burst into laughter, knowing that only :insertx: could weigh 300 pounds and still pull off such antics on a bright and sunny day.";


const insertx = [
  "Willy the Goblin", "Big Daddy", "Father Christmas", "Fluffy the Unicorn", 
  "Captain Underpants", "Sir Laughs-a-Lot", "Dizzy the Clown", "Sparky the Dragon",
  "Professor Wobble", "Zippy the Alien", "Ninja Banana", "King Kong"
];

const inserty = [
  "the soup kitchen", "Disneyland", "the White House", "a haunted house", 
  "the moon", "a giant mushroom", "the candy store", "an underwater castle",
  "a flying saucer", "the wizard's tower", "a circus tent", "the pirate ship"
];

const insertz = [
  "spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away",
  "danced the Macarena", "sang opera loudly", "did a backflip and landed in a pie",
  "started speaking in rhymes", "juggled three pineapples", "rode a unicycle while juggling",
  "sneezed glitter everywhere", "inflated like a balloon and floated away", "turned into a giant ice cream cone"
];


randomize.addEventListener('click', result);
// event listener and partial function definition
function result() {

  let newStory = storyText;
  const xItem = randomValueFromArray(insertx);
  const yItem = randomValueFromArray(inserty);
  const zItem = randomValueFromArray(insertz);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', `<strong>${name}</strong>`);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + 'stone';
    const temperature =  Math.round((94 - 32) * 5 / 9) + 'centigrade';
    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahreheit', temperature);

  }

  story.innerHTML = newStory;
  story.style.visibility = 'visible';
}