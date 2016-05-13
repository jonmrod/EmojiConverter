$(document).ready(
  function() {    
  	//when key is pressed
  	$('#emoji').keyup(function() {
    //set variable to be used
    var string = $('#emoji').val();
    //split after every space
    var emojiArray = string.split(" ");
    //loop through letters
    $('.em').remove();
    $('#words').html("");
    //make array for words that are not emojis
    var nonEmojis = [emojiArray.length];
    //go through each letter/word
    for (var i = 0; i < emojiArray.length; i++) {
        //check if theres a word for the emoji
        var emoji = ShowMeAEmoji(emojiArray[i]);
        //if it exists
        if (emoji != 'notEmoji' && emoji != ' ') {
          var newDiv = " <i class='em em-" + emoji + "'></i> ";
          $('#words').append(newDiv);
        //if not
      } else if (emoji === 'notEmoji') {
        $('#words').append(" " + emojiArray[i] + " ");
      }

    }
    //main function
    //see if emoji in the objects
    function ShowMeAEmoji(word) {
      //go through all the objects
      for (var emoji in allEmojis) {
            //if theres a match
            var words = allEmojis[emoji].keywords;
            if (emoji == word ||
              (words && words.indexOf(word) >= 0))
                //return the word
              return emoji;
            }
            return 'notEmoji';
          }
  });
});

