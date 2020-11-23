function notify(){
    span.innerText = 'eita'
    counter++
    var notifOptions = {
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Example Notification',
        message: 'This is a sample message'
    }
    chrome.notifications.create(`Example ${counter}`, notifOptions)
}
var counter = 0
var span = document.getElementById('version')
span.addEventListener('click', notify)
console.log('popup.js')


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    alert(request.message)
})