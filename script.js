/* ==================================================
   FUNCTION: upDate
   Runs when the mouse hovers over a thumbnail.
   ================================================== */
function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    var imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* ==================================================
   FUNCTION: undo
   Runs when the mouse leaves a thumbnail.
   ================================================== */
function undo() {
    console.log("Mouse left — resetting preview");

    var imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

/* ==================================================
   ATTACH EVENT LISTENERS
   ================================================== */
var previews = document.querySelectorAll('.preview');

previews.forEach(function(preview) {
    preview.addEventListener('mouseover', function() {
        upDate(preview);
    });
    preview.addEventListener('mouseleave', undo);
});

console.log("Gallery loaded. " + previews.length + " thumbnails found.");