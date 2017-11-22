(function() {
    const Carrousel = {
        selectPhoto: function() {
            let thumb = this.querySelector("img");
            let imgSelected = document.querySelector(".carrousel_selected img");
            imgSelected.setAttribute("src", thumb.src.replace("thumb", "pic"));
        }
    };
    
    const items = document.querySelectorAll('.carrousel_item');
    items.forEach(function(item) {
        console.log(item);
        item.addEventListener("click", Carrousel.selectPhoto.bind(item));
    });
})(); 
    
    
    