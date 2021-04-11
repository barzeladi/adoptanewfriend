const getAnimals = async () => {

    // Client credentials
    // Replace these with your key/secret
    var key = '4z19ypRMEikztda1tJYoCyfKQzMsxr2kXTRgnScCNH3ibXRkzs';
    var secret = 'ZSX6pz56zQwEnD2XBzvdkp9dpbk1ccWy1K1OrwQh';

    // Call details
    //var org = 'RI77';
    var status = 'adoptable';

    // Call the API
    // This is a POST request, because we need the API to generate a new token for us
    return new Promise( (resolve,reject) => {

      const res =  fetch('https://api.petfinder.com/v2/oauth2/token', {
    //return fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (resp) {

        // Return the response as JSON
        return resp.json();

    }).then(function (data) {

        // Log the API data
        console.log('token', data);

        // Return a second API call
        // This one uses the token we received for authentication
        // return fetch('https://api.petfinder.com/v2/animals?organization=' + org + '&status=' + status, {
        return fetch('https://api.petfinder.com/v2/animals?status=' + status + '&limit=50&page=50', {
            headers: {
                'Authorization': data.token_type + ' ' + data.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

    }).then(function (resp) {

        // Return the API response as JSON
        return resp.json();

    }).then(function (data) {

        // Log the pet data
        console.log('pets', data);
        return data;

    }).catch(function (err) {

        // Log any errors
        console.log('something went wrong', err);

    })
resolve(res);

})
    


}



export {
    getAnimals,
    // getAnimal
};