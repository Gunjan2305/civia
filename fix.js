const fs = require('fs');
const path = require('path');
const dir = './templates';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.startsWith('/*')) {
      content = content.replace(/^\/\*[\s\S]*?\*\/\r?\n?/, '');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed ' + file);
    }
  }
});
