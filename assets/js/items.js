/* Player Display Elements */
const equipDisplay = document.getElementById('equipDisplay')
const equpimentButton = document.getElementById('equipmentButton')
const playerEquipment = document.getElementById('playerEquipment')

const inventoryButton = document.getElementById('inventoryButton')
const inventoryDisplay = document.getElementById('inventoryDisplay')

equpimentButton.addEventListener("click", function() {
    playerEquipment.style.display = 'block'
    inventoryDisplay.style.display = 'none'
    equpimentButton.style.backgroundColor = 'orangered'
    inventoryButton.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
})

inventoryButton.addEventListener("click", function() {
    playerEquipment.style.display = 'none'
    inventoryDisplay.style.display = 'block'
    inventoryButton.style.backgroundColor = 'orangered'
    equpimentButton.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'

})