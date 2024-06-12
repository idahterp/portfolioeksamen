window.addEventListener("load", function() {
    // Funktion til at åbne navigationen
    function openNav() {
        document.getElementById("myNav").style.width = "25%";
    }

    // Funktion til at lukke navigationen
    function closeNav() {
        document.getElementById("myNav").style.width = "0";
    }

    // Tilføj event listener til knappen
    document.getElementById("openNavBtn").addEventListener("click", openNav);

    // Hvis du har en luk-knap, kan du tilføje en event listener til den også
    document.querySelector(".closebtn").addEventListener("click", closeNav);
});