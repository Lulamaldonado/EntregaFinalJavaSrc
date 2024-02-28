//let= guardarSelectionBtn

// document.getElementById(`guardarSelectionBtn`).addEventListener (`click`,function guardarSelectionBtn() {

// let checkboxes =
   // document.querySelectorAll(`input[type= "checkbox"]`) 
// }); 

   // let arraydeSeleccionados=[];

//   checkbox.forEach(function(checkbox){
   //  if (checkbox.checked)
   //   arraydeSeleccionados.push(checkboxes.value); 

//   });

//  console.log(arraydeSeleccionados);

document.getElementById(`confirmBottom`).addEventListener(`click`, function(){
   var checkboxes = document.querySelectorAll(`input[name= "product"]: checked`);

   var selectedProducts =[];


   checkboxes.forEach(function (checkbox){
      selectedProducts.push(checkbox.value); 
   });
})



