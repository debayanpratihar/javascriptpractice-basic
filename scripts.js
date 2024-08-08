
// console.log("Debayan Praihar")
// fruit = 500
// console.log(fruit)
// console.log('hello world')
/*food =Number(prompt("Enter the food amount you want to eat"))
tipPercentage = Number(prompt("Enter the tip percentage ")/100)
tipAmount = food * tipPercentage
total = food + tipAmount*/
// console.log("The tip amoutn is this ")
//  console.log("Tip amout",tipAmount)
//  alert(tipAmount)
// console.log("The total amount is this ")
// console.log("Total amount",total)
// data type string and numbers
//functions 
//type casting

// weather = prompt("Is it a rainy day? type y or n")

// if(weather== "y"){
//     console.log("Go with an umbrella ")
// }
// if(weather=="n"){
//     console.log("Not required any umbrella clear weather")
// } else{
//     console.log("Wrong input !!!")
// }


// Floor - Rounds down 
//Ceil - Rounds up
// random - gives you a random number


// function sayMyname(name){
//     console.log(name)
//    console.log(name)
// }

// // sayMyname("Debayan Pratihar")
// //This is a function called "say my name it has one argument called `name"
// function greeting(name){

//     // templet leterel
//     greet = `Hi ${name}, Nice to meet you!`
// //    greet = 'Hi ' + name +', Nice to meet you'
//     console.log(greet)
// }

// // greeting("Ayan")

// function sum(a,b){
//     //return
//     return console.log(a+b)
// }
// // console.log(sum(1,2))
// // num = sum(1,2)
// // console.log(num)
// sum(1,2)

// const person = {
//     name:"debayan",
//     shirt:"white"
// }

// console.log(person.name)
// console.log(person.shirt)
// console.log(person['name'])
// console.log(person['shirt'])

// //assign object

// person.phone ='123456789'
// console.log(person.phone)
// console.log(person)

// //person2

// const person2 = {
//     name:"kazi",
//     shirt:"white",
//     phone:"675465772"
// }

// console.log(person2.name)
// console.log(person2.phone)
// console.log(person2.shirt)
// console.log(person2)
//es6 error function 
//object
//template literls
// const introducer = (name,shirt)=>{
//     const person ={
//         name:name,
//         shirt:shirt,
//         assets: 1000,
//         liability:500,
//         networth: function(){
//             return this.assets - this.liability
//         }
//     }

//    const intro= `Hi, my name is ${person.name} and the colour of my shirt is ${person.shirt}
//    and my net worth is ${person.networth()}/RS`
//    return intro
// }

// console.log(introducer("debayan","black"))
// // console.log(introducer("Debyani","white"))

// //loops

// const fruits = ['apple','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi','banana','orange','lichi']
// // console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }

// for(const fruit of fruits){
//     console.log(fruit)
// }
// const doubble=(numbers)=>{


// let result =[]
// for(let num of numbers){
//     // console.log(num*2)
//     result.push(num*2)
// }
// return result
// }

// console.log(doubble([1,2,3,4,5,6]))

//Higher order function
//map - loops and return an array
//filter 
//reduce
// let result=[1,2,3,4].map(number =>number*2)
// console.log(result)


// const doubbleMap = (numbers) => {
//     return numbers.map(number => number * 2)
// }

// console.log(doubbleMap([1, 2, 3, 4]))


// const filter = (numbers, graterThan) => {
//     let result = []
//     for (const number of numbers) {
//         if (number > graterThan) {
//             result.push(number)
//         }
//     } return result
// }

//console.log(filter([1, 2, 3, 4, 5, 6], 3))

// const nums=[1,2,3,4,5,6,7,8,9]
// console.log(nums.filter(num=>num>=3*2))


// const actors = [
//     {name: 'joney', networth:200000},
//     {name:'amber', networth: 10},
//     {name:'leonarho', networth: 1000000},
//     {name:'mukesh', networth: 91000000},
//     {name:'lokesh', networth: 17000000},
//     {name:'debyani', networth: 991000000},
//     {name:'debayan', networth: 9991000000}
// ]
// result = actors.filter(actor =>actor.networth > 10)
// // if (userIsAuthintcated || userIsPayingMember){
// //   show youtube video
// // }else{
// //
// //}
// let names = result.map(actor =>actor.name).join(', ')

// console.log(result)

//reduce

// sum all of the net worths
//SUM Thingk reduce
//reduce takes in a function as an argument
// const nums =[1,2,3,4,5]
// const result = nums.reduce(sssss(prev,curr){
//     return prev + curr
// })

// console.log(result)
// console.log("hello")
// let titleDiv = document.getElementById("titleDiv")


// console.log("before:",titleDiv.innerText)

// let massage = 'Good bye my lover'
// titleDiv.innerText = massage
// console.log("after:",titleDiv.innerText)

// titleDiv.innerHTML = `<p>${massage}</p>`


// titleDiv.style.backgroundColor = 'blue'

// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

// // redDiv.onclick = () => console.log("user chose : rock")
// // // getComputerChoise ---> 'paper'
// // // userchoise vs. computerChoise ---> result
// // // -1 , 0 , 1
// // // show everything on the screen (DOM)
// // yellowDiv.onclick = () => console.log("yellow")
// // greenDiv.onclick = () => console.log("green")


// const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// // console.log(squares[0].value)
// // console.log(squares[1].value)
// // console.log(squares[2].value)

// // forEach
// squares.forEach(square => {
//     square.onclick = () =>console.log(square.value)
// })



// const randomHero =()=>{
// const numberOfHeros =731
// Math.random()
// }


//+++++++++(Recvise Javascript)++++++++?//

// console.log("Hello")
// console.log("Hello Debayan wellcome to my javascript coouse")
// variables   -- comments
// console.log("Debayan Pratihar")
// name = "debayan is very good boy and he love to do coding and other thig like flut with rimi"
// console.log(name)


// operators

// food = 20
// console.log(food)
// tipPercentage = 0.2
// tipAmount = food + tipPercentage

// console.log(tipAmount)
// const value= 353
// let myObj = {
//     name : "Debayan",
//     schoolName:"Ramakrishana"
// }

// const heros = ["debayan","rimi"]

// let myFunction = function(){
//     console.log("Hello world")
// }
// console.log(typeof heros);
// console.log(typeof value);
// console.log(typeof myFunction);
// console.log(typeof food);

// program for a simple calculator

// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// let result;

// // using if...else if... else
// if (operator == '+') {
//     result = number1 + number2;
// }
// else if (operator == '-') {
//     result = number1 - number2;
// }
// else if (operator == '*') {
//     result = number1 * number2;
// }
// else {
//     result = number1 / number2;
// }

// // display the result
// console.log(`${number1} ${operator} ${number2} = ${result}`);
// //  Initializing variables
// var defaultCertPNG = "certificates/dummy.png";
// var defaultFontSize = 20;
// var defaultFont = "Arial";
// var defaultColor = "black";
// var prevX = 0;
// var prevY = 0;

// // Defining Canvas
// var canvas = document.getElementById("certificatecanvas");
// var ctx = canvas.getContext("2d");
// var certImage = new Image();

// var signatureImage = new Image();
// var signatureLoaded = false;

// // Function to handle signature upload
// function handleSignatureUpload(e) {
//   var file = e.target.files[0];
//   if (file) {
//     var reader = new FileReader();
//     reader.onloadend = function () {
//       signatureImage.onload = function () {
//         // Set the signatureLoaded flag to true only when the image is fully loaded
//         signatureLoaded = true;
//         drawTextfromInputs();
//       };
//       signatureImage.src = reader.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }


// // Add event listener for signature upload
// document.getElementById("uploadsignature").addEventListener("change", handleSignatureUpload);


// var canvasOffset = canvas.getBoundingClientRect();
// var offsetX = canvasOffset.left;
// var offsetY = canvasOffset.top;
// var scrollX = window.pageXOffset;
// var scrollY = window.pageYOffset;
// var startX = 0;
// var startY = 0;
// var selectedElement = null;
// var dragMode = false;

// // Defining Sheet Stuffs
// var titles = null;
// var sheetData = null;
// var progress = document.getElementById("progress");
// var loaderbody = document.querySelector(".loaderbody");

// // Defining DOM Elements
// var Inputs = document.getElementById("inputs");
// var downloadTypeButton = document.getElementById("downloadtype");
// var downloadButton = document.getElementById("downloadbutton");
// var downloadZipButton = document.getElementById("downloadzipbutton");
// var imageFileInput = document.getElementById("uploadimage");
// var addInputButton = document.getElementById("addinput");
// var Editor = {
//   font: document.getElementById("fontfamily"),
//   fontsize: document.getElementById("fontsize"),
//   textalign: document.getElementById("textalign"),
//   color: document.getElementById("textcolor"),
//   bold: document.getElementById("textbold"),
//   italic: document.getElementById("textitalic"),
//   opacity: document.getElementById("textopacity")
// };

// // On Document Load
// document.addEventListener("DOMContentLoaded", function () {
//   // Creating Image from PNG file
//   certImage.src = defaultCertPNG;
//   var dimentionRatio = certImage.width / certImage.height;

//   // When Image Loads Successfully
//   certImage.onload = function () {
//     // Setting Canvas Size
//     canvas.width = certImage.width;
//     canvas.height = certImage.height;
//     defaultFontSize = canvas.width / 100;
//     console.log(defaultFontSize);
//     drawTextfromInputs();
//     addListenerToInputs();
//   };
// });

// function addListenerToInputs() {
//   var inputs = document.getElementsByClassName("certinputs");
//   var inputsLength = inputs.length;
//   for (var i = 0; i < inputsLength; i++) {
//     inputs[i].addEventListener("keyup", function () {
//       drawTextfromInputs();
//     });
//   }

//   var delbuttons = document.getElementsByClassName("delbutton");
//   for (var i = 0; i < delbuttons.length; i++) {
//     delbuttons[i].addEventListener("click", function () {
//       var parent = this.parentNode;
//       parent.remove();
//       drawTextfromInputs();
//     });
//   }

//   var checkboxes = document.getElementsByClassName("certcheck");
//   for (var i = 0; i < checkboxes.length; i++) {
//     checkboxes[i].addEventListener("change", function () {
//       updateEditorOptions();
//     });
//   }
// }

// function updateEditorOptions() {
//   var checkedCheckboxes = Inputs.querySelectorAll("input:checked");

//   if (checkedCheckboxes.length === 1) {
//     var selectionData =
//       checkedCheckboxes[0].parentNode.querySelector(".certinputs").dataset;
//     selectedElement =
//       checkedCheckboxes[0].parentNode.querySelector(".certinputs");
//     Editor.font.value = selectionData.font;
//     Editor.fontsize.value = selectionData.fontsize;
//     Editor.textalign.value = selectionData.textalign;
//     Editor.color.value = selectionData.color;
//     Editor.bold.dataset.active = selectionData.bold;
//     Editor.italic.dataset.active = selectionData.italic;
//     Editor.opacity.value = selectionData.opacity;
//   } else {
//     // Do Nothing
//     selectedElement = null;
//   }
//   drawTextfromInputs();
// }

// function drawTextfromInputs() {
//   // Clearing Canvas with white background
//   ctx.fillStyle = "white";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   ctx.fillStyle = "black";

//   ctx.drawImage(certImage, 0, 0, canvas.width, canvas.height);

//   // Draw signature if loaded
//   if (signatureLoaded) {
//     var signatureWidth = signatureImage.width * (canvas.height / signatureImage.height);

//     // Draw signature at the bottom right side of the certificate
//     var signatureX = canvas.width - signatureWidth - 10;
//     var signatureY = canvas.height - signatureImage.height - 500;
//     ctx.drawImage(signatureImage, signatureX, signatureY, signatureWidth, canvas.height);
//   }

//   // Getting Inputs
//   var textInputs = document.getElementsByClassName("certinputs");
//   var textInputsLength = textInputs.length;

//   // Looping through Inputs
//   for (var i = 0; i < textInputsLength; i++) {
//     // Getting Input
//     var textInput = textInputs[i];

//     // Getting Input Values
//     var text = textInput.value;
//     var position = [textInput.dataset.x, textInput.dataset.y];
//     var fontSize = textInput.dataset.fontsize;
//     var font = textInput.dataset.font;
//     var textAlign = textInput.dataset.textalign;
//     var opacity = textInput.dataset.opacity;
//     var color = textInput.dataset.color;
//     var bold = textInput.dataset.bold;
//     var italic = textInput.dataset.italic;
//     var editable = textInput.dataset.editable;

//     // Adding Text
//     addText(
//       ctx,
//       text,
//       position,
//       fontSize,
//       font,
//       textAlign,
//       opacity,
//       color,
//       bold,
//       italic,
//       textInputs[i],
//       editable
//     );
//   }
//   if (selectedElement != null) {
//     drawBorderForSelected();
//   }
// }

// function drawBorderForSelected() {
//   // Create Rectange over Selected Element
//   ctx.strokeStyle = "#0B082F";
//   ctx.lineWidth = 8;
//   var x = selectedElement.dataset.x;
//   var y = selectedElement.dataset.y;
//   var width = selectedElement.dataset.width;
//   var height = selectedElement.dataset.height;
//   var fontSize = selectedElement.dataset.fontsize;
//   var sW = canvas.width / 100;
//   var sH = canvas.height / 100;
//   if (selectedElement.dataset.textalign == "center") {
//     x = x - width / 2;
//   } else if (selectedElement.dataset.textalign == "right") {
//     x = x - width;
//   }

//   var x1 = (x - 1) * sW;
//   var y1 = (y - 2) * sH;
//   var x2 = (Number(width) + 2) * sW;
//   var y2 = (Number(height) + 4) * sH;
//   ctx.strokeRect(x1, y1, x2, y2);

//   ctx.fillStyle = "white";
//   drawCircle(x1, y1);
//   drawCircle(x1 + x2, y1);
//   drawCircle(x1, y1 + y2);
//   drawCircle(x1 + x2, y1 + y2);

//   function drawCircle(x, y, r = 15) {
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, Math.PI * 2, false);
//     ctx.fill();
//     ctx.stroke();
//   }

//   console.log(sW, sH, defaultFontSize, width);
// }

// function addText(
//   ctx = ctx,
//   text = "Default Text",
//   position = [0, 0],
//   fontSize = 5 * defaultFontSize,
//   font = defaultFont,
//   textAlign = "center",
//   opacity = 1,
//   color = defaultColor,
//   bold = false,
//   italic = false,
//   dom,
//   editable = "1"
// ) {
//   // Setting Font
//   ctx.font =
//     (Number(bold) ? "bold " : "") +
//     (Number(italic) ? "italic " : "") +
//     Number(fontSize) * defaultFontSize +
//     "px " +
//     font;

//   // Set color
//   ctx.fillStyle = color;

//   // Setting Opacity
//   ctx.globalAlpha = Number(opacity) / 100;

//   // Setting Text Alignment
//   ctx.textAlign = textAlign;

//   // Setting Text Position
//   ctx.textBaseline = "top";
//   if (editable == "0") {
//     text = "{{" + text + "}}";
//   }

//   // Measure Height & Width of Text
//   var textWidth = ctx.measureText(text).width * (100 / canvas.width);
//   var textHeight = fontSize;
//   dom.dataset.width = textWidth;
//   dom.dataset.height = textHeight;
//   // console.log(textWidth,textHeight);

//   // Setting Text Position
//   const xPos = Number(position[0] * (canvas.width / 100));
//   const yPos = Number(position[1] * (canvas.height / 100));

//   ctx.fillText(text, xPos, yPos);
// }

// downloadButton.addEventListener("click", function () {
//   selectedElement = null;
//   drawTextfromInputs();

//   // Getting the Download Type
//   var downloadType = downloadTypeButton.value;

//   if (downloadType == "png" || downloadType == "jpg") {
//     // Creating Image from Canvas
//     var image = canvas.toDataURL("image/" + downloadType);

//     // Creating Download Link
//     var link = document.createElement("a");
//     link.download = "certificate." + downloadType;
//     link.href = image;
//     link.click();
//   } else if (downloadType == "pdf") {
//     var pdf = new jsPDF();
//     pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
//     pdf.save("certificate.pdf");
//   }
// });

// imageFileInput.addEventListener("change", function () {
//   var file = imageFileInput.files[0];
//   var reader = new FileReader();
//   reader.onloadend = function () {
//     certImage.src = reader.result;
//   };
//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     certImage.src = defaultCertPNG;
//   }
// });

// addInputButton.addEventListener("click", function () {
//   addField();
// });

// function addField(text = "Field Name", position = [20, 20], editable = true) {
//   var data = `
//  <div>
//  <input type="checkbox"  class="certcheck" />
//  <input
//    type="text"
//    value="${text}"
//    data-fontsize="5"
//    data-font="'Open Sans', sans-serif"
//    data-textalign="left"
//    data-x="${position[0]}"
//    data-y="${position[1]}"
//    data-color="#000"
//    data-opacity="80"
//    class="certinputs"
//    data-bold="0"
//    data-italic="0"
//    data-editable="${editable ? "1" : "0"}"
//    ${editable ? "" : "disabled"}
//  />
//  <button class="delbutton"><i class="fa fa-trash"></i></button>
// </div>
//  `;
//   Inputs.innerHTML += data;
//   addListenerToInputs();
//   drawTextfromInputs();
// }

// Editor.fontsize.addEventListener("change", function () {
//   updateDataset("fontsize", this.value);
// });

// Editor.textalign.addEventListener("change", function () {
//   updateDataset("textalign", this.value);
// });

// Editor.color.addEventListener("input", function () {
//   updateDataset("color", this.value);
// });

// Editor.font.addEventListener("change", function () {
//   updateDataset("font", this.value);
// });

// Editor.bold.addEventListener("click", function () {
//   this.dataset.active = Number(this.dataset.active) ? 0 : 1;
//   updateDataset("bold", this.dataset.active);
// });

// Editor.italic.addEventListener("click", function () {
//   this.dataset.active = Number(this.dataset.active) ? 0 : 1;
//   updateDataset("italic", this.dataset.active);
// });

// Editor.opacity.addEventListener("input", function () {
//   updateDataset("opacity", this.value);
// });

// function updateDataset(dataname, value, mode = "w") {
//   // alert("Color Changed");
//   var checkedCheckboxes = document
//     .getElementById("inputs")
//     .querySelectorAll("input:checked");
//   for (var i = 0; i < checkedCheckboxes.length; i++) {
//     if (mode == "a") {
//       checkedCheckboxes[i].parentNode.querySelector(".certinputs").dataset[
//         dataname
//       ] =
//         Number(
//           checkedCheckboxes[i].parentNode.querySelector(".certinputs").dataset[
//             dataname
//           ]
//         ) + Number(value);
//     } else {
//       checkedCheckboxes[i].parentNode.querySelector(".certinputs").dataset[
//         dataname
//       ] = value;
//     }
//   }
//   drawTextfromInputs();
// }

// let myStick = new JoystickController("stick", 64, 8);
// function loop() {
//   requestAnimationFrame(loop);
//   // Get current values
//   let x = myStick.value.x;
//   let y = myStick.value.y;
//   if (!(x == 0 && y == 0)) {
//     if (Math.abs(x - prevX) > 0.1) {
//       prevX = x;
//       updateDataset("x", x * 10, "a");
//     }
//     if (Math.abs(y - prevY) > 0.1) {
//       prevY = y;
//       updateDataset("y", y * 10, "a");
//     }
//   }
// }
// loop();
// //  On Window Resize event
// window.addEventListener("resize", function () {
//   canvasOffset = canvas.getBoundingClientRect();
//   offsetX = canvasOffset.left;
//   offsetY = canvasOffset.top;
// });

// // test if x,y is inside the bounding box of texts[textIndex]
// function textHittest(x, y, dom) {
//   // console.log(canvasOffset.height);
//   var data = dom.dataset;
//   var posX = Number(data.x);
//   var posY = Number(data.y);
//   var width = Number(data.width);
//   var height = Number(data.height);

//   var yCheck = y >= posY && y <= posY + height;
//   if (data.textalign == "center") {
//     var xCheck = x >= posX - width / 2 && x <= posX + width / 2;
//   } else if (data.textalign == "right") {
//     var xCheck = x >= posX - width && x <= posX;
//   } else {
//     var xCheck = x >= posX && x <= posX + width;
//   }

//   if (xCheck && yCheck) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function handleMouseDown(e) {
//   e.preventDefault();
//   startX = parseInt(e.clientX - offsetX);
//   startY = parseInt(e.clientY - offsetY);

//   // Mapped x and y between 0-100
//   startX = (startX / canvasOffset.width) * 100;
//   startY = (startY / canvas.getBoundingClientRect().height) * 100;

//   var certInputs = Inputs.getElementsByClassName("certinputs");
//   for (var i = 0; i < certInputs.length; i++) {
//     // console.log(certInputs[i]);

//     if (textHittest(startX, startY, certInputs[i])) {
//       // change Cursor to Pointer
//       canvas.style.cursor = "pointer";
//       selectedElement = certInputs[i];
//     }
//   }
// }

// // done dragging
// function handleMouseUp(e) {
//   e.preventDefault();
//   selectedElement = null;
//   canvas.style.cursor = "default";
//   drawTextfromInputs();
//   // console.log("mouse up");
// }

// // also done dragging
// function handleMouseOut(e) {
//   e.preventDefault();
//   selectedElement = null;
//   canvas.style.cursor = "default";
//   drawTextfromInputs();
//   // console.log("mouse out");
// }

// function handleMouseMove(e) {
//   if (!selectedElement) {
//     return;
//   }
//   e.preventDefault();
//   mouseX = parseInt(e.clientX - offsetX);
//   mouseY = parseInt(e.clientY - offsetY);

//   mouseX = (mouseX / canvasOffset.width) * 100;
//   mouseY = (mouseY / canvas.getBoundingClientRect().height) * 100;
//   // Put your mousemove stuff here
//   var dx = mouseX - startX;
//   var dy = mouseY - startY;
//   // console.log(dx, dy);
//   startX = mouseX;
//   startY = mouseY;
//   selectedElement.dataset.x = Number(selectedElement.dataset.x) + dx;
//   selectedElement.dataset.y = Number(selectedElement.dataset.y) + dy;
//   drawTextfromInputs();
//   // console.log("mouse move");
// }

// // listen for mouse events
// canvas.addEventListener("mousedown", function (e) {
//   dragMode = true;
//   handleMouseDown(e);
// });
// canvas.addEventListener("mousemove", function (e) {
//   if (dragMode) {
//     handleMouseMove(e);
//   }
// });
// canvas.addEventListener("mouseup", function (e) {
//   dragMode = false;
//   handleMouseUp(e);
// });
// canvas.addEventListener("mouseout", function (e) {
//   if (dragMode) {
//     handleMouseOut(e);
//     dragMode = false;
//   }
// });


// //  CSV/Excel Upload


// var file = document.getElementById("uploadcsv");
// var viewer = document.getElementById("dataviewer");
// file.addEventListener("change", importFile);

// function importFile(evt) {
//   var f = evt.target.files[0];

//   if (f) {
//     var r = new FileReader();
//     r.onload = (e) => {
//       var contents = JSON.parse(processExcel(e.target.result));
//       // Get First object from object Contents
//       var data = Object.values(contents)[0];
//       titles = data[0];
//       sheetData = data.slice(1);
//       console.log(sheetData);

//       Inputs.innerHTML = "";
//       document.querySelector(".downloadzip").style.display = "flex";
//       // document.querySelector(".downloadzip").href = "data:text/csv;charset=utf-8," + encodeURIComponent(data.map(row => titles.map(field => row[field]).join(",")).join("\n"));
//       document.querySelector(".downloadfile").style.display = "none";
//       titles.forEach((title, i) => {
//         addField(title, [20, 20 + i * 10], false);
//       });
//     };
//     r.readAsBinaryString(f);
//   } else {
//     console.log("Failed to load file");
//   }
// }

// function processExcel(data) {
//   var workbook = XLSX.read(data, {
//     type: "binary"
//   });

//   var firstSheet = workbook.SheetNames[0];
//   var data = to_json(workbook);
//   return data;
// }

// function to_json(workbook) {
//   var result = {};
//   workbook.SheetNames.forEach(function (sheetName) {
//     var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
//       header: 1
//     });
//     if (roa.length) result[sheetName] = roa;
//   });
//   return JSON.stringify(result, 2, 2);
// }

// //   Generating Zip


// downloadZipButton.addEventListener("click", function (e) {
//   // Start recording Time
//   var startTime = new Date();

//   console.log("Downloading Zip");


//   var zip = new JSZip();
//   var count = 0;
//   var totalRows = sheetData.length;
//   var zipFilename = "CERRT_Debayan.zip";
//   var effectiveDOMs = [];
//   var dataIndex = [];
//   Inputs.querySelectorAll(".certinputs").forEach(function (input) {
//     // console.log("input", input);
//     if (titles.includes(input.value)) {
//       input.dataset.editable = "1";
//       effectiveDOMs.push(input);
//       dataIndex.push(titles.indexOf(input.value));
//     }
//   });

//   sheetData.forEach(function (row, i) {
//     effectiveDOMs.forEach(function (dom, j) {
//       dom.value = row[dataIndex[j]];
//     });
//     drawTextfromInputs();

//     var filename = row[0] + "_Certificate_" + (i + 1) + ".png";

//     var src = canvas.toDataURL("image/png");
//     // loading a file and add it in a zip file
//     JSZipUtils.getBinaryContent(src, function (err, data) {
//       if (err) {
//         throw err; // or handle the error
//       }
//       zip.file(filename, data, { binary: true });
//       count++;
//       if (count == sheetData.length) {
//         zip.generateAsync({ type: "blob" }).then(function (content) {
//           saveAs(content, zipFilename);
//           console.log("Certificate Downloaded");

//           // Print Time
//           var endTime = new Date();
//           var timeDiff = endTime - startTime;
//           console.log("Time Taken: " + timeDiff + "ms");
//           progress.innerHTML = `Generated ${totalRows} certificates in ${timeDiff/1000} seconds`;


//           loaderbody.style.display = "flex";
//           effectiveDOMs.forEach(function (dom, j) {
//             dom.dataset.editable = "0";
//             dom.value = titles[dataIndex[j]];
//           });
//           drawTextfromInputs();
//           setTimeout(function () {
//             loaderbody.style.display = "none";
//           }, 5000);
//         });
//       }
//     });
//   });

  
// });

// Reversing a string
/*var str = "Hello World";
var res = str.split(" ")
.map(function(word){
    return word.split("").reverse().join("");
});
console.log(res.join(" "));*/

// arry of objects
/*function check(obj){
 return Array.isArray(obj) ? "Array" : "Object";
}

console.log(check([]));
console.log(check({}));*/

// make an array empty

/*arr=[2,3,4,5,6,7,8,9];
arr.length=0;
console.log(arr);*/

// check if a number is a interger

/*var a = 12;
if(a%1!== 0){
    console.log("Not an Integer");
}
else{
  console.log("Integer");
}*/

//palindromic string check

/*function checkPalindrome(str){
    return str == str.split("").reverse().join("");
}
console.log(checkPalindrome("loop"));*/

// short a word alphabetically
/*function alphabetOrder(str){
    return str.split("").sort().join("");
}
console.log(alphabetOrder("debayan"));*/

//capatilze the first letter of a string
// calculate the sum of an array
// function sum(arr){
//     return arr.reduce((acc,curr)=>acc+curr,0);
// }


// console.log(sum([1,2,3,4,5,6,7,8,9,10]));
// lets start git hub push
// how many variables we create we have to store in shomewhere so that data we can store
//in the heap memory
//execution context
//1. variables
//2. function instide that parent function
// 3. lexical environment of that function

//in execution function when we call a function it creates a new execution context contaner
//after that the function can call itself and create a new execution context
// execution contex is a container that stores all the variables and functions. Ant its always created when a function is called
//lexical environment is the environment where the function is written
// var a = [1,2,3,4,5,6,7,8,9,10];
// var b = [...a];// spread operator

// b.pop();

// in js any thing is mainly in 2 types er modhhe jekono ek prokar ke belong kore
// falsy values = 0 false undefined null NaN doucumnet.all
// truthy values = 1 true any number except 0, any string except empty string, any object, any array, any function
// if(document.all){
//     console.log("Truthy")
// }else{
//     console.log("Falsy")
// }
//foreach loof is used to iterate over an array
// var a = [1,2,3,4,5,6,7,8,9,10];
// a.forEach(function(value,index, val){
//     console.log(value+2,index, val);
// })

//objects par loop karane ke liye hota hai for in loop

// var obj = {
//     name: "Debayan",
//     age: 23,
//     city: "Kolkata"
// }

// for(var key in obj){
//     console.log(key,obj[key]);
// }

//callback functions
//jokhon amra ekta function ke argument hisebe pass kori arekta function ke callback function bole
// setTimeout(function(){
//     console.log("Hello") // asychronous js
// },2000)

// var str = "saree jahase achhaa hindustan hamara";
// var res = str.split(" ").forEach(function(word){
//     console.log(word.split("").reverse().join(""));
// })


var a = {};
isAraay = Array.isArray(a);
console.log(isAraay);


