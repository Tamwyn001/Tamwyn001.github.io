function displayImage(image){
    let target_page = '';
    switch (image){
        case 'Drift':
            target_page = "../pages/art-drift.html";
            break;
        case '22Beach':
            target_page = "../pages/art-22beach.html";
            break;
        case 'Stray':
            target_page = "../pages/art-stray.html";
            break;
}
    
    // Set up the callback function to handle the response
    var xhr = new XMLHttpRequest();
            xhr.open('GET', target_page, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        window.open(target_page, "_self");
                    } else {
                        console.error('Error loading file:', xhr.statusText);
                    }
                }
            };
            xhr.send();
}

var imageshowed = false;

function ToggleDisplayImage (image){
    console.log('Image cliced')
    if (imageshowed)
    {
        document.getElementById('imageContent').innerHTML = '';
    }
    else
    {
    var xhr = new XMLHttpRequest();
            xhr.open('GET', "../pages/displayImage.html", true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        document.getElementById('imageContent').innerHTML = xhr.responseText;
                        displayImage(image);
                    } else {
                        console.error('Error loading file:', xhr.statusText);
                    }
                }
            };
            xhr.send();
    }
    if (imageshowed)
    {
        imageshowed = false;
    }
    else{
        imageshowed = true;
    };
}

console.log('DisplayImnge loaded');
     
