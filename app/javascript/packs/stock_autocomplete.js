$(function() {
      $("#stock-autocomplete").autocomplete()
      {
         searchStock()
      }
})

function searchStock() 
{
      $.ajax
      ({
            type: 'GET',
            url: "https://cloud.iexapis.com/",
            success: function(result) {
                  console.log(result);
            },
            error: function(error) {
                  console.log(error);
            }
      })
      
}


