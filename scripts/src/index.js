// $(document).ready(function() {
//   $('#erasePage').click(function() {
//     removeLetter();
//   });
// });
//
//
// function removeLetter() {
//
//   var str = $('body').html();
//   var array = str.split('');
//   var arrayLength = array.length;
//   var i = 1;
//   console.log(i);
//   console.log(array.length);
//   console.log(array);
//
//   removeEachLetter();
//
//   function removeEachLetter() {
//     setTimeout(function() {
//       var randomIndex = Math.floor(Math.random() * array.length);
//       var randomSplice = array.splice(randomIndex, 1);
//       var newStr = array.join('');
//       $('body').html(newStr);
//       // console.log(i);
//       // console.log(array.length);
//       // console.log("newStr= " + newStr);
//       i++;
//       if (i <= arrayLength) {
//         removeEachLetter();
//       }
//     }, 1)
//   }
// }
//
//
// // This sorta breaks faster, which is interesting
// function switchLetter() {
//   $.get('http://google.com', function( data ) {
//       console.log( data );
//   });
//
//   var str = $('body').html();
//   var array = str.split('');
//   var arrayLength = array.length;
//   var i = 1;
//   console.log(i);
//   console.log(array.length);
//   console.log(array);
//
//   removeEachLetter();
//
//   function removeEachLetter() {
//     setTimeout(function() {
//       var randomIndex = Math.floor(Math.random() * array.length);
//       var randomSplice = array.splice(randomIndex, 1);
//       var randomizedArray = array.push(randomSplice);
//       var newStr = array.join('');
//       $('body').html(newStr);
//       // console.log(i);
//       // console.log(array.length);
//       // console.log("newStr= " + newStr);
//       i++;
//       if (i <= arrayLength) {
//         removeEachLetter();
//       }
//     }, 1)
//   }
// }


 $("body").append('Test');
