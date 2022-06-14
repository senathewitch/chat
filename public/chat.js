const socket = io.connect('http://localhost:5000');

const sender = document.getElementById('sender');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');
const feed = document.getElementById('feed');

submitButton.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        sender: sender.value,
    })
})

socket.on('chat', data => {
    feed.innerHTML = '';
    output.innerHTML +='<p>' + data.sender + data.message;
    message.value = '';
})

message.addEventListener('keypress', ()=> {
    socket.emit('typing', sender.value)
})

socket.on('typing', data => {
    feed.innerHTML = '<p>' + data + 'typing...</p>'
})