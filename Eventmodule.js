const EventEmitter=require ("events");
const event=new EventEmitter();


// function without argument

event.on("sayMyname",()=>{
    console.log("Your name is Aman");
});
event.on("sayMyname",()=>{
    console.log("Your name is Kesharwani");
});
event.on("sayMyname",()=>{
    console.log("Your name is Rama Ram Ram");
});
event.emit("sayMyname");




// function with argument

event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc} and page is ${msg}`);
});
event.emit("checkpage",200,"ok");