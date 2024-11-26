const address = "111 Wellington St, Ottawa, ON K1A 0A9, Canada";
const googlekey = "AIzaSyAhDBHpKVUinQFvVwUY9QZ3-qJxqllaOio";

fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googlekey}`)

.then((responseText) => {
    return responseText.json();
})
.then(jsonData => {
    console.log(jsonData);
})
.catch(error => {
    console.log(error);

})

