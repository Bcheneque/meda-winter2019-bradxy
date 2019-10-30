try {
    someFunction();
} catch (error) {

    try{
        someOtherFunction();
    } catch (error) {
        console.log("The error" + error.name + "has the following to say:" + error.message);
    }
     
}

console.log("Your program has succesfully completed");