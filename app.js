// Get the form element
const form = document.querySelector('#todo-form');

// Get the input element
const input = document.querySelector('#todo-input');

// Get the list element
const list = document.querySelector('#todo-list');

// Add event listener to the form submit event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the value from the input field
    const todoText = input.value;

    // Create a new list item element
    const listItem = document.createElement('li');

    // Create a checkbox element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style.margin = "20pt";

    // Add event listener to toggle checkbox state on Enter key press
    checkbox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            checkbox.checked = !checkbox.checked;
        }
    });

    // Append the checkbox to the list item
    listItem.appendChild(checkbox);

    // Create a text node with the todo text
    const todoTextNode = document.createTextNode(todoText);

    // Append the text node to the list item
    listItem.appendChild(todoTextNode);

    // Append the new list item to the list
    list.appendChild(listItem);

    // Clear the input field
    input.value = '';
});

// Set focus to the input field on page load
window.addEventListener('load', function() {
    input.focus();
});
