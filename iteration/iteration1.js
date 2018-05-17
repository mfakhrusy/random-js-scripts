/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here
for (const day of days) {
    let newDay = day
      .split('')
      .map((char, index) => index === 0 ? char.toUpperCase() : char)
      .join('');
    
    console.log(day, newDay);
}