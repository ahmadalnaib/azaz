
  $('.btn ').on('click',function(event){
  if (this.hash !==''){
    event.preventDefault();
    const hash=this.hash;
    $('html,body').animate(
      {
        scrollTop:$(hash).offset().top 
      },
      800
    );
  }
  });
  
  
    
    
  
  
  $('.lead').slideToggle().slideToggle(10000);
  
  
  
  setInterval (function(){
    $('#slider .slides').animate({'margin-left':'-=720px'},1000);
  },9000);
  
  
  