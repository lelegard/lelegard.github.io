document.onreadystatechange = onReady;

function onReady() {
    if (document.readyState == 'complete') {
        generateImage();
    }
}

function changeText() {
    document.getElementById('message').innerHTML = prompt('Type a message (e.g. Carry On):');
    generateImage();
}

function generateImage() {
    document.getElementById('icon').setAttribute('crossorigin', 'anonymous');
    html2canvas(document.getElementById('poster'), {
        logging: true,
        allowTaint: true,
        useCORS: true})
        .then(
            function(canvas) {
                var data = canvas.toDataURL('image/png');
                var src = encodeURI(data);
                document.getElementById('image').src = src;
                document.getElementById('size').innerHTML = src.length + ' bytes';
            }
        );
}

function saveImage() {
    var a = document.createElement('a');
    a.href = document.getElementById('image').src;
    a.download = 'keep-calm.png';
    a.click();
}
