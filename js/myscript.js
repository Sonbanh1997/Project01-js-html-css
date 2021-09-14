/*//Arrow function

// var hello;

// hello = function(){
// 	return "Hello World!";
// }

// let hi;
/*hi = () => {
	return "Hello World";
}

let myVoice;

myVoice = (name) => "How are you " + name + "?";

console.log(myVoice('son'));

document.getElementById("demo1").innerHTML = hello();
document.getElementById("demo2").innerHTML = hi();


//DOM (DOCUMENT OBJECT MODEL)
document.getElementById("myHeading").style.fontSize = '50px';
document.getElementById("myHeading").onclick = function() {
	this.style.backgroundColor = 'orange';
}
console.log(this);
let text = document.*/

// let inTro = document.getElementsByClassName("intro")

// document.getElementById("demo3").onmouseover = function() {
// this.innerHTML = inTro[2].innerHTML;
// this.style.fontSize = '100px';
// }

// const x = document.querySelector("h1#myHeading");
// document.getElementById("demo3").innerHTML = x.innerHTML;
// let oH = document.querySelector("a#oh");

// let myImage = document.querySelectorAll("img")
// let myBtn1 = document.getElementById("btnOne");
// document

// let check = false;
// if(myImage[0].style.display = 'inline'){
// 	check = true;
// } else {
// 	check = false;
// }

// myBtn1.onclick = function() {
// 	if(check == true) {
// 		myImage[0].style.display = 'none';
// 		myImage[1].style.display = 'none';
// 		myImage[2].style.display = 'none';
// 		this.innerHTML = "None";
// 		check = false;
		
// 	} else {
// 		myImage[0].style.display = 'inline';
// 		myImage[1].style.display = 'inline';
// 		myImage[2].style.display = 'inline';		
// 		this.innerHTML = "Hide";
// 		check = true;

// 	}
// }


// Form validation function

// function myFunction() {
// let x = document.forms["myForm"]["uSer"].value;
// let y = document.forms["myForm"]["passWor"].value;
// if(x == "" || y == "") {
// 	alert("Please enter name and Password!");
// }else {
// 	alert("Thanks you for subbmited the form");
// 	console.log("my name is: "+ x + "-" + "my password is: " + y);

// }

// }

// document.getElementById("myBtn").addEventListener("click", myAniFunction)


// function myAniFunction() {
// 	let pos = 0;
// 	const myObj = document.getElementById("animate");
// 	let myCall = null;
// 	clearInterval(myCall);
// 	myCall = setInterval(runAni, 5);
// 	function runAni() {
// 		if(pos == 350) {
// 			clearInterval(myCall);
	
// 		} else {
// 			pos++;
// 			myObj.style.top = pos + "px";
// 			myObj.style.left = pos + "px";
// 		}
// 	}
// }

/*-------------------------------------------------------------------------*/
// DOM EVENT LISTENER

// document.getElementById("demo1").addEventListener("click", function() {alert("You just Clicked the ObjectA")});
// document.getElementById("demo1").addEventListener("mouseover", myObjaStyle);
// document.getElementById("demo1").addEventListener("mouseleave", reMoveHandler);



// function myObjaStyle() {

// let x = document.getElementById("demo1");
// spoke("hello");
// x.style.fontSize = '100px';
// x.style.fontWeight = 'bolder';
// x.style.color = 'blue';
// 	function spoke(hey) {
// 		return alert(hey);
// 	}




// };

// function reMoveHandler() {
// 	this.removeEventListener("mouseover", myObjaStyle);
// }

/*-------------------------------------------------------------------------------*/
//DOM Animation


// function myMove() {
//   let id = null;
//   const elem = document.getElementById("animate");   
//   let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++; 
//       elem.style.top = pos + "px"; 
//       elem.style.left = pos + "px"; 
//     }
//   }
// }




/*---------------------------------------------------------*/
//DOM navigation


 // let x = document.getElementById("firstlist");
 // console.log(x.children[0].childNodes[0]);
 // console.log(x.parentNode.attributes[0]);
 // console.log(x.nodeName);
 // let y = document.getElementById("first");
 // console.log(y.children[0].previ.innerHTML);


//DOM Nodes:

//Create HTML Element

//step1: create an element

//let x = document.createElement("p");

//step2: create the content and append it to the created p element(it will be content of p)


// let contentP = document.createTextNode("LEARNING JS SO AWNFUL");
// x.appendChild(contentP);

// //step3 append the p to the exsisting element HTML
// let getDiv = document.getElementById("list");
// getDiv.appendChild(x);




//practice work:

//part 1: create Element h1(done)

// let myAhref =  document.createElement("h1");

// let myContentAhref = document.createTextNode("This is my A link");

// myAhref.appendChild(myContentAhref);

// let getUlist = document.getElementById("opTionList").lastElementChild;

// getUlist.appendChild(myAhref);


//part 2: create a function that when click  on the button will create a li inside ul list

// document.getElementById("addMoreList").addEventListener("click", addLi);

// function addLi() {
// let createLi = document.createElement("li");

// let contentForLi = document.createTextNode(Math.floor(Math.random() * 20));
// createLi.appendChild(contentForLi);
//  document.getElementById("opTionList").appendChild(createLi);


// }

// //insertBefore();
// let myBody = document.getElementsByTagName("body");

// let getDivElement = document.getElementById("list");
// let myHead = document.createElement("h2");
// let myContentHead = document.createTextNode("This is my Heading2");
// myHead.appendChild(myContentHead);
// myBody[0].insertBefore(myHead, getDivElement);


//remove()
// document.getElementById("deleteBtn").onclick = delFunction;

// function delFunction() {
//   let getDivElement = document.getElementById("list");

  
//   if(getDivElement) {
//     myBody[0].remove(getDivElement);
//     setTimeout(function(){alert("content Deleted")}, 900);
//   }
//   }

//  document.getElementById("replaceBtn").addEventListener("click", replaceFunction)

//  function replaceFunction(callbird) {
//   let myBird = document.createElement("h3");
//   let contentOfBird = document.createTextNode("A Bird has created!");
//   myBird.appendChild(contentOfBird);
//    replaceAction(myBird);

//  }

 
// function replaceAction(bird) {
//   let getAdiv = document.getElementById("list");
//   let x = document.getElementById("demo1");
//   getAdiv.replaceChild(bird, x);
// }


// API

// let pushBtn = document.getElementsByTagName("button");
// for(let i = 0; i < pushBtn.length; i++) {
//   pushBtn[i].style.backgroundColor = 'Blue';
//  // pushBtn[i].setAttribute("class", "Btn-class" );
// console.log(pushBtn[i].id);
//  // console.log(pushBtn[i].attributes[1].nodeName);
// }

// let myPara = document.getElementById("demo4");
// myPara.id = "Hey";
// console.log(myPara.id);

// console.log(navigator.appName);
let x = document.getElementById("myDiv");

let myPara = document.createElement("p");


// let postApi = 'https://jsonplaceholder.typicode.com/posts';
// console.log(postApi);

// fetch(postApi)
//  .then(function(response) {
//   return response.json();
//  })

//  .then(function(value) {
 
  
//  })






//Template string ES 6

// var firstName = 'Son';
// var lastName = 'Banh';

// console.log('myname:', `${firstName} ${lastName}`);


// var myString = 'Banh Thai Son';
// // lay do dai cua chuoi hoac array
// console.log(myString.length);
// //find index(tim vi tri chuoi)
// console.log(myString.indexOf('So'));


// //tham so thu 2 cua ham indexOf('chuoi',vitri bat dau tim);
// var mySecondString = 'Banh Thai Son Nguyen Son Nam Son';
// console.log('Chuỗi \'Son\' ở vị trí đầu tiên:',mySecondString.indexOf('Son')); // tra ve vi tri bat dau chuoi 
// //'Son' dau tien
// console.log('Chuỗi \'son\' ở vị trí kế tiếp:',mySecondString.indexOf('Son',20)); // bat dau tiem chuoi co gia tri
// // 'Son' o vi tri index = 20;
// // doi voi chuoi, moi ki tu se tuong ung voi mot chi so index
// //(chi so dau tien luon la index=0)
// console.log('Hàm indexof() trả về \'-1\' khi không tìm thấy giá trị:',mySecondString.indexOf('ABC'));
// console.log('Tim  vi tri chuỗi \'Son\' cuối cùng',mySecondString.lastIndexOf('Son'));
// //Serach(string) - chỉ nhận 1 tham số truyền vào 
// console.log('Tìm  chuỗi \'Son\' đầu tiên:', mySecondString.search('Son'));


// //cắt chuỗi - string.slide(start position, end position);
// console.log('Cắt Chuỗi \'Banh Thai Son\':',mySecondString.slice(0,13));
// //cắt từ vị trí bắt đầu


// console.log('Cắt chuỗi từ vị trí bắt đầu', mySecondString.slice(13));
// //cắt chuỗi từ phải sang trái
// //giá trị của chuỗi khi cắt từ phải sáng trái(0 sẽ là giá trị đầu, -1 là giá trị kế tiếp, và tăng dần);
// console.log('cắt chuỗi \'Nam Son\' từ phải sang trái:', mySecondString.slice(-8));
// //cắt chuỗi trái sang phải, từ vị trí bắt đầu đến vị trí kết thúc
// console.log(mySecondString.slice(-18,-7));


// //thay thế chuỗi
// var myNewString = 'Học javascript sao mà khó';
// console.log(myNewString.replace('javascript','PHP'));
// //thay thế nhiều chuỗi(dùng biểu thức exception)
// var myThirdString = 'Học PHP còn chưa học PHP Javascript PHP';
// console.log('Thay Thế nhiều chuỗi:', myThirdString.replace(/PHP/g,'Javascript'));

// var myWord = 'abc ABC';

// console.log(myWord.toUpperCase());
// console.log(myWord.toLowerCase());

// //Xóa khoảng trống dư thừa ở đầu và cuối trong chuỗi string.trim();
// var myFavorite = '  I Love To Going SomeWhere Peaceful  ';
// console.log('Trước khi xóa khoảng trống', myFavorite.length);
// console.log(myFavorite.trim());
// console.log('Sau khi xóa khoảng trống:', myFavorite.trim().length);

// //cắt chuỗi thành mãng(array) các giá trị - string.split('điểm chung');

// var myLanguage = 'PHP, Javascript, Java, Boostrap';
// console.log(myLanguage.split(', '));

// //cắt các ký tự thành giá trị trong mãng

// var myName = 'BanhThaiSon';
// console.log(myName.split('').length);

// //lấy giá trị dựa trên chỉ số index - string.charAt();

// var myLastName = 'Banh';
// console.log(myLastName.charAt(2));

// console.log(Math.floor(Math.random() * myLastName.charAt(3)));


// var myKey = 'Học Javascript tại F8';

// console.log(myKey.slice(5,14));
    

// var testStrg = 'Hoc Javascript tai F8';
// var getKeyWord ;
// var getLastPath;
// console.log(testStrg);
// // var secondStrg = 'Hoc Aascript tai F9';

// var myStrings = testStrg.slice(4);
// var myLast = myStrings.slice(10);
// console.log(myStrings);
// console.log(myLast);
// if(testStrg.indexOf('Javascript') != -1){
//   getKeyWord = testStrg.slice(testStrg.indexOf('Javascript'), 14);
// } else if(testStrg.indexOf('Avascript') != -1) {
//    var fixStrg = testStrg.replace('Avascript', 'Javascript');
//    getKeyWord = fixStrg.slice(fixStrg.indexOf('Javascript'), 14);
  
// }

// console.log(getKeyWord);





// b = true;
// var pi = 3.14;

// var a = (11).toString();
// console.log(typeof a);
// console.log(typeof b.toString());
// console.log(pi.toFixed(1));


// console.log(Number.isInteger(-55));






/*
=====================================
ARRAY - ARRAAY - ARRAAY
*/






// var myArray = [
//   'FullName',
//   'First Name',
//   18,
//   function myFunc() {

//   }
// ]

// console.log( myArray.toString());

// console.log(myArray.pop());
// console.log(myArray);
// console.log(myArray.push('Ruby', 'Java'));
// console.log(myArray.shift());
// myArray.unshift('F8', 'Dash', 'Github');
// console.log('Sau khi push:', myArray);
// myArray.splice(1, 0, 'Hello');
// console.log('Sau khi splice', myArray);

// var myArrayTwo = [
//   'One',
//   'Two',
//   'Three'
// ]
// console.log(myArrayTwo.concat(myArray));
// console.log(myArrayTwo.slice(0, 2));

// var petArray = [];
// console.log(petArray.pop());



/*
===================================
*/


// function callLog(messageLog) {
  
//   console.log(messageLog);

// }

// var myObj = {

//  firsName:'Java',
//  secondName: 'HTML5',
//  function myFunction(message){
//   console.log(message);
//  }
// }

// callLog(myObj);


// function myLanguage() {
  
//  console.log(arguments);
// }


// myLanguage(5, 'PHP', [1, 2, 3]);





// var a = 'Hoc a tai F8';
// var b = 'Javascript';
// function stringInString(a, b){
//   if(typeof a === 'string' && typeof b === 'string'){
//     if(a.indexOf('Javascript') != -1){
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }


// console.log(stringInString(a, b));

// myFunc();

// function myFunc() {
//   console.log('Hello');
// }



// var myFun = function() {
//   console.log('myFun');
// }

// Hello(Hello2, 'How are you');

// function Hello2(value) {
//   console.log(value);
// }

// var Hello = function myFun(Hello2, myString){
//     Hello2(myString);
// };


/*
====================================================
OBJECT
*/

// var myObj = {
//   name: 'Son Banh',
//   age: 18,
//   email: 'nguyentienlen98@gmail.com',
//   //tạo key với kí tự đặc biệt:
//   'my-address': 'Ho Chi Minh, VN'
// }

// //Thêm một key vào object
// myObj.phone = '0704548930';
// console.log(myObj);
// //thêm một key với kí tự đặt biệt
// myObj['family-Member'] = 5;
// console.log(myObj); 

// //Cách lấy một key của object
// //cách 1
// console.log(myObj['email']);
// //cách2
// console.log(myObj.email);
// //ta chỉ có thể sử dụng cách này để lấy các key có kí tự đặc biệt
// console.log(myObj['my-address']);

/*

console.log(myObj.my-address); => lỗi 

hoặc

console.log(myObj.'my-address') => lỗi

*/

// một key không tồn tại sẽ trả về undefined
// console.log(myObj.a);

// var address = 'addressName';
// //Định nghĩa(tạo) một key từ một biến
// var address = 'addressName';
// var phone_Key = 'phone';


// var myObject2 = {
//   'first-Name': 'Banh',
//   lastName: 'Son',
//   email: 'nguyentienlen98@gmail.com',
//   [phone_Key]: '0704548930',
//   [address]: 'Ho Chi Minh, VN',

// }


// //lấy ra key email từ biến myEmail và myObject2
// var myEmail = 'email';
// console.log(myObject2[myEmail]);
// // nếu ta dùng myObject2.myEmail => thì nó sẽ tìm đến key myEmail bên trong object
// // không thể sử dụng cách trên với các key được khai báo bên ngoài object 
// console.log(myObject2.myEmail);

// console.log(myObject2);


// //Xóa một key:
// delete myObject2.email;
// delete myObject2['first-Name'];
// console.log(myObject2);


// var myObj3 = {
//   'full-Name': 'Banh Thai Son',
//   age: 18,
//   phone: '0704548930',

//   getFullName: function() {
//     return this['full-Name'];
//   }

// }

// console.log(myObj3.getFullName());


/*
====================================
Object contrustor: đối tượng dựng
Tên của một Object contrustor theo quy định chung sẽ viết hoa chữ cái Đầu tiên
Object constructor là bản mẫu chung để tạo nên các đối tượng có chung đặc điểm
có thể coi Object constructor là bản thiết kế để thiết kế các đối tượng có cùng thuộc tính hoặc phương thức
*/

// var User = function(firstName, lastName, avatar) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.avatar = avatar,

//   // các this bên ngoài method đại diện cho các thuộc tính mà đối tượng có thể dùng
//   this.getName = function() {
//     return `${this.firstName} ${this.lastName}`
//     /*
//       this ở đây không đại diện cho đối tượng User
//       mà là đại điện cho từ khóa getName sẽ được gọi từ đối tượng
//     */
//   }
// }

// //Cách sử dụng


// //tạo một đối tượng từ Object contrustor đã khai báo
// var admin = new User('Son', 'Banh', 'Avatar1');
// console.log(admin);
// var user1 = new User('Lam', 'Thang', 'AvatarUser');
// console.log(user1);

// //Thêm một thuộc tính cho các đối tượng đã khởi tạo

// admin.phone = '0704548930';
// console.log(admin);
// admin.myMethod = function() {
//   return this.firstName;
// }
// console.log(admin.myMethod());

// user1.comment = 'ABC_XYZ';
// console.log(user1);
// console.log(user1.getName());

// var studenAge = 'student-Age';

// var student = {
//   // Property(thuoc tinh)
//   firstName: 'Banh',
//   'Middle-Name': 'Thai',
//   lastName: 'Son',
//   phone: '0704548930',
//   [studenAge]: 18,

//   // method(phuong thuc)
//   getFullName: function() {
//     return `${student.firstName} ${student['Middle-Name']} ${student.lastName}`
//   }
// }


// student.address = 'Ho Chi Minh, VN';
// var getLastName = 'lastName';
// delete student.firstName;
// delete student['Middle-Name'];
// delete student.lastName;


// console.log(student);
// console.log(student[getLastName]);
// console.log( student.getFullName());

// var nhanvienAddress = 'nvAddress';

// var Nhanvien = function(Nhanvienmaso, Tennv, NhanvienSDT, Ngayvaolam, nvAddress) {

// this.Tennv = Tennv,
// this.Nhanvienmaso = Nhanvienmaso,
// this.sdt= NhanvienSDT,
// this.Ngayvaolam = Ngayvaolam
// this[nhanvienAddress] = nvAddress;

// this.showNV = function() {
//   return `${this.Tennv} ${this.Nhanvienmaso} ${this.sdt} ${this.Ngayvaolam}`;
// }
// }

// var nhanVien1 = new Nhanvien('001', 'Banh Thai Son', '0704548930', '8/26/2021', 'Ho Chi Minh');
// var nhanVien2 = new Nhanvien('003', 'Dang Ngoc Lam', '0395234321', '7/20/2021', 'Ha Noi');
// nhanVien1.chucVu = 'Quan Ly';
// nhanVien2.chucVu = 'Nhan Vien';
// console.log(nhanVien1);
// console.log(nhanVien2);
// console.log(nhanVien1.showNV());
// console.log(nhanVien2.showNV());
// //lay contrustor của object
// console.log(nhanVien1.constructor);


/*
====================================
Object Prototype
nếu object contrustor là một bản thiết kế chung cho các đối tượng,
thì Object Prototype(Nguyên mẫu của đối tượng) sẽ được xem như nguyên liệu tạo nên một ngôi nhà
Object Prototype: như là một thuộc tính hoặc phương thức được thêm vào object contrustor từ bên ngoài mà không cần khai báo bên trong contrustor
với từ khóa this.property
cú pháp
construstorName.prototype.prototypeName = 'value';
*/

// function Hocsinh(tenHS, lopHS, tuoiHS) {
//   this.tenHS = tenHS,
//   this.lopHS = lopHS,
//   this.tuoiHS = tuoiHS
//   this.showHS = function() {
//     return `${this.tenHS} ${this.lopHS} ${this.tuoiHS}`
//   }
// }

// // khởi tạo một prototype cho đối tượng
// //tất cả các đối tượng được tạo qua contrustor Hocsinh dêu sẽ có thuôc tính prototype address
// //các thuoc tinh tạo bên ngoai ham khong the nhân tham so trong mot contrustor
// Hocsinh.prototype.address = 'Ho Chi Minh';

// //tạo một phương thức với prototype;
// // Đối với các phương thức được tạo với prototype. ta có thể sử dụng this để lấy các giá trị của đối tượng được khởi tạo
// Hocsinh.prototype.getInfo = function() {
//   // this ở đây tượng trưng cho đối tượng gọi tới hàm này(ở đây t thấy đối tượng hocSinh1 gọi tới hàm) => this la hocSinh1
//   return `${this.tenHS} ${this.lopHS} ${this.tuoiHS} ${this.address}`;
// }


// var hocSinh1 = new Hocsinh('Nguyen Van Tuan', '3A', 7);
// var hocSinh2 = new Hocsinh('Banh Thai Son', '5A', 10);
// console.log(hocSinh1);
// console.log(hocSinh1.getInfo());
// console.log(hocSinh2);
// console.log(hocSinh2.getInfo());


// var date = new Date();
// var myDate =  date;
// console.log(date);
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date);
// console.log(`${date.getDate()} / ${date.getMonth()}  ${date.getFullYear()}`);


// var date = 3;

// switch(date){
//   case 2: 
//     console.log('Hôm nay là thứ 2');
//     break;
//   case 3:
//     console.log('Hôm nay là thứ 3');
//     break;
//   case 4:
//     console.log('Hôm nay là thứ 4');
// }

// var myName = 'Tung';
// switch(myName){
//   case 'Son':
//   case 'Tung':
//   case 'Khanh':
//     console.log(`Tui là ${myName}`);
//     break;
//   case 'Thi':
//     console.log('Tui là Thi');
//     break;
//   default:
//   console.log('Không là ai hết');
// }


/*
=====================================
Toán tử 3 ngôi (Ternary Operator)

*/

// var myAge = 17;

// var result = myAge >= 18 ? 'Đã đủ 18 tuổi' : 'Chưa đủ 18 tuổi';
// console.log(result);

//myAge >= 18 : vế thứ nhất
//'Đã đủ 18 tuổi' : vế thứ hai
//'Chưa đủ 18 tuổi' vế thứ 3
/*
ý nghĩa: nếu biến myAge >= 18(myAge >= 18 ?) == true;
gán vế thứ 2 cho biến result('Đã đủ 18 tuổi')
Ngược lại: (false) => gán vế 3 cho biến result('Chưa đủ 18 tuổi')

*/

// var myName = 'Tung';
// var notMyName = `Đây là ${myName}`;

// var myResult = myName === 'Son' ? `Tui là ${myName}` : notMyName;
// console.log(myResult);

// console.log(Number.isInteger(6.8));


// function Student(studentName, studentAge, studentClassName) {
//   this.studentName = studentName;
//   this.studentAge = studentAge;
//   this.studentClassName = studentClassName;
// }

// Student.prototype.StudentAdress = 'Ho Chi Minh';

// var student1 = new Student('Bui Khanh Linh', 18, 'A02');

// for(let key in student1){
//   console.log(`${key}: ${student1[key]}`);
// }


/*
===========================
For Of : lặp qua các giá trị
*/

// var myLanguage = ['Ruby', 'PHP', 'Python', 'javascript'];

// // nếu dùng for in : giá trị khi in ra sẽ là các chỉ mục(tương ứng với các key) chứa giá trị của mãng 
// for(var value in myLanguage){
//   console.log(value);
//   // để lấy được giá trị bên trong các key với For in ta phải biến đổi một chút
//   // console.log(myLanguage[value]); vì biến value trả về các chỉ mục => myLanguage[value] tương ứng với mylanguage[int] = giá trị của vị trí đó
// }

// // nhưng nếu dùng For of: ta sẽ lấy được các giá trị bên trong các key
// for(var value of myLanguage){
//   console.log(value);
// }


// Lưu ý: For of không thể lặp qua các object(nếu dùng sẽ báo lỗi - Uncaught TypeError: myObj is not iterable)
// Để for of có thể lặp qua các object ta phải thêm các hàm hỗ trợ


// var myObj = {
//   myName: 'Son Banh',
//   myAge: 18,
//   address: 'Ho Chi Minh, VN'
// }

// //Sử dụng Object.keys(arrayName) để lấy ra các key của một object
// console.log(Object.keys(myObj));

// // đưa cấu trúc trên vào vòng for of ta sẽ nhận được value là các key của array
//  for(var value of Object.keys(myObj)){
//   //để lấy giá trị ta chỉ cần sử dụng ArrayName[value] tương tự như ArrayName[key];
//    console.log(`${value} : ${myObj[value]}`);
//  }


 /*
==========================================
While loop

 */

// var myAnimals = [
//   'Cat',
//   'Dog',
//   'Bear',
//   'Lion'

// ]


// var count = 0;
// var getLength = myAnimals.length;
// while(count <= getLength){
//   switch (count) {
//     case 0:
//       console.log(`I have a ${myAnimals[count]}`)
//       break;
//     case 1:
//       console.log(`I have a ${myAnimals[count]}`)
//       break;
//     case 2: 
//       console.log(`I have a ${myAnimals[count]}`)
//       break;
//     case 3: 
//       console.log(`I have a ${myAnimals[count]}`)
//       break;
//     default:
//       console.log('I don\'t have anything');
//       break;
//   }
//   count++;
// }




/*
Break và Continue

*/

// for(var i = 0; i < 10; i++){
//   if(i % 2 !== 0){
//       console.log(i)
//       break;
//   }
     
// }


/*
===========================
Vòng lặp lồng nhau
Nested loop
*/

// var myArray = [
//   [3,4],
//   ['Hello', 'Hi'],
//   [true, false],
//   [5, 6]

// ]


// for(var i = 0; i < myArray.length; i++){
//   for(var j = 0; j < myArray[i].length; j++){
//     console.log(myArray[i][j]);
//   }
// }


// for(var i = 100; i >0; i -= 5){
//   console.log(i);
// }


/*
===================================
Array(phần 2)
các phương thức trong array

*/
// var myDiv = document.getElementById('myDiv');

// var course = [
//   {
//     id: 1,
//     language: 'Ruby',
//     coin: 0
//   },

//   {
//     id: 2,
//     language: 'Python',
//     coin: 250
//   },

//   {
//     id: 3,
//     language: 'Javascript',
//     coin: 300
//   },

//   {
//     id: 4,
//     language: 'Ruby',
//     coin: 180
//   },

//   {
//     id: 5,
//     language: 'HTML5',
//     coin: 200
//   },

//   {
//     id: 6,
//     language: 'Dart',
//     coin: 0
//   }

// ]

// Lưu ý: các phương thức của mãng sẽ yêu cầu tham số truyền vào là một hàm để nhận giá trị trả về
 


/*
phương thức ForEach trong array ( tương tự như vòng lặp For in và For of): sẽ trả về phần tử của mãng

syntax: arrayName.forEach(function(value, index){
  value: chinh la tham số của hàm sẽ nhận vào các phần tử của mãng
  index: là chỉ mục của phần tử
  dosomething vơi biến value chẳng hạn như console.log(value);  , .v.v......
})
*/

// course.forEach(function(value, index) {

//   // tao them vong for de lay cac gia tri ben trong phan tu
//    for(var myKey in value){
//     console.log(index, value[myKey]);
//    }
// });

//Ta co the dung cach nay de lay con mang co phan tu la object

// for(var value of course){
//   for(var myKey of Object.keys(value)){
//     console.log(value[myKey]);
//   }
// }


// Kiem tra xem tất cả phần tử co thoa man dieu kien hay khong
/*
đối với every, nếu tất cả giá trị đều thỏa điều kiện, câu lệnh sẽ trả về true,
nêu sai sẽ trả về false,

Lưu ý: Tuy nhiên, nếu phần tử có điều kiện sai là phần tử đầu tiên, thì câu lệnh sẽ trả về false 
mà không cần xét các phần tử sau

việc xét tiếp các phần tử chỉ diễn ra khi phần tử đó thỏa điều kiện

*/
// var myCourse = course.every(function(value, index) {
//   return value.coin == 250;
// })

// console.log(myCourse);


// Phương thức some trả về true nếu tìm thấy một trong các phần tử thỏa điều kiện
//nếu không tìm thấy => trả vê false
//khác với every : phương thức some chỉ cần một phần tử thỏa điều kiện là được

// var isSuccess = course.some(function(course, index) {
//   return course.coin = 200;
// });

// console.log(isSuccess);



// var findCourse = course.find(function(course, index) {
//   return course.language === 'HTML5';
// });
//     console.log(findCourse);

// /*
// var findCourse = course.find(function(course, index) {
//   return course.language === 'AOE';
// });

// => kết quả in ra của biến findCourse là undefined do không có phần tử nào
// có giá trị 'AOE'được tìm thấy

// */



// var filterCourse = course.filter(function(course, index) {
//   return course.language === 'AOE';
// });

// console.log(filterCourse);

// // lấy ra các phần tử từ biến filterCourse
// for(var course of filterCourse){
//   for(var keyCourse in course){
//     console.log(`${keyCourse}: ${course[keyCourse]}`);
//   }
// }
  


// var formValues = [
//   {
//     field: 'name',
//     value: 'Sơn Đặng'
//   },

//   {
//     field: 'age',
//     value: 18
//   },

//   {
//     field: 'address',
//     value: 'Ho Chi Minh'
//   }


// ]


// function getRequestBodyFromValues(formValues) {
//     var getFieldName;
//     var getValue;
//     var groupObj = {};
//     var mergObj = {}
//     for(var i = 0; i < formValues.length; i++){
//            getFieldName = formValues[i].field;
//            getValue = formValues[i].value;
//             groupObj = {
//                 [getFieldName]: getValue
//             }    
//                mergObj = {...mergObj, ...groupObj};
//                groupObj = {};
//     }
//     return mergObj;

//   }

//   console.log(getRequestBodyFromValues(formValues));


// var myArray = [1, 2, 3, 4, 5];

// var allInteger = myArray.some(function(value){
//   return value < 0;
// });

// var oneNotInteger = myArray.every(function(value){
//   return value < 0;
// })

// console.log(allInteger, oneNotInteger);


//   var myResult = [];
//  var keyword = 'PHP';
//  var strings = ['Javascript', 'Hoc PHP', 'PHP'];
//  function findStringsInArrayByKeyword(keyword, strings) {
//   for(var i = 0; i < strings.length; i++){
//   if(strings[i].indexOf(keyword) === -1){
//     strings.splice(strings[i], 1);
//   }
// }

//   for(var value of strings){
//     myResult.unshift(value);
//   }
// return myResult;
// }

// var result = findStringsInArrayByKeyword(keyword, strings);
// console.log(result);


// var array1 = [1, 2 ,6 , 8];
// var array2 = [2, 9, 6];

// function findEqualvalues(array1, array2){
//   var resultArray = [];
//   for(var i = 0; i < array1.length; i++){
//     for(var j = 0; j < array2.length; j++){
//       if(array1[i] === array2[j]){
//         resultArray.push(array1[i]);
//        };
//     };
//   };
//   console.log(resultArray);
// }

//  findEqualvalues(array1, array2);


// var myNewArray = [
//   {
//     id: 1,
//     language: 'PHP',
//     coin: 250
//   },

//   {
//     id: 2,
//     language: 'Dart',
//     coin: 0
//   },

//   {
//     id: 3,
//     language: 'Javascript',
//     coin: 350
//   }
// ];

// function changedDetail(value, index, originArray){
//   //originArray: là mãng ban đầu(myNewArray)
//   //index: là số chỉ mục trong mãng của phần tử
//   //value: phần tử trả về
//   return {
//     id: value.id,
//     language: `Khoa hoc ${value.language}`,
//     coinText: `${value.coin} VNĐ`
//   }
// }

// var myRessult = myNewArray.map(changedDetail)

// console.log(myRessult);




// // Array.reduce: trả về tổng giá trị của một điều kiện cần tính : vd: tổng số coin khóa học
// function totalCoin(accumculator, curentValue, curentIndex, originArray) {
//   //accumculator: biến lưu trữ,
//   //curentValue: phần tử trả về;
//   //curentIndex: số chỉ mục trong mãng của phần tử
//   //originArray: mãng ban đầu(myNewArray)

//   return accumculator + curentValue.coin; 

// }

// var courseCoinSum = myNewArray.reduce(totalCoin, 0);
// console.log('Tổng số coin của các phần tử:', courseCoinSum)
// accumculator: biến lưu chữ chính là đối số(0) mà ta truyền vào ở phương thức reduce()
// biến lữu trữ ở đố sối của reduce có thể là bất kì kiểu giá trị nào như reduce(totalCoin, []) hoặc reduce(totalCoin, {1, 2, 3}), .......
/*
Cách hoạt động: mỗi lần lặp qua một phần tử: nó sẽ lấy giá trị biến lưu trữ(accumculator) 
+ giá trị cần lưu(ví dụ: currentValue.coin(số coin khóa học trong mãng));
Giá trị lưu trữ qua mỗi lần lặp là tổng của(giá trị lưu trữ trước đó + giá trị lưu chữ hiện tại)

kết quả cuối cùng return lại là tổng của(accumculator + và curentvalue.coin);
*/



// var myArray2 = [1, 2, 3, NaN, function() {}];

// var filterInt = myArray2.filter(function(value, index){
//   if(Number.isInteger(value)){
//     return value;
//   }
//   return filterInt;
// });

// console.log(filterInt);




//Cách định nghĩa một phương thức reduce2 cho một mảng

// Array.prototype.reduce2 = function (myCallback, initialValue) {
//     if (initialValue == undefined) {
//         initialValue = 0;
//     }
//     var total = initialValue;
//     for (var item of this) {
//         total = myCallback(total, item);
//     }
//     return total;
// }

// function myFunc(saveInt, value){
//   return saveInt + value;
// }

// var Array3 = [2, 5, 5, 7, 9];

// var getResult = Array3.reduce2(myFunc, 0)
// console.log(getResult);


// var myCourse  = [
//   {
//     id: 1,
//     Language: 'PHP',
//     coin: 250
//   },

//   {
//     id: 2,
//     Language: 'Laravel',
//     coin: 10
//   },

//   {
//     id: 3,
//     Language: 'Javascript',
//     coin: 300
//   },

//   {
//     id: 4,
//     Language: 'HTML5',
//     coin: 50
//   },

//   {
//     id: 5,
//     Language: 'CSS',
//     coin: 100
//   }
// ];


//trả về một array mới là các phần tử có key language của khóa học
// var toTalCoin = myCourse.reduce(function(arrayCourse, course, index){
//     return arrayCourse.concat(course.Language);
//  }, []);

// console.log(toTalCoin);



// // Làm phẳng một mảng(trả về một mảng mới gồm các phần tử trong mảng(không có các mảng con bên trong))
// var depthArray = [1, 2, 3, [1, 2], 5, 10, 4, [1, 2, 3]];
// var flatArray = depthArray.reduce(function(flat, value){
//   return flat.concat(value);
// }, []);

// console.log(flatArray);


// var arrayB = [1, 2, 3, 4, 5];

// Array.prototype.reduce2 = function(callback, initialValue){
//     var i = 0;
//     if(arguments.length < 2){
//         i = 1;
//         initialValue = this[0];
//     }

//     for(i; i < this.length; i++){
        
//       initialValue = callback(initialValue, this[i], i, this);
//     }
//     return initialValue;
// }



// var myResult = arrayB.reduce2(function(value, result){
//   return result + value;
// }, 0);

// console.log(myResult);



// var myArray = ['F8', 'F8lapTrinh'];

// console.log(myArray.includes('F8', 1));

// var myString = 'Hello F8';
// console.log(myString.includes('Hello',6));


/* 
===================================================
!!!!!!!!!!!!!!!!!!!!!!MATH OBJECT!!!!!!!!!!!!!!!!


*/
// //Lay so pi
// console.log(Math.PI);
// // Lam tron so(tuy vao so thap phan gan tren hoac gan duoi thi se lam tron tren hoac duoi - neu so la 1.5 thi se uu tien lam tron tren)
// console.log(Math.round(1.02));
// // lay gia tri tuyet doi cua mot so
// // co the dung Math.abs de chuyen mot so am thanh mot so duong
// console.log(Math.abs(-5));
// console.log(Math.abs(5));
// //Lam Tron tren
// console.log(Math.ceil(2.1));
// console.log(Math.ceil(-2.99999));
// console.log(Math.ceil(2.0000002222));
// // mac dinh neu cac so thap phan la 0 thi se tu hieu la 4 tron
// console.log(Math.floor(4.0000000));
// // Lam tron duoi
// console.log(Math.floor(4.9999999));
// console.log(Math.floor(-4.9999999));
// // mac dinh neu cac so thap phan la 0 thi se tu hieu la 4 tron
// console.log(Math.floor(4.0000000));
// //Random mot so:
// console.log(Math.random());
// //ket hop math.floor de random mot so tu 1 > 4
// //ket hop math.ceil de random mot so tu 1 > 5
// console.log(Math.floor(Math.random()* 5));
// console.log(Math.ceil(Math.random() * 5));

// // in ra mot phan tu cua mang dua tren so random(dua theo chi muc cua moi phan tu)
// var randomItem = Math.floor(Math.random() * 4);
// var gameItem = [
//   '10 coin',
//   '20 coin',
//   '40 coin',
//   '50 coin'
// ];
// console.log(gameItem[randomItem]);

// /* 
// ty le random vao moi phan tu se la ty le deu, neu muon tang ty le random khong roi vao 
// cac phan tu tren, thay vi nhan 4, ta se nhan voi so lon hon
// => ty le roi vao cac phan tu cua mang se it hon
// */
// // do chi co 4 phan tu nen neu random khoi roi vao ph tu nao thi se la undefined(do khong co phan tu tuong ung voi random chi muc)
// var randomHarder = Math.floor(Math.random() * 50);
// console.log(gameItem[randomHarder]);


// //Lay ra so lon nhat
// console.log(Math.max(100, 50, 200, 199, 1));
// // Lay ra so be nhat
// console.log(Math.min(50, 20, 1, -5, 30 , -10, -8));


// // =========================Callback ===========================

// function tinhTong2so(a, b, printOnScreen){
//   var result = a + b;
//   // gọi lại function printOnScreen và truyền vào biến tổng 2 số a + b

//   //Note: Để chắc chắn một tham số nhận vào là một callback(hàm) ta nên kiểm tra với if trc khi nhận vào
//   if(typeof printOnScreen === 'function'){
//     printOnScreen(result);
//   }
// }


// function printOnScreen(result){
//   // Xuất biến tổng đã được truyền từ tinhTong2so ra man hình
//   console.log('Tổng 2 số a + b là: ', result);
// }

// // truyền function printOnScreen vào function tinhTong2so
// tinhTong2so(5, 2, printOnScreen);

/* 
Thế nào là callback:
là function được truyền vào một function khác(là đối số)
Được gọi lại ở trong function khác

Điều kiện để một function trở thành một callback
1: Là hàm
2: Được truyền qua đối số
3: được gọi lại trong hàm nhận đối số
*/



// Callback 2

// var fruitArray = [
//   {
//     name: 'durian',
//     amount: 30,
//     price: 15000
//   },
  
//   {
//     name: 'Mango',
//     amount: 2,
//     price: 10000
//   },

//   {
//     name: 'Apple',
//     amount: 5,
//     price: 20000
//   },

//   {
//     name: 'Orange',
//     amount: 10,
//     price: 20000
//   }
// ];




// Phuong thuc find 2


// Array.prototype.find2 = function(callBack){
//   var arrayLength = this.length;
//   var myObj = {};
//   var result;
//   for(var i = 0; i < arrayLength; i++){
//     result = callBack(this[i], i);
//     if(result == true){
//       myObj = {...myObj, ...this[i]};
//       break;
//     } else {
//       myObj = undefined;
//       continue;
//     }
//   }
 

//   return myObj;
  
// }

// var myResult = fruitArray.find2(function(fruit, index){
//   return fruit.price == 20000;
// })

//  console.log(myResult);

// console.log(myResult);


// var  arrayItem = [
//   'Javascript',
//   'HTML5'
// ];
// arrayItem.length = 10;

// console.log(arrayItem);

// //vòng for: không được sử dụng để lặp qua các phần tử trong mảng,
// /* 
// lý do ta ứng dụng vòng for là do vị trí i khởi tạo là 0 (bằng với chỉ mục đầu tiên của mảng) và 
// logic của nó phù hợp để lặp qua các phần tử,
// nhưng nếu trong một mãng có độ dài lớn hơn số phần tử nó chứa hoặc trường hợp
// không có phần tử nào tồn tại nhưng độ dài của mảng là 10, khi ta dùng vòng for
// nó sẽ lặp theo độ dài mãng và xuất cả những vị trí rỗng không có phần tử nào,
// thay vì chỉ xuất ra 2 phần tử tồn tại trong mãng
// Để khắc phục điều đó, ta sẽ sử dụng vòng For/in để lặp

// */
// for(var i = 0; i < arrayItem.length; i++){
//   console.log(arrayItem[i]);
// }


// //Sử dụng var In để lặp qua mãng gồm các phần tử thực có trong 
// //Vòng For/in sẽ chỉ lặp qua các chỉ mục tồn tại(tức là có phần tử tồn tại trong mãng)
// // thay vì lặp qua tất cả như vòng for
// for(var item in arrayItem){
//   console.log(arrayItem[item]);
// }

// var courseArray = [
//   'Javascript',
//   'PHP',
//   'HTML5',
//   'Dart',
//   'Python',

//   {
//     name: 'Durian',
//     price: 30
//   },

//   {
//     name: 'Orange',
//     price: 30
//   }
// ];



// tao phuong thuc ForEach2

// Array.prototype.forEach2 = function(callback){
//   /* 
//   lưu ý với hàm For/ In: hàm for in sẽ lặp cả các phần tử có trong prototype do ta định nghĩa
//   vì ta định nghĩa  phương thức forEach2 cho Array contrustor, và khi Array contrustor có phương thức gì
//   thì những  array được khởi tạo(từ Array contrustor) sẽ được thừa hưởng các phương thức của 
//   Array contrustor, bao gồm các phương thức mà ta định nghĩa
//   các phương thức mới mà ta định nghĩa sẽ nằm ở trong phần [[Prototype]] và sẽ sáng lên
//   và tính chất của vòng For / in là ngoài duyệt qua các phần tử(property) thì còn duyệt qua cả element nằm trong phần prototype (chính là phương thức mà ta định nghĩa)
//   */
//   for(var course in this){
//     /* 
//     sử dụng phương thức hasOwnProperty() để kiểm tra item trả về có thuộc phần tử gần nhất của mảng hay không
//     this: ở đây là Array gọi đến phương thức forEach2(là courseArray trong trường hợp này)
//     */
//     if(this.hasOwnProperty(course)){
//       callback(this[course], course, this);
//     }
//   }
// };

// courseArray.forEach2(function(item, index, originArray){
//   console.log(index, item, originArray);
// });

// =====================dinh nghia ham Filter2 cua Array=================


// Array.prototype.filter2 = function(callback){
//   var result ;
//   var outPutArray = [];
//   for(var item in this){
//       if(this.hasOwnProperty(item)){
//        result = callback(this[item], item, this)
//        if(result){
//          outPutArray.push(this[item]);
//        }
//       }
//   }
//   return outPutArray;
// };

// var Result = courseArray.filter2(function(item, index, array){
//   return item.price == 30;
// });

// console.log(Result);

// var boxHTMLCollection = document.getElementsByClassName('box');
// var box1Element = document.querySelector('.box:first-child');
// var box2Element = document.querySelector('.box:last-child');
// var allItemElements = document.getElementsByTagName('li');
// var box1ItemElements = document.querySelectorAll('.box:first-child .item');
// var box2ItemElements = document.querySelectorAll('.box:last-child .item');





// console.log(boxHTMLCollection);
// console.log(box1Element);
// console.log(box2Element);
// console.log(allItemElements);
// console.log(box1ItemElements);
// console.log(box2ItemElements);

// var checkboxNodes = document.querySelectorAll('input');
// console.log(checkboxNodes);

// var checkbox1Element = checkboxNodes[0];
// var checkboxCheckedAndNotDisabled = checkboxNodes[1];
// var checkboxDisabledAndNotChecked = checkboxNodes[2];
// var checkboxCheckedAndDisabled = checkboxNodes[3];
// console.log(checkboxDisabledAndNotChecked);
// console.log(checkboxCheckedAndDisabled);

// console.log(document.forms['form-1']);

// var divBox1 = document.querySelector('.box-1');
// console.log(divBox1);

// // sử dụng element đã select để select đến element con của element đó
// var itemNodesBox1 = divBox1.querySelectorAll('ul > li');
// var selectbyTagName = divBox1.getElementsByTagName('li');
// console.log(itemNodesBox1);
// console.log(selectbyTagName);


// var divBox2 = document.querySelector('.box-2');
// console.log(divBox2);
// var getItemsBox2 = divBox2.getElementsByClassName('myItem');
// console.log(getItemsBox2);

// var myHeading = document.querySelector('h1');
// myHeading.setAttribute('Class-color', 'Orange');
// myHeading.setAttribute('href', '#');
// var getHeadingA = myHeading.getAttribute('class-color');
// console.log(getHeadingA);
// console.log(myHeading.getAttribute('class'));
// myHeading.setAttribute('class-color', 'Blue');
// console.log(myHeading.getAttribute('href'));
// console.log(myHeading.className);


// var myHeading2 = document.querySelector('h2');
// var upperHeading = myHeading2.title.trim().toUpperCase();
// console.log(upperHeading);
// console.log(myHeading2.title.indexOf('2'));


// var f8LinkElement = document.querySelector('a');
// var f8ShortLink = f8LinkElement.href;
// f8LinkElement.nextElementSibling.href = f8ShortLink;

// console.log(f8LinkElement.nextElementSibling.text);


// var myHeading3 = document.querySelector('h3');

//về cách lấy ra text node từ html

//đối với innerText;
// console.log(myHeading3.innerText); 

/* kết quả:  Hoc lap trinh tai F8 */

//đối với textContent
// console.log(myHeading3.textContent);

/* 
kết quả:



		Hoc lap trinh

		tai F8
	

*/


//Ve cách set phần tử

// myHeading3.textContent = `

//  Hoc Lap trinh

//  Tai Howkteam
// `;

// console.log(myHeading3.textContent);
// console.log(myHeading3.innerText);




// mẹo xem các thuộc tính của node element, attribute node hoặc text node

// var myHeading = document.querySelector('h1');
// var myP = document.querySelector('.myPara');
// var myDiv = document.querySelector('div');
// console.log([myDiv]);
// console.log(myDiv.firstChild.textContent);

// var myContainer = document.querySelector('div');
// console.log(myContainer.style);



//Cách thêm nhiều style vào element mà không cần khai báo nhiều lần
// Object.assign(myContainer.style, {
// 	width: '300px',
// 	height: '100px',
// 	backgroundColor: 'green',
// });


/* 
==================================
Classlist property


add
remove
contains
toggle


*/

var myHeading = document.querySelector('h1');


//Them class vao element h1
// myHeading.classList.add('redColor', 'blueColor', 'Black-color', '#');
//xoa class element h1
// myHeading.classList.remove('#', 'Black-color', 'blueColor', '1');

// console.log(myHeading);

// // kiem tra xem mot class co ton tai trong element h1 khong / kieu tra ve: boolean
// console.log(myHeading.classList.contains('blueColor'));

// // su dung toggle(kiem tra neu co class thi se xoa, neu khong co thi se tu them vao)

// var a = setInterval(()=> {
// 	myHeading.classList.toggle('red');
// }, 3000)
 


// ========================================================

/* 
DOM EVENT

su dung Attribute event trong element tag

gan(assgin) event cho element(su dung khi voi external file js)


*/


//Attribute Event
/* 
 cach 1 : <h2 onclick= 'console.log("myHeading2")'>myheading2</h2>


 cach 2: gan function cho su kien(giong nhu mot callback khi click vao thi su kien se goi ham callback nay)

 <h2 onclick= 'myFunc()'>myheading2</h2


 function myFunc() {
	 console.log('myHeading2')
 }

*/ 



//Asign Event

/* 
html code: <h2>myheading2</h2>


 var myHeading2 = document.querySelector('h2')
 myHeading2.onclick = function(event) {
	//bien event se nhan vao element Node goi den su kien onlick
	console.log(event.target) // in ra element node  goi den event onclick nay
 };
*/

// su dung Assign event gan event cho nhieu the h1

/* html code

<div>
	<h1>Heading1</h1>
	<h1>Heading2</h1>
	<h1>Heading3</h1>
</div>

*/

// var h1lists = document.querySelectorAll('h1');

// for(var i = 0; i < h1lists.length; i++){
// 	h1lists[i].onclick = function(e) {
// 		console.log(e.target.style.backgroundColor = 'blue');
// 	}
// }

// var myCheckBox = document.querySelector('input[type="checkbox"');
// myCheckBox.onchange = function(e) {
// 	if(e.target.checked){
// 		console.log('checked');
// 	} else {
// 		console.log('unchecked');
// 	}
// }

// var inputText = document.querySelector('input[type="text"');
// console.log(inputText);
// inputText.onkeydown = (e) => {
// 	console.log(e.target.value);
// }

// document.onkeydown = function(e) {
// 	console.log(e.key);
// }

// var mySelect = document.querySelector('select');
// mySelect.onchange = (e) => {
// 	console.log(e.target.value);
// } 
// console.log(mySelect);



/* 
========================================
PreventDefault() và stopPropagation()
ngăn chặn thực thi sự kiện và ngăn chặn hiện tượng sủi bọt event



*/


// var myALists = document.links;
// console.log(myALists);

// for(var i = 0; i < myALists.length; i++){
// 	myALists[i].onclick = function(event) {
// 		console.log(event.target.href);
// 		if(!event.target.href.startsWith('https://fullstack.edu.vn/')){
// 			event.preventDefault();
// 		}
// 	}
// }

// var liItems = document.querySelectorAll('li');
// console.log(liItems);

// var UlElement = document.querySelector('ul');
// UlElement.onmousedown = (e) => {
// 	e.preventDefault();

// }


// for(var i = 0; i < liItems.length; i++){
// 	liItems[i].onclick = (e) => {
// 		console.log(e.target.innerText);
// 	}
// }


// var myFirstA = document.querySelector('a');
// console.log(myFirstA);
// myFirstA.onclick = function(event) {
// 	console.log(event.target.href);
// }


// var myDiv = document.querySelector('div');

// var mybtn = document.querySelector('button');

// myDiv.onclick = ()=> {
// 	console.log('Div Parent');
// }


// mybtn.onclick = (e)=> {
// 	e.stopPropagation();
// 	console.log(e.target.innerText);
// }




/* 
=======================================
AddEventListener()

*/

// function getInnerText(event) {
// 	event.stopPropagation();
// 	console.log(event.target.innerText);
// }

// var firstHeading = document.querySelector('h1');



// var btnAdd = document.querySelector('#addEvent');
// var btnRemove = document.querySelector('#removeEvent');
// btnAdd.onclick = (e)=> {
// 	firstHeading.addEventListener('click', getInnerText);
// 	setTimeout(()=>{
// 		e.target.style.display = 'none';
// 	}, 3000)
// }

// btnRemove.onclick = function() {
// 	firstHeading.removeEventListener('click', getInnerText)
// 	btnAdd.style.display = 'inline-block';
// }





/* 
==========================================
==============================
================
==========
JavaScript Object Notation(JSON)
JSON ==== JSON ==== JSON

JSON ==== JSON ==== JSON
JSON ==== JSON ==== JSON
JSON ==== JSON ==== JSON


//JSON là gì:
 	JSON là một định dạng dữ liễu(thể hiện các dữ liệu ở kiểu chuỗi)
//Các kiểu dữ liệu có thể sử dụng trong JSON
 	Number,String,null,Boolean,Object,Array
//Convert Javascript sang định dạng JSON
JSON.stringify('javascript value')
//Convert định dạng JSON sang Javascript
JSON.Parse('JSON value')
*/

//Cách thể hiện một JSON

// var i = '1';
// var myName = '"Sơn Bành"';
// var isSuccessed = 'true';
// var z = 'null';
// var myArray = '["Javascript","PHP","GoLang"]';
// var myObj = '{"name":"Sơn Bành","age":18,"Coursecompleted":true,"Type":null}';

// //convert JSON sang Javascript(JSON.parse())
// console.log(JSON.parse(i)); //Number
// console.log(JSON.parse(myName)); //String
// console.log(JSON.parse(isSuccessed)); //Boolean
// console.log(JSON.parse(z)); //null
// console.log(JSON.parse(myArray)); //Array(type của Array Object)
// console.log(JSON.parse(myObj)); // Object


// //Convert Javascript sang JSON(JSON.stringify())
// console.log(JSON.stringify(1));
// console.log(JSON.stringify("Sơn Bành"));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify(null));
// console.log(JSON.stringify(undefined));
// console.log(JSON.stringify(['PHP', 'Java', 'HTML5']));
// console.log(JSON.stringify({name: "Sơn Bành", age: 18, isCompleted: true, Type: null}))



//Callback hell trong promise hay còn gọi là pyramid of doom
// setTimeout(()=>{
// 	console.log(1);
// 	setTimeout(()=>{
// 		console.log(2);
// 		setTimeout(()=>{
// 			console.log(3);
// 			setTimeout(()=>{
// 				console.log(4);
// 			}, 1000)
// 		}, 1000)
// 	}, 1000)
// }, 1000)



/* 
=================================================
Promise lý thuyết và thực hành
khởi tạo một Promise với từ khóa new Promise(gọi đến contrustor của Promise)
Promise: được sinh ra để xử lý các thao tác bất đồng bộ - giải quyết hiện tượng callback hell(pyramid of doom)
Promise được hỗ trợ từ ES6(phiên bản javascript thứ 6)


Các bước tạo ra một Promise
1: New Promise (khởi tạo một new Promise gán cho một biến)
2: Executor( đối số truyền vào Promise là hàm thực thi )

var promise = new Promise(
		//viet code logic ở đây(tùy theo logic nếu chúng ta kiểm một điều kiện - nếu ta biết logic đó là đúng(điều kiện đúng),
		thì ta chỉ gọi hàm resolve(value) và trả giá trị vào hàm value;
		nếu ta biết logic đó sai, thì gọi hàm reject và truyền mã lỗi vào hàm reject(eror)

		resolve(value) // thành công
		reject('error msg') // thất bại
		gọi một trong 2 nếu chắc chắn sẽ thành công hay thất bại / không thì gọi cả 2 
	}
)

Các trạng thái của Promise(states)
pending - (trạng thái chờ - xảy ra khi không có resolve() hay reject() ở function đối số truyền vào contrustor Promise)
fullfilled - (trạng thái thành công - khi promise có resolve() - ở function đối số truyền vào contrustor Promise)
Rejected - (trạng thái thất bại - khi promise có reject() - ở function đối số truyền vào contrustor Promise)

nếu để resolve(value) và reject("error message") : trạng thái sẽ là fullfilled
nếu nhận được value thì sẽ rơi vào resolve() 
nếu resolve() không nhận được value thì sẽ thực thi reject() và in ra thông báo lỗi được truyền vào reject ở hàm catch(eror mesage)

Ở trạng thái pending - bộ nhớ sẽ bị rò rỉ(leak memory) - lãng phí bộ nhớ - chờ tải

==========================
nhận giá trị với Promise.then(value) hoặc nhận thông báo lỗi với Promise.catch(error)

nếu Promise được resolve(value) nhận được kết quả promise thành công(fulfilled)
=> phương thức Promise.then(function(value){
	console.log(value)   // đây là kết quả nhận được
})

Nếu Promise bị rejected - reject("eror message") được thực thi
=> phương thức Promise.catch(function(error){
	console.log(error) // đây là eror message nhận được ở reject
})



Lưu ý: nếu không đặt catch() khi promise bị reject(rejected state) ta sẽ gặp lỗi ở console.log:

Lỗi: Uncaught (in promise) Rejected - do không catch() bắt lỗi ở phần nhận giá trị(không có Promise.catch())
*/

// var a = 1;

// var studentF8 = 
// '[{"ID":1,"name":"Son Banh","Class":"12A1","Course learned":"PHP","State": true}, {"ID":1,"name":"Son Banh","Class":"12A1","Course learned":"PHP","State": true}]';
// //studentF8 được giả định là một dữ liệu định dạng JSON
// //typeof studentF8 la kiểu strings(định dạng dữ liệu của JSON được thể hiện là các chuỗi ký tự)
// var myPromise = new Promise(
// 	//Executor function
// 	function(resolve, reject){
// 		// reject("error message", error code);

// 		//đây là giả định phần logic code kiểm tra if else(không liên quan đến bài học)
// 		if((typeof studentF8) === 'string'){
// 			resolve(studentF8);
// 		} else {
// 			reject("Xảy ra lỗi");
// 		}
// 	}
// );

/* 
ĐÂY là structure(cấu trúc) của một promise // để nhận kết quả từ promise trả về xem tiếp phần bên dưới

var myPromise = new Promise(
	function(resolve, reject){
			resolve(value); // promise thành công(được thực hiện)
			hoặc reject(eror); promise không thành công(không được thực hiện)

	}
)

*/


//để nhận giá trị trả về(ta có 2 phương thức)
//Promise.then(callback(value){})=> khi promise được resolve được thực thi - kết quả trả về thành công
//Promise.catch(callback(value){})=> khi promise bị reject (thât bại) - kết quả trả về là lỗi

// myPromise
// .then(function(studentF8) {
	

// 	// Phần này nằm ngoài bài học(Cách lấy kết quả từ promise và render(hiển thị) ra giao diện)
// 	var getStudents = JSON.parse(studentF8);
// 	var total = 1;
// 	// sử dụng JSON.parse() để convert data định dạng JSON sang Javascript
// 	var student = getStudents.map(function(student, index, array){
// 		return `<div id="number${total++}"><p>${student.ID}</p><p>${student.name}</p><p>${student.Class}</p></div>`;
// 	})
	
// 	var html  = student.join('');
// 	document.querySelector('.myArea').innerHTML = html;
// })
// .catch(function(error) {
// 	console.log(error);
// })



// /* 
// Promise(chain): tính chất chuỗi trong promise
// giải quyết callback hell với tính chất chuỗi trong promise


// */

// var secondPromise = new Promise(
// 	//Executor
// 	function(resolve, reject){
// 		resolve();
// 	}
// );

// secondPromise
// 	.then(function() {
// 		console.log(1);
// 		//return về 2 / 2 này sẽ được .then() thứ nhất nhận và truyền vào qua biến data ở .then(dâta) thứ 2
// 		return 2;
// 	})
// 	.then(function(data) {
// 		console.log(data); // giá trị ở biến data này là 2( được .then() thứ nhất truyền vào)
// 		return 3;
// 	})
// 	.then(function(data) { //giá trị data ở đây là 3(được .then() thứ 2 nhận từ return ở hàm callback của nó và truyền vào biến data ở .then() thứ 3
// 		console.log(data);
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	})

// var thirdPromise = new Promise(
// 	function(resolve, reject){
// 		resolve();
// 	}
// 	)

// thirdPromise
// 	.then(function(){
// 		return new Promise(function(resolve) {
// 			setTimeout(function(){
// 				resolve([1, 2, 3]);
// 			}, 3000);
// 		})
// 	})
// 	.then(function(data) {
// 		console.log(data);
// 	})
		/*  
		return Promise ở đây tương tự như việc ta khởi tạo một Promise bình thường
		ở callback của chuỗi .then() này ta return một new promise()
		và gọi resolve sau 3 giây
		kết quả callback return về một Promise sau 3s, 
		.then() thứ nhất nhận return từ callback là một Promise,
		.then() thứ nhất lúc này giống như một Promise
		Nói cách khác, .then() thứ nhất sẽ return lại cho ta giá trị mà return ở callback của nó trả về
		nên ta có cấu trúc:

		thirdPromise
			Promise
				.then() kế tiếp



		Giá trị nhận được ở .then() tiếp theo là mảng [1, 2, 3] được gọi ở resolve của .then() thứ nhất sau 3s
		*/ 
	

	/* 
	ta có thể xem các hàm .then(), .catch(), .finally() là những khối code, 
	Các khối code này được nối với nhau khối code kế tiếp một cách tuần tự (ta gọi đây là chuỗi trong promise)
	Với tính chất chuỗi của promise, khi một  resolve() được promise gọi tới, ta có thể có nhiều chuỗi(hàm) .then() ở phần nhận giá trị từ promise
	các hàm .then() được thực thi theo tính chất chuỗi(cái nào đứng trước sẽ thực thi trước và tuần tự nhau)
	
	giá trị trả về khi sử dụng return trong callback function của .then() hoàn toàn có thể nhận được ở các hàm .then() kế tiếp
	

	.then(function(){
		console.log(1);
		//return về 2 / 2 này sẽ được .then() thứ nhất nhận và truyền vào qua biến data ở .then(dâta) thứ 2
		return 2;
	})
	.then(function(data){
		console.log(data); // giá trị ở biến data này là 2( được .then() thứ nhất truyền vào)
		return 3;
	})
	.then(function(data){ //giá trị data ở đây là 3(được .then() thứ 2 nhận từ return ở hàm callback của nó và truyền vào biến data ở .then() thứ 3
		console.log(data);
	})
	.catch(function(error){
		console.log(error);
	})






	1: Tính chất chuỗi trong promise cho phép ta khi sử dụng resolve(), sẽ tạo được nhiều chuỗi .then()
	khi resolve() được thực thi, code sẽ lọt vào hàm then() thứ nhất, khi hàm then() thứ nhất xử lý xong, sẽ chạy vào hàm then() kế tiếp, 
	và cứ tuần tự cho đến cuỗi cùng (tính chất chuỗi trong promise)

	2: callback trong chuỗi .then() thứ nhất return về cái gì, ta hoàn toàn có thể nhận được nó ở chuỗi .then() kế tiếp
	Từ ý thứ 2. ta đã  giải quyết được 1 phần của callback hell(giải quyết được việc code bị rối, khó nhin - pyramid of doom)
	Do tính chất chuỗi, nên khi callback trong .then() thứ nhất return, .chuỗi .then() sẽ nhận vào giá trị từ callback và truyền nó vào callback ở chuỗi .then() kế tiếp,
	và công việc lại tiếp tục lặp lại cho đến khi .then() cuối cùng thực thi xong
	
	3: Nếu ta không return bất cứ gì ở callback của .then() thì, giá trị nhận ở .then() kế tiếp sẽ là undefined (một function khi không return gì thì sẽ là undefined - không trả lại gì cả)

	4:Trong function callback của .then(): Nếu nó không return về một Promise thì .then kế tiếp sẽ được chạy ngay lặp tức(không có thời gian chờ)
	Nếu return của callback trong .then() là một Promise, thì .then() kế tiếp phải đợi cho đến khi Promise ở .then() phía trước thực thi xong, thì nó mới được chạy

	*/

	//giải quyết bài tập in ra mỗi số 1, 2, 3 sau 1 giây và vấn đề giá trị trả về khi sử dụng callback dẫn đến mô hình callback hell ( rối code, khó nhìn)

	// function sleep(timeSleep){
	// 	return new Promise(
	// 		function(resolve){
	// 			setTimeout(function(){
	// 				resolve('Come to here');
	// 				//gọi đến resolve sau khoảng thời gian là timeSleep
	// 			}, timeSleep);
	// 		}
	// 	)
	// }
	//bản thân sleep nhận lại return của callback ở trên là một Promise, nên sleep lúc này là một Promise
	//vậy nên ta có thể gọi hàm sleep(truyền vào timeSleep), và đồng thời có thể sử dụng .then() vì sleep đang là một Promise
	// sleep(1000)
	// 	.then(function(data){	
	// 		console.log(1);
	// 		console.log('First .then():', data);
	// 		return sleep(1000);
	// 	})
	// 	/* 
	// 	.then() này thực hiện trước rồi truyền giá trị sau đó return vê hàm sleep(1000) với khoảng thời gian chờ là 1 giây,  
	// 	đồng thời hàm sleep(1000) đang là Promise -> callback .then() này return về một Promise,
	// 	 .then() này nhận về promise từ callback của nó và nó trở thành một Promise
	// 	, Promise này tiếp tục .then() kế tiếp và trả giá trị data vào callback của .then() kế tiếp 
	// 	*/
	// 	.then(function(data){
	// 		console.log(2);
	// 		console.log('Second .then():', data);
	// 		return sleep(1000);
	// 	})
	// 	//chuỗi .then() thứ 2 tiếp tục thực hiện tương tự chuỗi .then() thứ nhất
	// 	.then(function(data){
	// 		console.log(3);
	// 		console.log('Third .then():', data);
	// 	})
	// 	.catch(function(error){

	// 	})


/* 
Promise là gì ?
	Promise là khái niệm được sinh ra giúp xử lý các thao tác bất đồng bộ( giải quyết vấn đề khi sử dụng callback trong xử lý bất đồng bộ 
		dẫn đến callback hell , làm cho code khó nhìn, rối)
	các bước để tạo một promise
	1:khởi tạo với từ khóa new Promise từ contrustor của Promise()
	2 đối số truyền vào Promise là một callback function(hay còn gọi là Executor - hàm thực thi)
	
	Executor sẽ nhận vào 2 hàm là resolve, và reject

	Khi Promise  gọi hàm resolve() // có nghĩa là Promise thành công
	code sẽ lọt vào hàm .then() và thực thi các xử lý bên trong hàm .then()

	khi Promise gọi hàm reject() // Promise bị từ chối
	code sẽ lọt hàm .catch() và thực thi các xử lý bên trong hàm .catch()

	khi truyền vào resolve một dữ liệu, ta sẽ nhận được nó ở tham số data của callback trong hàm .then(function(data){});
	tương tự như khi truyền tham số vào reject ta cũng sẽ nhận được nó ở tham số của callback trong hàm .catch(function(data){});
	
	
	//các trường hơp của Promise
//pending : khi Promise không gọi resolve hay reject
//fulfilled: khi Promise gọi  resolve() // thành công
//rejected: khi promise gọi reject() // thất bại


Nếu một Promise gọi resolve hoặc reject  nhưng không có bất cứ giá trị gì được truyền vào,
thì mặc định tham số data ở cả callback của .then() và .catch() đều là undefined



Với tính chất chuỗi trong Promise, ta hoàn toàn có thể thêm nhiều chuỗi .then() khi Promise gọi resolve() (Tính chất chuỗi trong promise
	sẽ thực thi từng chuỗi .then() theo thứ tự từ trên xuỗng dưới một cách tuần tự)

Cùng với đó khi callback của .then() ở vị trí đầu hay các vị trí kế tiếp return về giá trị gì thì ta hoàn toàn có thể nhận được giá trị đó ở các .then kế tiếp
qua tham số truyền vào của hàm callback trong các .then() ở vị trí kế tiếp của .then() return


// khi ta return về một giá trị trong hàm callback của .then() đầu tiên không phải là một Promise (  các .then() kế tiếp sẽ được thực thi ngay lập tức khi Promise gọi resolve())

//Nhưng khi ta return về một Promise ở vị trí .then() đầu tiên hoặc các .then() kế tiếp, các .then() nằm phía sau .then() return về một Promise sẽ phải cho đến khi 
callback của .then() mà return về một Promise thực thi xong, thì .then() kế tiếp mới được thực thi


trường hợp khi một callback của .then() return về giá trị không là một Promise - thì .then() đó sẽ return về giá trị đó và trở thành data của .then() kế tiếp

Trường hợp khi một callback của .then() return về một Promise , thì .then() đó sẽ return là một Promise giống như khi ta tạo một Promise(Promise này sẽ nằm lồng trong Promise mà ta đã tạo)

lúc này , ta có thể hiểu  chuỗi .then() đó đang là một Promise, và các chuỗi .then() kế tiếp sẽ có thể nhận được data từ Promise đó khi nó gọi resolve() hoặc khi nó gọi reject()
thì sẽ lọt vào hàm .catch() phía sau

*/


// function sleep(ms){
// 	return new Promise(
// 		(resolve, reject)=> {
// 			setTimeout(()=>{
// 				resolve();
// 			}, ms);
// 	}
// 	)
// }

// sleep(1000)
// .then(function(){
// 	console.log(1);
// 	return sleep(1000);
// })
// .then(function(){
// 	console.log(2);
// 	return new Promise(function(resolve, reject){
// 		reject('Lỗi')
// 	})
// })
// .then(function(){
	
// 	console.log(3);
// 	return sleep(1000);
// })
// .then(function(){
// 	console.log(4);
// })

// .catch(function(erro){
// 	console.log(erro);
// })


// var promise1 = new Promise(
// 	function(resolve, reject){
// 		resolve([1]);
// 	}
// )




// promise1
// .then(function(data){
// 	return new Promise(function(resolve){
		
// 		resolve(data.concat([2, 3]));
		
// 	})
// })
// .then(function(data){
// 	console.log(data);
// })
// console.log(myPromise);




/* 
========================================================
Lưu ý: Trong qua trình các chuỗi .then trong Promise  return một promise resolve(), nếu chuỗi nào return về một Promise reject(), thì các chuỗi kế tiếp sẽ .then() return về 
Promise resolve() kế tiếp sẽ ngừng chạy, và code sẽ tự động lọt vào catch() đo nhận được một Promise bị rejected 
Promise.resolve(); // khởi tạo một Resolve Promise (Promise luôn thành công)
Promise.reject();	// Khởi tạo một reject Promise (Promise bị từ chối)
Promise all(); //Sử dụng để thực thi 2 Promise cùng một lúc khi không có ràn buộc dữ liệu(thực thi song song cùng lúc 
và trả về kết quả cùng một lúc thay vì chạy tuần tự từng Promise như bình thường)


Với Promise.resolve() và Promise.reject(), ta sử dụng khi biết rõ logic được trả về là đúng hoặc sai
cách dùng này giúp code ngắn hơn khi khởi tạo một Promise như bình thường
//
*/

// var promise2 = Promise.resolve([1]);

// promise2.then(function(data){
// 	return new Promise(function(resolve){
// 		setTimeout(function(){
// 			resolve(data);
// 		}, 5000)
// 	})
// ;})
// .then(function(data){
// 	console.log(data);
// })

// var promise3 = new Promise(
// 	//Executor
// 	function(resolve, reject){
// 		setTimeout(function(){
// 			reject();
// 		}, 5000);
// 	}
// )

//sử dụng Promise.all() để thực thi 2 Promise song song(với điều kiện là không có ràn buộc về dữ liệu - không có dữ liệu nào liên quan với nhau)
//Điều kiện để Promise .all lọt vào .then() là cả 2 Promise kia phải đều được resolve(thành công) ( ở trang thái fulfilled)
//Trong trường hợp một trong hai Promise kia bị reject() (ở trạng thái từ chối(rejected)) thì Promise.all sẽ thực thi catch();
// Promise.all([promise2, promise3])
// 	.then(function(result){
// 			console.log(result);
// 			var myResult = result[0].concat(result[1]);
// 			console.log(myResult);
// 	})

// 	.catch(function(){
// 		console.log('eror');
// 	})






/* 
Ứng dụng thực tế:

Mô phỏng cách lấy comment từ các user và hiển thị lên giao diện

các user này có tên, và mỗi comment mà user đó comment sẽ là của user đó

trên mỗi comment. ta có một khóa user_id tương ứng với id trên mãng user để biết comment nào của user nào

Yêu cầu: hiện thị ra comment của các user với tên của user đó(format username: comment)

các bước:
1: tạo một hàm get comment và return một promise để lấy ra được comments trong mãng comment
2: trong mãng comments đã có ở hàm .then(), lấy ra user_id của các comments
3: với các user_id đã có, ta tạo hàm getUser truyền vào user_id , hàm getUser để lọc các user tương ứng với user_id



*/








// var users = [
// 	{
// 		id: 1,
// 		name: 'Son Banh'
		
// 	},

// 	{
// 		id: 2,
// 		name: 'Thanh Hoang'
// 	},

// 	{
// 		id: 3,
// 		name: 'Dinh Quy'
// 	},

// 	{
// 		id: 4,
// 		name: 'Nam Hung'
// 	}

// ]

// // var test = [1, 2, 3];
// // console.log(test.includes(1));


// var comments = [
// 	{
// 		id: 1,
// 		user_id: 1,
// 		content: 'Chào các bạn, Tui là Sơn'
// 	},

// 	{
// 		id: 2,
// 		user_id: 2,
// 		content: 'Hi, Tui là Hoàng 18+ :)'
// 	},

// 	{
// 		id: 3,
// 		user_id: 3,
// 		content: 'Tao là Quý nghiêm túc'
// 	},

// 	{
// 		id: 4,
// 		user_id: 3,
// 		content: 'Một + Một = 2'
// 	}
// ]




// //bước 1
// function getComments(){
// 	return new Promise(
// 		function(resolve, reject){
// 			setTimeout(function(){
// 				resolve(comments);
// 			}, 1000)
// 		}
		
// 	)
// }

// //bước 3
// function getUserByID(User_id){
// 	return new Promise(
// 		function(resolve, reject){
// 			//trỏ vào mãng users để lọc ra các user tương ứng với user_id của comment
// 			var userByID = users.filter(function(user){
// 				return User_id.includes(user.id);
// 			})
// 			setTimeout(function(){
// 				//gọi resolve(truyền vào user đã lọc)
// 				resolve(userByID);
// 			}, 1000)
// 		}
// 	)
// }





// // Nhận được User_id từ comment
// getComments()

// 	//bước 2
// 					//do return getUserByID(User_id) là một promise và được return, nên thằng .then() này return lại getUserByID(User_id) promise
// 	.then(function(comments){
// 		var User_id = comments.map(function(comment){
// 			return comment.user_id;
// 		})

// 		//getUserByID luc nay da la mot promise // return lại promise thì chuỗi .then() này sẽ nhận lại được Promise getUserByID(trở thành getUserByID promise)
// 		//bước 4
// 		return getUserByID(User_id)
// 			//return lại một object gồm 2 mãng / 1 là mãng user đã được lọc ở promise getUserByID, 2 là comments đã lấy được ở hàm getComents
// 			.then(function(user){
// 				return {
// 					user: user,
// 					comments: comments
// 				};
// 			})
		
// 		// console.log(User_id);
// 	})
// 		//bước 5
// 		//thằng .then này là của getUserByID(User_id) promise do .then() phía tren return về
// 	.then(function(data){ // data chính là object đã return ở bước 5
// 		console.log(data);
// 		var block_comment = document.querySelector('ul');
// 		console.log(block_comment);
// 		var html ='';
// 		data.comments.forEach(function(comment){
// 			var user = data.user.find(function(user){
// 				return user.id === comment.user_id;
// 			});
// 			html += `<li>${user.name}: ${comment.content}</li>`;
// 			console.log(html);
// 		});
// 		block_comment.innerHTML = html;
// 	})












/* 
Fetch API
API là gì: API viết tắt là Application Programming Interface - giao diện ứng dụng lập trình
theo cách hiểu khác: API là một cổng giao tiếp giữa các chương trình, giúp cho các chương trình khác nhau có thể giao tiếp và nhận, chuyển thông tin

hiểu đơn giản: backend sẽ cho chúng ta một url(url này là một API), qua url này, chúng ta sẽ dùng fetch để lấy ra được dữ liệu từ API đó

fetch(URL) // bước đầu tiền này sau khi truyền url vào fetch(), ta sẽ nhận được một promise, nên ta có thể sử dụng .then() ở bên dưới
	.then(function(response){ // ở đây ta chưa nhận được dữ liệu, mà sẽ nhận được một stream(luồng dữ liệu) -> chính là cái response bên trong,
		bản thân response này là một đối tượng, và đang giữ các dữ liệu mà ta cần lấy
		để lấy dữ liệu: từ thg response ta gọi phương thức json()( response.json() )
		response.json() lại là một promise, nên ta có thể gọi một thằng .then() kế tiếp và lấy dữ liệu bằng tham số ở trong callback của nó
		
		//các dữ liệu mà ta lấy được: mặc định đã được chuyển từ định dạng JSON sang javascript (Parse),
		nó đã được JSON.Parse(chuyển định dạng dữ liệu từ JSON sang Javascript) ngay khi ta gọi đến phương thức json() (response.json())
		nên ở tham số.then(function(data){}), tức là data ở thg callback, ta sẽ nhận được kiểu dữ liệu hoàn toàn ở kiểu Javascript, không còn là định
		dạng JSON nữa

	})

Fetch(API url)

*/


// var postAPI = 'https://jsonplaceholder.typicode.com/posts';
// console.log(postAPI);

// fetch(postAPI)
// 	.then(function(response){
// 		return response.json();
// 	})
// 	.then(function(posts){
// 		console.log(posts)
// 		var block = document.querySelector('ul');
// 		var postRender = posts.map(function(post){
// 			return `<li>
// 			<p>${post.id}</p><br>
// 			<h1>${post.title}</h1>
// 			</li>
// 			`;
			
// 		})
		
// 		var myPost = postRender.join('');
// 		block.innerHTML = myPost;
// 	})


//Bài tập fetch, lấy ra các bài posts có userid tương ứng với id của user



// var userLists = 'https://jsonplaceholder.typicode.com/users';

// var posts = 'https://jsonplaceholder.typicode.com/posts';


// function getPosts(){
// 	return fetch(posts)
// 		.then(function(response){
// 			return response.json();
// 		})

		
// 		.then(function(posts){
// 			var post_userId = posts.map(function(post){
// 				return post.userId;
// 			})
			
// 			return GetUser(post_userId)
// 				.then(function(users){
// 					return {
// 						posts: posts,
// 						users: users
// 					}

							
// 				})
// 		})
// 		.then(function(data){
// 			var html ='';
// 			var blockPost = document.querySelector('ul');
// 			var myPost = data.posts.forEach(function(post){
// 			var userOwnPost = data.users.find(function(user){
// 					return user.id === post.userId;
// 				})
// 				html+= 
// 				`
// 				<li>
// 					<p>${userOwnPost.name}: id:${userOwnPost.id}</p>
// 					<div>
// 						<p>PostID:${post.id} - Post_userID:${post.userId}</p>
// 						<h2>${post.title}</h2>
// 						<p>${post.body}</p>
// 					</div>
// 				</li>
// 				`;
// 			})
// 			 blockPost.innerHTML = html;
// 		})
	
// }

// function GetUser(post_userId){
// 	return fetch(userLists)
// 		.then(function(response){
// 				return response.json();
// 		})
// 		.then(function(users){
// 			var userByID = users.filter(function(user){
// 				return post_userId.includes(user.id);
// 			})
// 				return userByID;
// 		 })
// }


// getPosts();


// var photos = 'https://jsonplaceholder.typicode.com/photos';

// fetch(photos)
// 	.then((response)=> {
// 		return response.json(); 
// 		/* 
// 		//response.json() là một promise : ở đây nếu gọi API thành công 
// 		response.json() -> resolve() -> fulfilled(lọt vào .then())
// 		nếu gọi API thất bại: 
// 		response.json()-> đầu tiên sẽ ở trạng thái pending
// 		sau một khoảng thời gian nếu API vẫn không được gọi thành công
// 		response.json() -> reject() -> rejected(lọt vào .catch())
// 		*/
// 	})
// 	.then((photos)=>{
// 		var photoBlock = document.querySelector('.myArea');
// 		var albums = photos.map(function(photo){
// 			return `
// 			<div>
// 				<p>${photo.title}</p>
// 				<img src="${photo.url}" alt="">
// 			</div>
// 			`
// 		})
// 		return albums;
// 		// var result = albums.join('');
// 		// console.log(result);
// 		// photoBlock.innerHTML = result;
// 	})
// 	.then(function(albums){
// 		/* 
// 		với tính chất chuỗi của promise mà ta đã học, ta có thể nhận được giá trị return ở callback của
// 		.then() ở trên
// 		nếu .then() phía trươc return về một promise thay vì là những giá trị khác
// 		.then() này sẽ phải đợi cho đến khi promise ở .then trước giải quyết xong thì .then() này mới được chạy
		
// 		nếu ta return về một promise ở callback của .then(), thì  callback đó sẽ return về promise bên trong
// 		khi nó thực thi xong, . và .then() có cái promise mà callback đang giữ, sẽ return lại promise đó(trở thành promise đó),
// 		và ki ta sử dụng .then() tiếp theo, là ta đang trỏ đến promise mà .then() kia return(chứ không phải
// 			promise chính mà ta đã tạo)
		
// 		*/
// 		var photoBlock = document.querySelector('.myArea');
// 		console.log(albums);
// 		var result = albums.join('');
// 		console.log(result);
// 		photoBlock.innerHTML = result;
// 	})
		
	
// 	.catch(function(error){
// 		console.log(error);
// 	})




// var usersLists = 'http://localhost:3000/users';
// fetch(usersLists)
// 	.then(function(response){
// 		return response.json();
// 	})
// 	.then(function(users){
// 		console.log(users);
// 	})

// var myName = '     Son Banh';


/* 
==========================================================
cài đặt và Làm việc với Json server, xem bài 96 khóa học Javascript tại F8
Json server giúp chúng ta tạo ra được một fake API hoạt động dựa trên tiêu chuẩn của Rest API

*/


// var courses = ' http://localhost:3000/courses';
// fetch(courses)
// 	.then(function(response){
// 		return response.json();
// 	})
// 	.then(function(course){
// 		console.log(course);
// 	})




/* 
	Sử dụng postman để làm việc với API (Tạo mới, thêm, sửa, xóa CRUD)
	CRUD concept:


	C => Create (Tạo mới) 
	R => Read(có nghĩa là lấy dữ liệu từ API - Get)
	U => Update(Cập nhật, chỉnh sửa)
	D => Delete(Xóa)


	Rest API là gì: tìm hiểu 

	Để học postman: xem qua bài giao thưc httpProtocol ở khóa backend nodejs
	thông qua khóa học httpProtocol, ta thấy giao thức http có nhiều phương thức,
	nhưng các phương thức chính là : Post, Get, Put, Delete (Tạo, lấy, sửa, xóa)

	Json server hoạt động dựa trên tiêu chuẩn REST API và các fake API ta tạo ra hoạt động theo cách này

	Làm việc với json Server(làm việc với Rest API)
	
	tương tự với các giao thức http ta đã học ở bài httpProtocol
	khi làm việc với json Server(Json server hoạt động theo tiêu chuẩn Rest API)
	ta sẽ dùng các quy tắc bên dưới để làm việc như thêm, sửa,xóa, cập nhật dữ liệu vào API SERVER

	------------------------------------------------
	Create: tạo -> phương thức: POST
	Read: lấy dữ liệu ->: phương thức: GET
	Update: chỉnh sửa ->  phương thức PUT/PATCH
	Delete: xóa -> phương thức: DELETE

*/


var courseAPI ='http://localhost:3000/courses';


function start(){
	getCourse(renderCourse);
}

start()



//Function getCourses
function getCourse(renderCourse){
	fetch(courseAPI)
		.then(function(response){
			return response.json();
		})
		.then(renderCourse);
}


function renderCourse(course){
	var codeBlock = document.querySelector('ul');
	console.log(course);
		var courses = course.map(function(Coursee){
			return `
				<li>
				<h4>${Coursee.id}</h4> 
				<h1>${Coursee.name}</h1>
				<p>${Coursee.description}</p>
				</li>
			`;
		})

		var result =courses.join('');
		codeBlock.innerHTML = result;
}