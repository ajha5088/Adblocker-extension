chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        return {cancel: true}
    },
    {urls:["*://*.zedo.com/*"]},
    ["blocking"]
)

//We can add the list of sites we want to block,store inside an array, and pass the array in urls. 

// Go to chrome extensions
// Make developer mode on
// Go to load unpacked
// Go to the ad-blocker folder
//Select the folder and then it will load up in chrome extensions
// toggle the extension button to on.

