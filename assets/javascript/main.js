function animate_header(){
    let list2 =["Simple", "Interative", "Intuitive", "responsible", "Mobile first", "Applications"];
    let list =["Creative", "Innovative","Motivated","self-disciplined","detailed-oriented","Problem Solving", "Teamwork"];
    let i = 1;
    timer = setInterval(function(){
      $('.animated_text').html(list[i]);
      i= (i===list.length)? 0:i+1 ;
    }, 2000);
  
}


  $(document).ready(function(){
      animate_header();
      $(".project_desc").on("click", function(event){
          let index = $(this).attr("data-item")
          console.log(index);
          $(".des_project-"+index).toggle();
      })
  })