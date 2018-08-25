


let textTitle =  $("button").on("click", (event) => {
    event.preventDefault();
    $(".post_header").append("<h4>" + $(".inputTitle").val() + "</h4>") });

let textContent =  $("button").on("click", (event) => {
    event.preventDefault();
    $(".post_header").append("<p>" + $(".inputText").val() + "</p>") });



  $(".divBody").append(textTitle + textContent);


  let path = "posts/1";
  let initialData = {
    title: "My first saved blog post",
    text: "Some hilarious content, which proves how awesome I am."
  };


  $("button").on("click", (event) => {
  initialData.push(
      {
      title: $(".inputTitle").val(),
      text: $(".inputText").val()
  });
  })




fb.ref(path).set(dataToSave);

 
