// On the DOM should be:
//
// One person's information
// A series of 22 (or the number of people in the data array) index points with the first
// person's index highlighted or called out in style differently than the others.
// A 'Next' button and a 'Previous' button
// Clicking on the Next button should navigate to the next person,
// clicking on the Previous button should navigate to the previous person.
// The highlighted index point should update also as you click through to other people.
// Person Display
//
// When a person is displayed, show their name, their Github link,
// and their piece of shoutout feedback. Only one person should be showcased at any given time.


$(document).ready(function(){
  $('#load-data').on("click", loadData);
  var sigmanauts = {};


  function loadData() {
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        sigmanauts = data;
        for (var i = 0; i < data.sigmanauts.length; i++) {
          $("#ajax-data").append('<div class="person"></div>');
          var $el = $('#ajax-data').children().last();
          $el.append('<h2>' + data.sigmanauts[i].name + '</h2>');
          $el.append('<p>' + data.sigmanauts[i].git_username + '</p>');
          $el.append('<p>' + data.sigmanauts[i].shoutout + '</p>');






        }
      }
    });
  }
});
