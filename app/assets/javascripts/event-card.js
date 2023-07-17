document.addEventListener('DOMContentLoaded', function() {
    var registerButton = document.getElementById('registerButton');
    
    registerButton.addEventListener('click', function(event) {
      event.preventDefault();
      fetch("/")
      
      var eventId = registerButton.getAttribute('data-event-id');
      var url = '/register'
      
      fetch(url, {
        method: 'POST',
        headers: {},
        body: 'eventId=' + encodeURIComponent(eventId)
      })
      .then(function(response) {
        if (response.ok) {
          return response.text();
        }
        throw new Error('Request failed!')
      })
      .then(function(data) {
        console.log(data)
      })
      .catch(function(error) {
        console.log(error)
      });
    });
  });
  