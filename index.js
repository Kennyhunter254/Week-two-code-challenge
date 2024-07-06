document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const clearButton = document.getElementById('clearButton');
    const shoppingList = document.getElementById('shoppingList');
    let itemsArray = [];

    // Function to render the list
    function renderList() {
        shoppingList.innerHTML = '';
        itemsArray.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.text;
            li.className = item.purchased ? 'purchased' : '';
            li.addEventListener('click', () => {
                itemsArray[index].purchased = !itemsArray[index].purchased;
                renderList();
            });
            shoppingList.appendChild(li);
        });
    }

    // Add item event
    addButton.addEventListener('click', () => {
        const newItemText = itemInput.value.trim();
        if (newItemText) {
            itemsArray.push({ text: newItemText, purchased: false });
            itemInput.value = '';
            renderList();
        }
    });

    // Clear list event
    clearButton.addEventListener('click', () => {
        itemsArray = [];
        renderList();
    });
});