let favQuotes = '';

let randomNumber = Math.floor(Math.random() * 3);
switch (randomNumber) {
    case 0:
      favQuotes = "You win some you lose some.";
      break;
    case 1:
      favQuotes = "I'd rather make less money working with people I like than make more money with people I don't like";
      break;
    case 2:
      favQuotes = "You miss all the shots you don't make.";
      break;
    default:
      console.log(`No quote was generated.`);
  }

  console.log(favQuotes);