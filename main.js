var fs = require('fs')

console.log('Reading files in ' + __dirname + ' ...')

try {
  fs.readdirSync(__dirname).forEach((file) => {
    // file begin with two numbers as in 00, 01, 02.. etc
    if (!isNaN(file.substring(0, 2))) {
      console.log('Renaming file: ' + file)
      if (file.substring(2, 4) === '. ') { // file begins with numbers followed by dot and space
        fs.renameSync(file, file.substring(4, file.length))
      } else if (file[2] === '.' && file[3].match(/[a-zA-Z]/i)) {  // file begins with two numbers and dot with no space
        fs.renameSync(file, file.substring(3, file.length))
      } else if (file[2] === ' ' && file[3].match(/[a-zA-Z]/i)) { // file begins only with two numbers followed by space
        fs.renameSync(file, file.substring(3, file.length))
      } else if (file[2] === '-' && file[3].match(/[a-zA-Z]/i)) { // file begins with numbers followed by dash and no spaces
        fs.renameSync(file, file.substring(3, file.length))
      }
    }
  })
}
catch (error) {
  console.log(JSON.stringify(error, null, 4))
}

console.log('Done!')