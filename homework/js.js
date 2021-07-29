// function isEven(a){
//     if(a%2===0){
//         console.log("eded cutdur")
//     }
//     else{
//         console.log("eded tekdir")
//     }
// }

// console.log(isEven(54))





// function findEven(){
//     let evenlist=arguments[0];
//     for(let i=0; i<arguments.length;i++){
//         if(arguments[i]%2===0){
//             console.log(arguments[i])
//         }
//     }
// }

// findEven(43,42,23,42,52,35);



// function findEven(){
//     let evenlist=arguments[0];
//     for(let i=0; i<arguments.length;i++){
//         if(arguments[i]%2===1){
//             console.log(arguments[i])
//         }
//     }
// }

// findEven(43,42,22,42,52,36);





// function creatSquare(a,b){
//     for(i=0;i<a;i++){
//         console.log("*");
//     }
// for(k=0;k<b; k++){
//     console.log("*");
// }

    
// }

// creatSquare(2,5)



// function validateForm()
//     {
//         var x = document.forms["MyForm"]["Numval"].value;

//         if ((!x.match(/^\d+/)) || ((x.length) > 1)) {
//             alert("Please only one enter numeric character (Allowed input:1-9)");
//         }
//         else {
//             for (i = 0; i < Number(x) ; i++) {
//                 for (j = 0; j < Number(x) ; j++) {
//                     document.writeln(x);

//                     var square = document.createElement('div');
//                     square.className = 'squared';
//                     document.body.appendChild(square)

//                 }
//                 document.writeln("</br>");
//                 }

//         }

//         return false;

//     }




// function creatSquare(a,b){
//     let str="";
//     for (let i=0; i<a; i++) {

//         for(let j=0;j<b; j++){
//             if(i==0 || i==a-1){
//                 str+="*";
//             }
//             else if( j==0 || j==b-1 ){
//                 str+="*";
//             }
//             else{
//                 str+=" ";
//             }
//         }
//         str+="\n"
//     }
//     console.log(str);
// }
// creatSquare(4,4)




function findPrime (a){
   if(a<2){
    //    console.log("sade eded deyil")
    return false
   }

   for(let i=2;i<a;i++){

       if(a % i ===0 ){
        //    console.log("is not prime number")
        return false;
       }
   }
//    console.log("is prime number")
return true;
}

// FindPrime(10);
console.log(findPrime(65));

