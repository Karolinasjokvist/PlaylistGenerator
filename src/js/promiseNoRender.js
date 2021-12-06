import React from "react";

function promiseNoRender(promise, data, error) {
    console.log(data)
    if (promise === null || promise === undefined) {
        console.log("promise")
        return(<div></div>);
    } else if (data === null || data === undefined) {
        console.log("data")
        return(<div></div>);
    } else if (error !== null) {
        console.log("error")
        return(<div></div>);
    } else if (data.error !== undefined){
        console.log("quota limit")
        return(<div></div>);
    }
    console.log("data exists")
    return false;
}
export default promiseNoRender;