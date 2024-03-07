
const playerList = [];

function addPlayer() {
    const newPlayerInput = document.querySelector('.newPlayerName');
    const newPlayerName = newPlayerInput.value.trim();
    if (newPlayerName !== '') {
        playerList.push({ name: newPlayerName });
        updatePlayerNames();
        updatePlayerDropdown();
        newPlayerInput.value = '';
    } else {
        alert('Please enter a valid player name.');
    }
}

function updatePlayerNames() {
    const playerNameContainer = document.querySelector('.playerName');
    playerNameContainer.innerHTML = '';
    playerList.forEach(player => {
        const playerNameDiv = document.createElement('div');
        playerNameDiv.textContent = player.name;
        playerNameContainer.appendChild(playerNameDiv);
    });
}

function updatePlayerDropdown() {
    const playerDropdown = document.getElementById('playerDropdown');
    playerDropdown.innerHTML = ''; 
    playerList.forEach(player => {
        const option = document.createElement('option');
        option.text = player.name;
        option.value = player.name;
        playerDropdown.appendChild(option);
    })
}