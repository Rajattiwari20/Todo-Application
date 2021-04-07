const express = require('express');
const app = express();
const port = 8000;






app.listen(port , function(err){
    if(err){
        console.log(`Error Express Server : ${err}`);
        return;
    }

    console.log(`Express server is up and running on port ${port}`);
});