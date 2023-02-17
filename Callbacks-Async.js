/**
 * Asynchronous Functions / Callbacks
 * Callbacks are often used with asynchronous functions
 */


//my callback is passed as an argument in timeout inbuilt function
setTimeout(myCallBack, 3000);
// myCallBack function dedclared 
function myCallBack(){
    console.log("Print after 3 seconds")
}


//Instead of passing the name of the function as an  argument. pass declare the whole function as an argument
setTimeout((function myCallBackDeclared(){
    console.log("Declared function instead of passing its name as agrument");
}),0); 



/**
 * setInterval()
 * >>Specifies the call back function to be executed for each interval
 */

setInterval(myIntervals,1000);
function myIntervals(){
    let d = new Date();
    //console.log
    document.getElementById("demo").innerHTML = (
                d.getHours()+":"+
                d.getMinutes()+":"+
                d.getSeconds()
                );
}

setInterval((function myIntDeclared(){
       let d = new Date();
       document.getElementById("time-demo").innerHTML = (
            d.getHours() +":"+
            d.getMinutes() +":"+
            d.getSeconds()
       ); 
    }),1000)


    // setTimeout
setTimeout(()=>{
    console.log('Print after 1 second');
},6000);


// nested setTimeouts
// outer function has precedence to execute over the inner function
//PS: delay on the first / outer callback does not affect the order of execution, the inner callback will only execute after the outer  
setTimeout(()=>{
    console.log('3');
    setTimeout(()=>{
        console.log('2');
        setTimeout(()=>{
            console.log('1');
        },1000)
    },2000)
},4000);


// button event handler in browwser JavaScript
//note how after listening to an event, a call back function is passed to trigger action
let btn;
btn.addEventListener('click',()=>{
    window.alert('Button Clicked');
});


/**
 * error first callback
 * reading a file using the fs module required and imported
 * {encoding:'utf-8'}-->>enables display of document content using 'utf-8', otherwise it would display buffered code
 * call back function requires both parameters (error, data) to read. They are inbuilt JS objects / methods or functions
 */
fs.readFile('./assets/test.txt', {encoding:'utf-8'},(error, data)=>{
    if(error){
        console.error('ERROR');
        console.error('error')
    }else{
        console.error("File contents begin...")
        console.log(data);
        console.error(`...end of file`);
    }
})

