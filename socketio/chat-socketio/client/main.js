const socket = io();
io.connect('http://192.168.1.34:6677', {'forceNew':true});

socket.on('messages', (data) => {
    console.log(data);
    render(data);
});

//Para mostrar los mensajes en el html
function render(data) {
    let html = data.map((message, index) => {
        return (`
            <div class="message">
                <strong class="verde">${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `);
    }).join(' ');

    let div_messages = document.getElementById('messages');

    //Le inyecto al div del index.html
    div_messages.innerHTML = html;
    div_messages.scrollTop = div_messages.scrollHeight;
}

//Esto lo paso directamente del formulario al hacer click en enviar
function addMessage(event) {
    
    //Construyo el mensaje
    let message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value,
    };

    //Cambio los valores de ciertos elementos
    let nickNick = document.getElementById('nickname');
    nickNick.style.display = 'none';

    let nickLabel = document.getElementById('nickLabel');
    nickLabel.textContent = `nickname: ${message.nickname}`;
    nickLabel.style.color = '#157719';
    nickLabel.style.fontSize = '20px';

    //Se emite el mensaje
    socket.emit('add-message', message);

    //Vacío el textarea de los mensajes
    document.getElementById('text').value = '';
    return false;
}
