function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200 && xhr.responseText === 'success') {
            clearPageAndShowTextBoxes();
        } else {
            alert('Incorrect username or password.');
        }
    };
    xhr.send('username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
}

function clearPageAndShowTextBoxes() {
    document.body.innerHTML = ''; // Clear the page

    // Create container
    var container = document.createElement('div');
    container.className = 'container';

    // Add first text box and button
    var input1 = document.createElement('input');
    input1.type = 'text';
    var addButton1 = document.createElement('button');
    addButton1.innerHTML = 'Add';
    addButton1.onclick = function() { alert('Add clicked'); };
    container.appendChild(input1);
    container.appendChild(addButton1);

    // Add a line break for better layout
    container.appendChild(document.createElement('br'));

    // Add second text box and button
    var input2 = document.createElement('input');
    input2.type = 'text';
    var removeButton = document.createElement('button');
    removeButton.innerHTML = 'Remove';
    removeButton.onclick = function() { alert('Remove clicked'); };
    container.appendChild(input2);
    container.appendChild(removeButton);

    document.body.appendChild(container); // Add the container to the body
}
