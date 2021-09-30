var amountInput = document.getElementById('amountInput');
var qtyInput = document.getElementById('qtyInput');
var subTotal = document.getElementById('subTotal')
var amtTotal = document.getElementById('total')

var amountInput2 = document.getElementById('amountInput2');
var qtyInput2 = document.getElementById('qtyInput2');
var subTotal2 = document.getElementById('subTotal2')

var amountInput3 = document.getElementById('amountInput3');
var qtyInput3 = document.getElementById('qtyInput3');
var subTotal3 = document.getElementById('subTotal3')

var amountInput4 = document.getElementById('amountInput4');
var qtyInput4 = document.getElementById('qtyInput4');
var subTotal4 = document.getElementById('subTotal4')

var container = document.getElementById('container');

var grandTotal = document.getElementById('grandtotal');
var grandTotal2 = 0;

// localStorage.setItem('grandTotal', 0);

// var grandTotal = localStorage.setItem('grandTotal', 0);

// console.log(grandTotal);

function callItem() {
    var miniCal = amountInput.value * qtyInput.value; 
    subTotal.innerHTML = miniCal;
}
function callItem1() {
    var miniCal2 = amountInput2.value * qtyInput2.value; 
    subTotal2.innerHTML = miniCal2;
}
function callItem2() {
    var miniCal3 = amountInput3.value * qtyInput3.value; 
    subTotal3.innerHTML = miniCal3;
}
function callItem3() {
    var miniCal4 = amountInput4.value * qtyInput4.value; 
    subTotal4.innerHTML = miniCal4;
}

function doCal(){
     //typeof is to use to determine what kind of var the input is console.log(typeof amountInput.value)
    var bigCal = Number(subTotal.innerHTML) + Number(subTotal2.innerHTML) + Number(subTotal3.innerHTML) + Number(subTotal4.innerHTML);
    amtTotal.innerHTML = Number(bigCal);
}

var listHolder = document.getElementById('list-holder');

function addNew() {

    var divIn = document.createElement('div');
    divIn.classList.add('content-holder');
    listHolder.append(divIn);

    var amountInput = document.createElement('input');
    amountInput.classList.add('amount-input');
    amountInput.onchange = validation;
    divIn.append(amountInput);

    var qtyInput = document.createElement('input');
    qtyInput.classList.add('qty-input');
    qtyInput.onchange = validation;
    divIn.append(qtyInput);

    
    var subTotalInput = document.createElement('p')
    subTotalInput.classList.add('subTotal');
    subTotalInput.innerHTML = '0'
    divIn.append(subTotalInput);
}

function validation(){
    // console.log(this.parentNode);
    var listNode = this.parentNode;
    var inputList = listNode.querySelectorAll('input');
    var smallTotal = (inputList[0].value*inputList[1].value);

    // console.log(smallTotal);

    listNode.querySelector('p').innerHTML = smallTotal;

    
    grandTotal2 += smallTotal;
    console.log(grandTotal2);
    grandTotal.innerHTML = grandTotal2;

    sessionStorage.setItem('grandTotalSaved', grandTotal2);     //to declare what is to store in cache
    grandTotalSaved = sessionStorage.getItem('grandTotalSaved') //to pull back out what was stored in the cache
    console.log("saved:", grandTotalSaved);
   
}