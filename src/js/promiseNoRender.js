import React from "react";
import "../css/App.css"

function promiseNoRender(promise, data, error) {
    console.log(data)
    if (promise === null || promise === undefined) {
        console.log("promise")
        return(<div></div>);
    } else if (data === null || data === undefined) {
        console.log("data")
        return ( <img class="loadingSymbol" src="http://www.csc.kth.se/~cristi/loading.gif"/>)
    } else if (error !== null) {
        console.log("error")
        return(<div></div>);
    } else if (data.error !== undefined){
        console.log("quota limit")
        return(<div className="quotaLimit">quota limit, try again!</div>);
    }
    console.log("data exists")
    return false;
}
export default promiseNoRender;