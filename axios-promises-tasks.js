const axios = require('axios')

// Task 10 

// axios.get('http://localhost:5000/', {})
//     .then((response) => {
//         console.log(response.data);
//     }, (error) => {
//         console.log(error);
//     });

// Task 11 

// axios.get('http://localhost:5000/isbn/1', {})
//     .then((response) => {
//         console.log(response.data);
//     }, (error) => {
//         console.log(error);
//     });


// Task 12

// axios.get('http://localhost:5000/author/Unknown', {})
//     .then((response) => {
//         console.log(response.data);
//     }, (error) => {
//         console.log(error);
//     });


// Task 13

axios.get('http://localhost:5000/title/Fairy tales', {})
    .then((response) => {
        console.log(response.data);
    }, (error) => {
        console.log(error);
    });