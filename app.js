// Get html elements
const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

// Set focus to the input field on page load
window.addEventListener('load', function() {
    input.focus();
});

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault()

    // Get the value from the input field
    const todoText = input.value;

    // Create a new list item element
    const listItem = document.createElement('div');
    listItem.style.listStyle = "none";
    listItem.style.fontSize = "20pt";
    listItem.style.color = "white";

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.margin = "20pt";

    // Create the text's div
    const textDiv = document.createElement('div');
    textDiv.textContent = todoText;
    textDiv.style.display = "inline-block";
    textDiv.style.textDecoration = "none";


    // Append the checkbox and the text to the listItem
    listItem.appendChild(checkbox);
    listItem.appendChild(textDiv);

    // Add event listener to toggle checkbox state on press key
    checkbox.addEventListener('change', function(event) {
        if (this.checked)
            this.nextElementSibling.style.textDecoration = "line-through 3pt";
        else
            this.nextElementSibling.style.textDecoration = "none";
    });

    // Add event listener to toggle checkbox state on Enter key press
    checkbox.addEventListener('keypress', function(event) {
        
        if (event.key === "Enter"){
        this.checked = !this.checked;
        if (this.checked)
            this.nextElementSibling.style.textDecoration = "line-through 3pt";
        else
            this.nextElementSibling.style.textDecoration = "none";
        }
    });

    // Append the new list item to the list
    list.appendChild(listItem);

    // Clear the input field
    input.value = '';
});

