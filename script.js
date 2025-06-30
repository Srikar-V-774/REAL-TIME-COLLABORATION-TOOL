const editor = document.getElementById('editor');
const socket = new WebSocket(`ws://${location.host}`);
let isRemoteUpdate = false;
editor.addEventListener('input', () => {
  if (!isRemoteUpdate) {
    socket.send(editor.value);
  }
});
socket.onmessage = (event) => {
  if (editor.value !== event.data) {
    isRemoteUpdate = true;
    editor.value = event.data;
    isRemoteUpdate = false;
  }
};
socket.addEventListener('open', () => {
  console.log("Connected to WebSocket server");
});

socket.addEventListener('error', (error) => {
  console.error("WebSocket error:", error);
});

