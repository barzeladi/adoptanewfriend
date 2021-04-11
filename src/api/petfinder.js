import axios from 'axios';

const fetcher = axios.create({baseURL: 'https://api.petfinder.com'});



const getAccessToken = async () => {
    const {data} = await fetcher.get('/v2/oauth2/token?grant_type=client_credentials&client_id=4z19ypRMEikztda1tJYoCyfKQzMsxr2kXTRgnScCNH3ibXRkzs&client_secret=ZSX6pz56zQwEnD2XBzvdkp9dpbk1ccWy1K1OrwQh');
    return data.access_token;
}

// const getAnimals = async () => {
    // const {data} = await axios.get(`https://api.edamam.com/search?app_id=${keys.appId}&app_key=${keys.appKey}&from=${from}&to=${to}&q=${query}`);

    // curl -H "Authorization: Bearer {YOUR_ACCESS_TOKEN}" GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
    const getAnimals = async () => {
        const accessToken = await getAccessToken();
        const requestString = `/v2/animals/app_id=4z19ypRMEikztda1tJYoCyfKQzMsxr2kXTRgnScCNH3ibXRkzs&app_key=ZSX6pz56zQwEnD2XBzvdkp9dpbk1ccWy1K1OrwQh`;
        const response = await fetcher.get(requestString, {
            headers: { 'Authorization': `Bearer ${accessToken}` } 
        });
        return response.data;
  }
  console.log(getAnimals())
    // const {tokendata} = await axios.request({
    //   url: "/v2/oauth2/token",
    //   method: "post",
    //   baseURL: keys.baseURL,
    //   auth: {
    //     username: keys.appId, // This is the client_id
    //     password: keys.appKey // This is the client_secret
    //   },
    //   data: {
    //     "grant_type": "client_credentials"
    //   }
    // }).then(respose => {
    //   console.log(respose);  
    // }); 

    // const instance = axios.create({
    //     baseURL: keys.baseURL,
    //     headers: {
    //       Authorization: "Bearer " + { tokendata.accessToken },
    //     },
    //   });



//    curl -H "Authorization: Bearer {YOUR_ACCESS_TOKEN}"
 // GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}



    // return data.hits.map(({recipe: {label, url, image, ingredientLines, calories, totalTime}}) => ({
    //     label, 
    //     url, 
    //     image, 
    //     ingredientLines, 
    //     calories, 
    //     totalTime
    // }));

// }

const getAnimal = async id => {
    //...
}

export {
    getAnimals,
    // getAnimal
};