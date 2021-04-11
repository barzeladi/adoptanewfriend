const getAnimals = async () => {

    // Client credentials
    // Replace these with your key/secret
    var key = '4z19ypRMEikztda1tJYoCyfKQzMsxr2kXTRgnScCNH3ibXRkzs';
    var secret = 'ZSX6pz56zQwEnD2XBzvdkp9dpbk1ccWy1K1OrwQh';

    // Call details
    //var org = 'RI77';
    var status = 'adoptable';
    const mytoken =  await fetch('https://api.petfinder.com/v2/oauth2/token', {
        method: 'POST',
        body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

        return  await fetch('https://api.petfinder.com/v2/animals?status=' + status + '&limit=50&page=50', {
            mode: 'no-cors',
            headers: {
                'Authorization': mytoken.token_type + ' ' + mytoken.access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });


}



export {
    getAnimals,
    // getAnimal
};