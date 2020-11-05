//1+2+3
let array=[]
  $('.generator').on('click', function() {
     let dataid=$(this).closest(".computer").data().id 
     console.log($(this).closest(".computer").find(".processor").attr('id'))
     console.log($(this).closest(".computer").find(".BUS").text())
  
    console.log(dataid);
     newobject={["cmp_id"]: dataid}
    array.push(newobject)
  console.log(array)
  })



//4
  
$('.validator').on('click', function() {
    console.log($(this).closest(".computer").find(".generator").text())
  
  })
  //5
$('.validator').on('click', function() {
    console.log($(this).closest(".computer").find(".MB").text())
  
  })

 //6  
$('.validator').on('click', function() {
    console.log($(this).closest(".computer").find(".QR").text())
  
  })