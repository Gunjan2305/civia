const fs = require('fs');
const files = ['./sections/header-group.json', './sections/footer-group.json'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.startsWith('/*')) {
      content = content.replace(/^\/\*[\s\S]*?\*\/\r?\n?/, '');
      fs.writeFileSync(file, content, 'utf8');
      console.log('Fixed ' + file);
    }
  }
});
