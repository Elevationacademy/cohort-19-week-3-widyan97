$("#btn").on("click", function(){
    const human = $('#inp').val()
    $('#inp').val('')
    $('#human-list').append(`<li>${human}</li>`)

  })