// Write your code here!
const removeMain = document.getElementById('main');
removeMain.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Newton is the champion";
newHeader.className = "victorious";