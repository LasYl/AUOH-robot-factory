const axios = require('axios');



axios.get('https://fanuc-robot-http-server.herokuapp.com/')
    .then((res) => {
        console.log(res)
        

const regexp ='Joint   ([0-9]).*/g';
    let joints = [];             
    let matches = res.data.matchAll(regexp);             
    let count = 0;             
    for (const match of matches) {                 
            count++;                 
            if (count > 6) break;                 
            const value = parseFloat(match[1]);                 
            joints.push(value);             
        } 
    
    }) 
           
    console.log(axios)
const main_loop = () => {
    setTimeout(() => {
        console.log(axios)
        main_loop();
    }, 10);
}

 
main_loop();