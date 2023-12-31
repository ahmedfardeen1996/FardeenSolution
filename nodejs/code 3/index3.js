const fs = require('fs');

function countWordsInFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    const wordCount = data.split(/\s+/).length;
    console.log('Total word count:', wordCount);
  });
}

const filePath = 'data.txt';
countWordsInFile(filePath);