import { argv } from 'node:process';
export const parseArgs = () => {
  // const args = process.argv
  // console.log(args);
  // process.argv.forEach((value,index)=>{
  //   console.info(value + ': ' + index);
  //  });


// print process.argv
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
    // Write your code here 
};
parseArgs()