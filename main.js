

 //cart option 
 let carts =document.querySelectorAll('.add-cart');
  let products =[
{
  name : "Pendrive",
  tag: "product1",
  price: 480,
  inCart: 0
},
{
  name : "Printer",
  tag:"product2",
  price: 2000,
  inCart: 0
},
{
  name : "Aux",
  tag:"product3",
  price: 150,
  inCart: 0
},
{
  name : "Mouse",
  tag:"product4",
  price: 560,
  inCart: 0
},
{
  name : "Keyboard",
  tag:"product5",
  price: 1800,
  inCart: 0
},
{
  name : "Screen Guard",
  tag:"product6",
  price: 600,
  inCart: 0
},
{
  name : "Mouse Pad",
  tag:"product7",
  price: 300,
  inCart: 0
},
{
  name : "Sd Card",
  tag:"product8",
  price: 2500,
  inCart: 0
    }
  ];


 for(let i=0;i<carts.length;i++){
  carts[i].addEventListener('click',()=>{
    cartNumbers(products[i]);
totalcost(products[i])

  })
 }
 function onLoadCartNumber(){
  let productNumbers=localStorage.getItem('cartNumbers');
if(productNumbers){
  document.querySelector('.nav2 span').textContent=productNumbers;

  }  
 }
 function cartNumbers(product){
 // console.log("product click is ",product);
let productNumbers = localStorage.getItem('cartNumbers');
//console.log(productNumbers);
//console.log(typeof productNumbers);
productNumbers=parseInt(productNumbers);
//console.log(typeof productNumbers);
 
//console.log(productNumbers);
if(productNumbers){
 localStorage.setItem('cartNumbers',productNumbers+ 1);
document.querySelector('.nav2 span').textContent= productNumbers+ 1;
}
else{
   localStorage.setItem('cartNumbers', 1);
document.querySelector('.nav2 span').textContent=1;

} 
setItems(product);
 }
 function setItems(product){
    //console.log("inside item is");
  //console.log("my product is",product);
  let cartItems=localStorage.getItem('productsInCart');
  cartItems=JSON.parse(cartItems);
if(cartItems!=null){
if(cartItems[product.tag]==undefined){
cartItems={
  ...cartItems,
  [product.tag]:product
      }
  }

  cartItems[product.tag].inCart+=1;
}
else{
 
  product.inCart=1;
 cartItems={
    [product.tag]:product
      }
   }
  localStorage.setItem("productsInCart",JSON.stringify(cartItems));
 }

function totalcost(product){
//console.log("the productprice is",product.price);
let cartcost=localStorage.getItem('totalcost');

console.log("my cart cost ",cartcost);
console.log(typeof cartcost);
if(cartcost!=null){
  cartcost=parseInt(cartcost);
localStorage.setItem("totalcost",cartcost+product.price);
}else {
  localStorage.setItem("totalcost",product.price);
  }
} 
function displaycart(){
let cartitems =localStorage.getItem("productsInCart");
cartitems=JSON.parse(cartitems);
let productcontainer=document.querySelector(".Products");

let cartcost=localStorage.getItem('totalcost');
console.log(cartitems);
if(cartitems&& productcontainer){
  productcontainer.innerHTML='';
  Object.values(cartitems).map(item =>{
    productcontainer.innerHTML +=`
     <div class ="prdouct">
        <ion-icon name="close-circle-outline"></ion-icon>
       <img src="../PROJECT/image/${item.tag}.jpg">
          <span>${item.name}</span>
    
     <div class ="price">${item.price},00</div>
      <div class ="quantity">
        <ion-icon name="caret-back-circle-outline"></ion-icon>
         <span>${item.inCart}</span>
       <ion-icon name="caret-forward-circle-outline"></ion-icon>
     </div>
     <div class="total">
         ${item.inCart*item.price},00
    </div>

     </div>
    `;
  });

  productcontainer.innerHTML +=`
  <div class="baskettotalcontainer">
        <h4 class="baskettotaltitle">
        Basket total
        </h4>
        <h4 class="baskettotal">
            ${cartcost},00
        </h4>

  `;
}


} 
 onLoadCartNumber();
displaycart();


//serch code
  const searchItem=()=>{
let filter =document.getElementById('myInput').value.toUpperCase();
let ul =document.getElementById('myUL');

let li =ul.getElementsByTagName('li');

for(var i=0;i<li.length;i++){
  let a=li[i].getElementsByTagName('a')[0];
  let textValue =a.textContent||a.innerHTML;
  if(textValue.toUpperCase().indexOf(filter)>-1){
    li[i].style.display='';

  }else{
li[i].style.display='none';
      }
    }

  }

