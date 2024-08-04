function filterPage(page) {    
    let filePath = '';
    switch(page) {
        case 'Home':
            filePath = '../pages/home.html';
            break;
        case 'Art':
            filePath = '../pages/art.html';
            break;
        case 'Contact':
            filePath = '../pages/contact.html';
            break; 
        case 'Music':
            filePath = '../pages/music.html';
            break;
        case 'Art.Stray':
            filePath = '../pages/art-stray.html';
            break;
        case 'Art.22Beach':
            filePath = '../pages/art-22beach.html';
            break;
    }
    console.log(filePath);

    // Set up the callback function to handle the response
    var xhr = new XMLHttpRequest();
            xhr.open('GET', filePath, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        document.getElementById('contentDiv').innerHTML = xhr.responseText;
                    } else {
                        console.error('Error loading file:', xhr.statusText);
                    }
                }
            };
            xhr.send();
}

// Load the Home page by default
filterPage('Art.22Beach'); 

