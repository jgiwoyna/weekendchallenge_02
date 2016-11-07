$(document).ready(function(){
  var i = 0;

    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);

        appendStudent(data, i);
        clicked(data);
        setInterval(timer, 10000, data);

        function displayStudent(data, i){
          $(".person").fadeOut(3000, function(){
            $(this).remove();
            appendStudent(data, i);
          });
        }

        function appendStudent(data, i){
          $("#ajax-data").append('<div class="person"></div>');
          var $el = $('#ajax-data').children().last();
          $el.append('<h2><i>' + data.sigmanauts[i].name + '</i></h2>');
          $el.append('<h3>' + "<img src='https://github.com/favicon.ico'>" + ": " + data.sigmanauts[i].git_username + '</h3>');
          $el.append('<p>' + "<b>Shoutout: </b>" + data.sigmanauts[i].shoutout + '</p>');
          $("#td" + i).css("background-color", "#fff" );
      }


          function clicked(test) {
          $("#next-person").on("click", function(event) {
              i++;
            if(i === 19){
              i = 0;
            }
            $("#td").css("background", "none");
            displayStudent(test, i);
          });

          $("#previous-person").on("click", function(event) {
              i--;
            if(i === -1){
              i = 18;
            }
            $("#td").css("background", "none");
            displayStudent(test, i);
          })
          };
          function timer(test){
            i++;
          if(i === 19){
            i = 0;
          }
          $("#td").css("background", "none");
          displayStudent(test, i);
        }
      }
    });

});
