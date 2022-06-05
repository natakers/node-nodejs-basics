export const write = async () => {
  process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();

  if (!chunk) {
    return;
  }

  chunk = "" + chunk;

  console.log(chunk);
});
    // Write your code here 
};