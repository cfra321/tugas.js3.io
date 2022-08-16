function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);

}

function dragging(event) {
    document.getElementById("object_text").innerHTML = "Element Sedang Di Drag";

}

function allowDrop(event) {
    event.preventDefault();
   
}

function drop(event) {
    event.preventDefault;
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("object_text").innerHTML="Element Sudah Di Drop";
    
}