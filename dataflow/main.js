const posts = [
    {
        name: "kinan shakra",
        text: "Happy birthday !"
    },
    {
        name: "BFF friend",
        text: "Love you"
    },
    {
        name: "Dad",
        text: "Best wishes."
    }
]
const render = function () {
    $('#pepole').empty()
    for (let post of posts) {
        let postBox = $("<div class='post-box'><p class=name>" + post.name + "</p><p class=text>" + post.text + "</p></div>")
        $("#pepole").append(postBox)
    }
}


$("#btn").on("click", function () {
    let newName =  $("#name").val()
    let newWish =  $("#text").val()
    let newPost={name:newName,text:newWish}
    posts.push(newPost)
  
    render()
})