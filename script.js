


let textTitle =  $("button").on("click", (event) => {
    event.preventDefault();
    $(".post_header").append("<h4>" + $(".inputTitle").val() + "</h4>") });

let textContent =  $("button").on("click", (event) => {
    event.preventDefault();
    $(".post_header").append("<p>" + $(".inputText").val() + "</p>") });



  $(".divBody").append(textTitle + textContent);


let initialData = [
    {
      title: "First Post",
      text: "Text of the first one"
    },
    
  ];



  $("button").on("click", (event) => {
  initialData.push(
      {
      title: $(".inputTitle").val(),
      text: $(".inputText").val()
  });
  })


 
