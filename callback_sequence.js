/*
    Create a JavaScript program that:
    1. Displays "Download Started..."
    2. After 3 seconds displays "Downloading..."
    3. After another 2 seconds displays "Download Completed!"
    4. Uses callback functions to control the sequence of execution.
*/

/*
    callback_sequence.js
    Demonstration of Callback Functions
*/

function startDownload(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000);
}

function downloading(callback) {
    console.log("Downloading...");

    setTimeout(() => {
        callback();
    }, 2000);
}

startDownload(function () {
    downloading(function () {
        console.log("Download Completed!");
    });
});