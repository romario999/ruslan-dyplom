let button = document.getElementsByClassName("btn-buy-card");

for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
    document.getElementById("my-modal").classList.add("open");  
    });
}

document.getElementById("close-btn").addEventListener("click", function(){
    document.getElementById("my-modal").classList.remove("open");
})


AOS.init();