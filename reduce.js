const fs = require('fs');
const path = require('path');

const dirs = [
  'src/components',
  'src/app'
];

const replaceMap = {
  // Padding Y
  'py-40': 'py-20',
  'py-32': 'py-16',
  'py-24': 'py-12',
  'py-20': 'py-10',
  'py-16': 'py-8',
  'py-14': 'py-8',
  'py-12': 'py-6',
  // Margin Y
  'my-40': 'my-20',
  'my-32': 'my-16',
  'my-24': 'my-12',
  'my-20': 'my-10',
  'my-16': 'my-8',
  'my-14': 'my-8',
  'my-12': 'my-6',
  // Margin Top
  'mt-40': 'mt-20',
  'mt-32': 'mt-16',
  'mt-28': 'mt-14',
  'mt-24': 'mt-12',
  'mt-20': 'mt-10',
  'mt-16': 'mt-8',
  'mt-14': 'mt-8',
  'mt-12': 'mt-6',
  // Margin Bottom
  'mb-40': 'mb-20',
  'mb-32': 'mb-16',
  'mb-24': 'mb-12',
  'mb-20': 'mb-10',
  'mb-16': 'mb-8',
  'mb-14': 'mb-8',
  'mb-12': 'mb-6',
  // Gap
  'gap-40': 'gap-20',
  'gap-32': 'gap-16',
  'gap-28': 'gap-14',
  'gap-24': 'gap-12',
  'gap-20': 'gap-10',
  'gap-16': 'gap-8',
  'gap-14': 'gap-8',
  'gap-12': 'gap-6'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // We want to replace classes like py-32.
  // We use positive lookbehind and ahead to make sure it is bounded by spaces, quotes or colons
  for (const [key, value] of Object.entries(replaceMap)) {
    // regex matches space, ", ', `, : before, and space, ", ', `, : after.
    const regex = new RegExp('(?<=[\\s"\'`:])' + key + '(?=[\\s"\'`:])', 'g');
    content = content.replace(regex, value);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Updated', filePath);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

dirs.forEach(walkDir);
console.log('Done');
