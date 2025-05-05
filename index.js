const bar = document.getElementById("bars-3");
const barIcon = document.getElementById("bars-icon");
const closeIcon = document.getElementById("close-icon");
const HCISC =document.getElementById("HCISC");
bar.addEventListener("click", function() {
    HCISC.classList.toggle("active");
if (HCISC.classList.contains("active")) {
    barIcon.style.display = "none";
    closeIcon.style.display ="block";
}
else {
    barIcon.style.display = "block";
    closeIcon.style.display ="none";
}
});