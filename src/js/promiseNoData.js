import React, { Component } from 'react';

function PromiseNoData(promise, data, error) {
    if (promise === null || promise === undefined) {
        return ( <span>no data</span>)
    } else if (data === null || data === undefined) {
        return ( <img class="loadingSymbol" src="http://www.csc.kth.se/~cristi/loading.gif"/>)
    } else if (error != null /* && error !== undefined */) {
        return ( <span>{error}</span>)
    }
    return false;
}

export default PromiseNoData;