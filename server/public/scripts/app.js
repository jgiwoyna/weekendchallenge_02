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
  var i = 0;

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);

        //displayStudent(data, 0);
        appendStudent(data, i);
        clicked(data);
        setInterval(timer, 7000, data);

        function displayStudent(data, i){
          $(".person").fadeOut(3000, function(){
            $(this).remove();
            appendStudent(data, i);
          });
        }

        function appendStudent(data, i){
          $("#ajax-data").append('<div class="person"></div>');
          var $el = $('#ajax-data').children().last();
          $el.append('<h2>' + data.sigmanauts[i].name + '</h2>');
          $el.append('<p>' + "GitHub Username: " + data.sigmanauts[i].git_username + '</p>');
          $el.append('<p>' + "Shoutout: " + data.sigmanauts[i].shoutout + '</p>');
          $("#td" + i).css("background-color", "#fff" );
      }

          //create listener for next button
          function clicked(test) {
          $("#next-person").on("click", function(event) {
              i++;
            if(i === 19){
              i = 0;
            }
            // $(".person").fadeOut(5000, function(){console.log(this)});
            $("#td").css("background", "none");
            displayStudent(test, i);
          });
          //
          //
          // //create listener for previous button
          $("#previous-person").on("click", function(event) {
              i--;
            if(i === -1){
              i = 18;
            }
            // $("#ajax-data").empty();
            $("#td").css("background", "none");
            displayStudent(test, i);
          })
          };
          function timer(test){
            i++;
          if(i === 19){
            i = 0;
          }
          
          //$("#ajax-data").empty();
          $("#td").css("background", "none");
          displayStudent(test, i);
          }











      }
    });

});
