chrome.tabs.onActivated.addListener(tab=>{
    chrome.tabs.get(tab.tabId, current_tab_info => {
        console.log(current_tab_info.url)
        chrome.tabs.sendMessage(tab.tabId, {message: 'Hello'})
    })
})
var counter = 0
chrome.webNavigation.onCompleted.addListener(function({tabid, url}) {
    //alert("This is my favorite website!");
    counter++
    console.log('listener called' + url)
    var notifOptions = {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Example Notification',
        message: `This is a sample message ${url}`
    }
    chrome.notifications.create(`Example Back ${counter}`, notifOptions)
})//}, {url: [{urlMatches : 'https://www.google.com/'}]});

chrome.notifications.onClicked.addListener(function (){
    chrome.tabs.create({url: "http://www.google.com"});
})
