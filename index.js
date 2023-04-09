function scuberGreetingForFeet(number) {
  if (number <= 400) {
      return 'This one is on me!'
  } else if (number < 2000 ) {
      return 'That will be twenty bucks.'
  } else if (number < 2500) {
      return 'I will gladly take your thirty bucks.'
  } else if (number > 2500) {
      return 'No can do.'
  }
}

function ternaryCheckCity(string) {
 if (string === 'NYC') {
  return 'Ok, sounds good.'
 } else {
  return 'No go.'
 }
}

function switchOnCharmFromTip(string) {
  switch(string) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous': 
      return 'Thank you.'
    default:
      return 'Bye.'
  }
 
}