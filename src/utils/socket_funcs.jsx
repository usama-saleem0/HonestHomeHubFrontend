import SocketIOClient from 'socket.io-client';
import { socket } from '../config/apiHandle/apiHandle';
let id;


const connectSocket = () => {
    socket.on('connect', () => {

        id = socket.id
        console.log('Connected to server', socket?.id);
        
    });
}

const disconnectSocket = () => {
    socket.disconnect()
    console.log("disconnected");
}


export { connectSocket, disconnectSocket }