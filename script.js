
let i = 0;

fb.ref("posts/").once('value').then(data => {
    let savedPosts = data.val();
    console.log(savedPosts);
    if ( savedPosts !== null ) {
    savedPosts.forEach((post) =>    {
    $(".post_header").append("<h4>" + post["title"] + "</h4>")
    $(".post_header").append("<p>" + post["text"] + "</p>") 
    
    }) }  
});



let textTitle =  $("button").on("click", (event) => {
    event.preventDefault();
    $(".post_header").append("<h4>" +  $(".inputTitle").val() + "</h4>") 
});

let textContent =  $("button").on("click", (event) => {
    event.preventDefault();
    $(".post_header").append("<p>" + $(".inputText").val() + "</p>") 
});



$(".divBody").append(textTitle + textContent);


$("button").on("click", (event) => {
   let blogpost =  {
      title: $(".inputTitle").val(),
      text: $(".inputText").val()
  };
  let path = "posts/" + i++;
  fb.ref(path).set(blogpost);
})