
window.addEventListener('polymer-ready', function(e) {
	document.getElementById('editor').addEventListener('keyup', function () {
    document.getElementById('word-count').innerHTML = countWords();
  });
});

function countWords() {
  var contents = document.getElementById('editor').inputValue;
  var tokens = jQuery.trim(contents).replace(/\s+/g, " ").split(" ");

  var wordCount = 0;
  if(tokens[0] != '') {
    wordCount = tokens.length;
  }

  return wordCount;
}