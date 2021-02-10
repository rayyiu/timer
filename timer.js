// process.stdout.write('beep');
const slice = process.argv.slice(2);
let start = 0
for (let time of slice){
  const delay = Number(time);
  if (!isNaN(delay) && delay > 0){
    setTimeout(() => {
    // process.stdout.write('beep');}, time)
    process.stdout.write('beep')
    }, delay * 1000)
  } 
}
    //from the command line inputs, this function should 
    //process.stdout.write('beep') at the time

