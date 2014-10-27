$(document).ready(function () {   
  $("#editor").bind('keyup click blur focus change paste', function () {
    $('#word-count').text(countWords());
  });
});


function countWords() {
    var contents = $("#editor").val();
    var wordCount = 0;
    if(!(contents === '')) {
        wordCount = jQuery.trim($("#editor").val()).replace(/\s+/g, " ").split(" ").length;
    }
    return wordCount;
}