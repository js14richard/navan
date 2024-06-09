

function sendMessageToParent(eventName) {
    window.parent.postMessage(eventName, '*');
}

window.addEventListener('message', function(event) {

    /* Ensures that request is comming from the same origin */
    /* Disable this condition if testing in local  */

    if (event.origin !== window.location.origin) {
        console.error("Post message is received from different origin")
        return;
    }

    if (event.data === 'closeChat') {
        closeChat();
    }

    if (event.data === 'openChat') {
        openChat();
    }
    
});



var closeChat = () => {
    var chatWidthLabelIframe = document.getElementsByClassName('chat-widget-label-iframe')[0];
    chatWidthLabelIframe.style.display = 'none';
}

var openChat = () => {
    var chatWidthLabelIframe = document.getElementsByClassName('chat-widget-label-iframe')[0];
    chatWidthLabelIframe.style.display = 'block';
}




