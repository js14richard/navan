
/*
    Close the chat label when close button is clicked
*/

var closeChat = () => {
    console.log("close chat callled")
    var chatWidthLabelIframe = document.getElementsByClassName('chat-widget-label-iframe')[0];
    chatWidthLabelIframe.style.display = 'none';
}

function sendMessageToParent(eventName) {
    console.log("sendmessage called", eventName);
    window.parent.postMessage(eventName, '*');
}

window.addEventListener('message', function(event) {
    console.log("received a message", event);
    if (event.origin && event.origin !== window.location.origin) {
        console.log("Event origin:", event.origin);
        console.log("Window origin:", window.location.origin);
        console.log("origin check");
        return;
    }

    if (event.data === 'closeChat') {
        console.log("request for closing chat");
        closeChat();
    }
});

