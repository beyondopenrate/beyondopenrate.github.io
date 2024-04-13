document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission
    var email = document.getElementById('email').value;

    // Setup the data to be sent to Klaviyo
    var data = {
        token: "RswM9d",
        properties: {
            $email: email,
        }
    };
    console.log(email)
    // Send data to Klaviyo
    fetch('https://a.klaviyo.com/api/identify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Vary': 'origin'

        },
        body: JSON.stringify(data)
    }).then(response => response.json()).then(data => {
        console.log('Success:', data);
        alert("Thank you for subscribing!");
    }).catch((error) => {
        console.error('Error:', error);
    });
});
