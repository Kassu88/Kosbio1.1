$(document).ready(function(){
    
 console.log('dokumentti ready, jquery futaa!');   
    
  $("#yhteyslomake").validate({
  rules: {
      postinumero: {
          digits:true
      }
      
  }
      
  });  
    
    
});
