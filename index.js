var fontfacegen = require('fontfacegen');

function towebfont (source, dest) {

  if (!source) {
    console.error('Missing source.');
    console.error('Run: towebfont path/to/source.ext path/to/dest/');
    return false;
  }

  if (!dest) {
    console.error('Missing destination');
    console.error('Run: towebfont path/to/source.ext path/to/dest/');
    return false;
  }

  fontfacegen({
    source: source,
    dest: dest,
  });

  console.log('Font generated!');

  return true;
}

module.exports = towebfont;
