var addCartItemButtons = document.getElementsByClassName('cart')
console.log(addCartItemButtons);
for (var i = 0; i < addCartItemButtons.length; i++) {
    var button = addCartItemButtons[i]
    button.addEventListener('click', function(){
       alert('Meal has been added!')
    });
}




//     window.location='/menu.html';
// });




// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Menu</title>
//     <link rel="stylesheet" href="styles.css">
//     <meta charset="UTF-8">
//     <title>CodePen - Mobile template</title>
//     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
//     <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/css/materialize.min.css'>
//     <link href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap" rel="stylesheet">
//     <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'><link rel="stylesheet" href="./style.css">
//   <meta name="viewport" content="user-scalable=yes,width=device-width, initial-scale=1, maximum-scale=1">
//   <style>
//     h6 {
//       font-family: 'EB Garamond', serif;
//       font-size: 50px;
//     }
//   </style>
//   </head>
//   <body>



// </body>
// </html>