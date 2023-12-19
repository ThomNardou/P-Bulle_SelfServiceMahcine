import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";

var doc = new jsPDF();

let button = document.getElementById("downloadPDF");
button.addEventListener('click', function () {
    alert("coucou")
    doc.fromHTML(document.getElementById(divId).innerHTML);
    doc.save('div.pdf');
});