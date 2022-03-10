import getData from "./app.js";

(async () =>{
    let data = await getData(1);
    console.log(data);
})();
