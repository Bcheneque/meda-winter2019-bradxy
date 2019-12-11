//async function firstAsync() {
 //   return 27;
//}

//firstAsync().then((results) => {
 //   console.log(results);
//});
let updateThis = 0;

async function firstAsync() {
    let action = new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve("Value to send to the Promise so it completes."); 
        }, 3000);
    });

    console.log(updateThis);
    updateThis = 1;
    console.log(updateThis);
     let result = await action;

     updatethis = result;
     console.log(updateThis);

    console.log(result);

    return updateThis;
}

let something = firstAsync();

console.log(something);

 console.log("I will run afetr the firstAsync function.");
