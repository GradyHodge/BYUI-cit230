const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('fullDate').textContent = new Date().toLocaleDateString('en-US', options);

document.getElementById('time').textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

document.getElementById('updateYear').textContent = new Date().getFullYear();
