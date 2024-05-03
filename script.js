//  document.getElementById('additionForm').addEventListener('submit', function (event){
//      event.preventDefault();
//      let number1 =parseFloat(document.getElementsById('number1').value);
//      let number2 =parseFloat(document.getElementsById('number2').value);
//      let number3 =parseFloat(document.getElementsById('number3').value);

       
//       if (!isNaN(number3)) {
//         result = number1 + number2 + number3;
//     } else {
//         result = number1 + number2;
//     }
     
//     document.getElementById('result').innerText = 'Résultat : ' + result;
// });

//  document.getElementById('multiForm').addEventListener('submit', function (event){
//      event.preventDefault();
//      let number1 =parseFloat(document.getElementsById('number1').value);
//      let number2 =parseFloat(document.getElementsById('number2').value);
//      let number3 =parseFloat(document.getElementsById('number3').value);
//      let result
       
//       if (!isNaN(num3)) {
//         result = number1 + number2 + number3;
//     } else {
//         result = number1 + number2;
//     }

// });
 

//  document.getElementById('soustractForm').addEventListener('submit', function (event){
//      event.preventDefault();
//      let number1 =parseFloat(document.getElementsById('number1').value);
//      let number2 =parseFloat(document.getElementsById('number2').value);


//  });

   
//  document.getElementById('divForm').addEventListener('submit', function (event){
//      event.preventDefault();
//      let number1 =parseFloat(document.getElementsById('number1').value);
//      let number2 =parseFloat(document.getElementsById('number2').value);
  

// function calculate(operation) {     let num1 = parseFloat(document.getElementById("num1").value);  
//  let num2 = parseFloat(document.getElementById("num2").value);
//  let num3 = parseFloat(document.getElementById("num2").value); 
//    console.log(num1)  
//      var result;   
//     switch (operation) { 
//          case 'additionForm':  
//             if (!isNaN(num3)) { 
//              result = num1 + num2 + num3;    
//             } else {                 result = num1 + num2;   
//                   }              break;     
//         case 'soustractForm':        
//             result = num1 - num2;    
//         break;      
//         case 'multiForm':  
//             if (!isNaN(num3)) { 
//               result = numnum2 * num3; 
//             } else {                 result = num1 * num2;             }     
//         case 'divForm': 
//                 if (num2 === 0) {         
//                      document.getElementById("result").innerHTML = "Division par zéro impossible";  
//                     return;            
//                 } else {               
//                      result = num1 / num2;           
//                       }             
//                  break;
//     }

   
 function calculate(operation) {
    let result;
    let num1, num2, num3;

    switch (operation) {
        case 'addition':
            num1 = parseFloat(document.getElementById("num1").value);
            num2 = parseFloat(document.getElementById("num2").value);
            num3 = parseFloat(document.getElementById("num3").value);
            // result = isNaN(num3) ? num1 + num2 : num1 + num2 + num3;

            if (isNaN(num3)) {
                result = num1 + num2;
            } else {
                result = num1 + num2 + num3;
            }

            break;

        case 'multiplication':
            num1 = parseFloat(document.getElementById("num4").value);
            num2 = parseFloat(document.getElementById("num5").value);
            num3 = parseFloat(document.getElementById("num6").value);
            result = isNaN(num3) ? num1 * num2 : num1 * num2 * num3;
            break;

        case 'soustraction':
            num1 = parseFloat(document.getElementById("num7").value);
            num2 = parseFloat(document.getElementById("num8").value);
            result = num1 - num2;
            break;

        case 'division':
            num1 = parseFloat(document.getElementById("num9").value);
            num2 = parseFloat(document.getElementById("num10").value);
            if (num2 === 0) {
                document.getElementById("result").innerHTML = "Division par zéro impossible";
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById("result").innerHTML = "Résultat : " + result;
}
