document.addEventListener("turbolinks:load", function() {
  $input = $('*[data-behavior="autocomplete"]')

$(function() {
      $("#stock-autocomplete").autocomplete({
            source: function (request, response) {

                   $.ajax
                  ({
                        type: 'GET',
                        url: "https://cloud.iexapis.com/v1",
                        success: function(data) {  
                              console.log("Success");
                              
                        },
                        error: function(error) {
                              console.log(error);
                        }
                  })
            
      }
      })
      minLength: 1
})
function ac(value) {
      document.getElementById('stock-autocomplete').innerHTML = '';
      l=value.length;
       
      for (var i = 0; i<n; i++) {
       if(((stock-autocomplete[i].toUpperCase()).indexOf(value.toUpperCase()))>-1)
       {
           var node = document.createElement("option");
           var val = document.createTextNode(stock-autocomplete[i]);
            node.appendChild(val);

            document.getElementById("stock-autocomplete").appendChild(node);
                 
           }
       }
   }
})

