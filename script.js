document.getElementById("button1").addEventListener("click", function(){
    console.log("button1 clicked")
    fetch("https://Test-server.drasiw.repl.co")
            .then(x => {
                 console.log(x);
            });
});