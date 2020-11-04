$("#items").on("click",".item", function(){
    const name =$(this).text()
    const data =$(this).data()
    if(data.instock==true){
        $("#cart").append(`<div class=cart-item>${name}</div>`)

        }   
    })