const biodata ={
    name:"Aman",
    age:20,
    work:"Coding",
};
// console.log(biodata.work);

const jsondata=JSON.stringify(biodata);   // convert object to json
// console.log(jsondata);   // {"name":"Aman","age":20,"work":"Coding"}
// console.log(jsondata.name);

// const objdata=JSON.parse(jsondata);  // convert json to object
// console.log(objdata);  // { name: 'Aman', age: 20, work: 'Coding' }

const fs=require("fs");
fs.writeFile("json1.json",jsondata,(err)=>{
    console.log("done");
});

fs.readFile("json1.json",("utf-8"),(err,data)=>{
    console.log(data);
})
