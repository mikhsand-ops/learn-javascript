let userName = 'Jane';
let userQuestion = 'is my day going to be good?';
let randomNumber = Math.floor(Math.random()*8);
let eightBall = randomNumber;

userName === 'Jane' ? console.log(`Hello ${userName}!`):
console.log('Hello');

if (!userQuestion){
  console.log('please submit a question!')
}else{
  console.log(`${userName} asked "${userQuestion}"`);
  console.log('prediction result :');
  switch(eightBall){
    case 0:
      console.log('It is certain');
    break;
    
    case 1:
      console.log('It is decidedly so');
    break;

    case 2:
      console.log('Reply hazy try again');
    break;

    case 3:
      console.log('Cannot predict now');
    break;

    case 4:
      console.log('Do not count on it');
    break;

    case 5:
      console.log('My sources say so');
    break;

    case 6:
      console.log('Outlook not so good');
    break;

    case 7:
      console.log('Signs point to yes');
    break;

    default:
      console.log('Unavailable');
  }
}