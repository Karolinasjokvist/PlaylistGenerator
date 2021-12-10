import React from "react";

function playlistNotDone(array, index) {
    if (array[index] === null || array[index] === undefined) {
        console.log("loading")
        return (noData())
    }
    console.log("data exists")
    return false;
}

function noData() {
    return (
        <div className="noData">
            Error
            <div className="noDataItem">
                <div className="retryButton" onClick={e => window.location.hash = "#generateArtists"}>Retry</div>
            </div>
        </div >
    )
}

export default playlistNotDone;