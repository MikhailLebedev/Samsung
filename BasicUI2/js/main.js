window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });
    
    
    var b1 = document.querySelector('#b1');
    var b2 = document.querySelector('#b2');
    b1.addEventListener("click", function() {
        var img = document.querySelector('#msu');
        img.style.display = (img.style.display === "block") ? "none" : "block";
    });
    b2.addEventListener("click", function() {
        var res = document.querySelector('#res');

        res.innerHTML = (res.innerHTML === "") ? String(screen.width) + ' ' + String(screen.height) : "";
    });
};