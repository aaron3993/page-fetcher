const request = require('request');
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const args = process.argv.slice(2)

const writeFile = function(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
  if (error) {
    console.log("Failed to write to file");
    return;
  }
  console.log(`Downloaded and saved ${data.length} bytes to ${fileName}`);
  });
}
// fs.exists(args[1], (exists) => {
  // if (exists) {
if (args[1]) {
console.log('file exists')
rl.question("Enter 'Y' to overwrite the file: ", (answer) => {
  if (answer !== 'y') {
    process.exit()
  }
rl.close();
  console.log('downloading file')
  request(args[0], (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);
    console.log('error:', error);
    writeFile(args[1], body)
  })
})
}
  
// })