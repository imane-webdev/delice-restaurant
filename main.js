import {shopProductsArr} from "./shop-products.js";

var mainSwiper = new Swiper(".main-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // centeredSlides:false,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// meals SWIPER

  var swiper = new Swiper(".meals-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Testemonials SWIPER

var swiper = new Swiper(".testimonials-swiper", {
  slidesPerView: 3,
  loop:true,
  grabCursor: true,
  initialSlide:10,
  effect: 'coverflow',
  coverflowEffect: {
    depth:100,
    rotate: 5,
    modifier:0,
    scale:1,
    slideShadows: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});


// Today's Menu SWIPER

var swiper = new Swiper(".today-menu-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ABout page swiper

var swiper = new Swiper(".about-team-swiper", {
  slidesPerView: 4,
  grabCursor: true,
  initialSlide:0,
  centeredSlides: true,
  effect: 'coverflow',
  coverflowEffect: {
    depth:100,
    rotate: 5,
    modifier:1,
    scale:0.65,
    slideShadows: false,
  },

  pagination: {
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});

// ///// RESPONSIVE NAVIGATION

let navBars = document.querySelector(".nav-bars");
let navHeader = document.querySelector(".nav-header");

navBars.addEventListener("click",function(){
  navHeader.classList.toggle("active");
  navBars.classList.toggle("active");
})

/////Active Nav Link

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".nav-link");
const dropNavLinks = document.querySelectorAll(".dropdown-link");

navLinks.forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add("active");
  }
})

dropNavLinks.forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add("active");
    let list = link.closest(".dropdown-list").previousElementSibling.classList.add('active');
  }
})




// DISPLAY SEARCH

let serachBtns = document.querySelectorAll(".search-btn");
let searchPreview = document.querySelector(".search-preview");
serachBtns.forEach(btn=> {
  btn.addEventListener("click", function(){
    searchPreview.classList.toggle("active");
  })
})



// COMING SOON Page COUNT DOWN
const activePageSoon = window.location.pathname;
if(activePageSoon.includes("comingsoon")){
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let secondsBar = document.querySelector(".seconds-item");
let minutesBar = document.querySelector(".minutes-item");
let hoursBar = document.querySelector(".hours-item");
let daysBar = document.querySelector(".days-item");
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor((dateDiff / (1000 * 60 * 60 * 24)));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor(dateDiff % (1000 * 60) / 1000);


  progressBar(secondsBar,seconds,6);
  progressBar(minutesBar,minutes,6);
  progressBar(hoursBar,hours,15);
  progressBar(daysBar,days,0.9836);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}, 1000);
}
function progressBar(place,time,cof){
    place.style.background=`conic-gradient(
    #4d5b76 ${time * cof}deg,
    #8bc34a ${time * cof}deg)`;
 } 


// /////GALLERY FILTER 
let allGallery = document.querySelectorAll(".gallery .gallery-image-item");
let all = document.querySelectorAll(".all-gallery");
let pasta = document.querySelectorAll(".pasta-gallery");
let pizza = document.querySelectorAll(".pizza-gallery");
let dessert = document.querySelectorAll(".dessert-gallery");
let salad = document.querySelectorAll(".salad-gallery");
let other = document.querySelectorAll(".other-gallery");
let btn = document.querySelectorAll(".gallery-filter li");


btn.forEach(elem =>{
  elem.addEventListener("click",removeAll);
  elem.addEventListener("click",manageGallery);
})


function removeAll(){
  btn.forEach(elem=>{
    elem.classList.remove("active");
    this.classList.add("active");
  })
 
}

function manageGallery(){
  allGallery.forEach(elem=>{
    elem.style.display="none";
  });
document.querySelectorAll(this.dataset.cat).forEach(elem=>{
  elem.style.display="flex";
 });
}

// ///////////SHOP PAGE


// DISPLAY PRODCUTS FROM PRODUCTS ARRAY
if(activePageSoon.includes("shop")){
const shopContainer = document.querySelector(".shop-products-items");

let addToCartBtn = document.querySelectorAll(".shop-cart-btn");
let shopcartItems = document.querySelector(".shop-cart-item");
let decrementBtn = document.querySelectorAll(".decrement-product");
let incrementBtn = document.querySelectorAll(".increment-product");
let cartSubtotal = document.querySelector(".shop-cart-subtotal .total-items");
let cartTotalPrice = document.querySelector(".shop-cart-subtotal .shop-cart-total");
let totalNavCart = document.querySelector(".nav-cart-amount");
let previewSection = document.querySelector(".shop-products-preview");



let generateShop = () => {
  if(shopContainer){
  return shopContainer.innerHTML = shopProductsArr.map((item)=>{
    let {id,name,price,desc,img,stock,tast,cat} = item;
    return   `
    <div class="shop-products-item shop-all shop-${cat}"  ${tast.map(t=>"data-"+t).join(" ")}>
                <div class="shop-image-box">
                  <img
                    src=${img}
                    alt="${name}"
                  />
                  <div class="shop-cta">
                    <button class="shop-cart-btn">ADD TO CART</button>
                    <button
                      type="button"
                      class="shop-view-btn view-prev-btn"
                      data-shop="${id}"
                    >
                      QUICK VIEW
                    </button>
                  </div>
                  <button class="shop-favorit-box">
                    <i class="fa-solid fa-heart shop-favorit"></i>
                  </button>
                </div>
                <div class="shop-product-desc">
                  <h3 class="heading-link view-prev-btn"  data-shop="${id}"><button class="prev-btn-link">${name}</button> </h3>
                  <p class="paragraph">
                    ${desc}
                  </p>
                  <span class="special-price">$${price}</span>
                </div>
              </div>
    `
  }).join("");}}

generateShop();

//Cart Array
let cartArr = JSON.parse(localStorage.getItem("shop-cart")) || [];
updateCart();

let prevShopBtns = document.querySelectorAll(".shop-preview .shop-cart-btn");
document.querySelectorAll(".shop-cart-btn").forEach(btn => {
  btn.addEventListener("click",function (){
    prevShopBtns.forEach(prevBtn => {
    let dataPrev = prevBtn.closest(".shop-preview").dataset.preview;
    let dataShop = btn.closest(".shop-products-item").querySelector("[data-shop]").dataset.shop
    if( dataPrev === dataShop)
    {
      if(prevBtn.closest(".shop-preview").querySelector('[name="eatChoice"]')) {
        previewSection.style.display="flex";
        prevBtn.closest(".shop-preview").classList.add("active");
      }
      else {
        addCart(btn);
      }}
    })
  })
})



function addCart(id) {
  //check if product already in cart
  if(cartArr.some((item) =>item.id === id.nextElementSibling.dataset.shop)) {
    changeNumberOfUnits("plus",id.nextElementSibling.dataset.shop);
  }
  else {
    const item = shopProductsArr.find((product) => product.id=== id.nextElementSibling.dataset.shop );
    cartArr.push({
      ...item,
      numberOfUnits:1,
    });
  }

  
updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubtotal();

  //SAVE CART TO LACAL STORAGE

  localStorage.setItem("shop-cart",JSON.stringify(cartArr));
}


// Calculate and render subtotal

  function renderSubtotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cartArr.forEach(item => {
      totalPrice += (item.price * item.numberOfUnits);
      totalItems += item.numberOfUnits;
    })


    if(cartSubtotal){

   
    cartSubtotal.innerHTML=` SUBTOTAL (${totalItems} items):`;
  }
    cartTotalPrice.innerHTML= `$${totalPrice.toFixed(2)}`;
    totalNavCart.innerHTML=`${totalItems}`;
  }

function renderCartItems() {
  if(shopcartItems){
  shopcartItems.innerHTML=``;
  cartArr.forEach((item)=> {
  shopcartItems.innerHTML+= `
            <div class="shop-cart-item" data-id="${item.id}">
            <div class="shop-cart-products">
              <img
                src="${item.img}"
                style="width: 7rem"
                alt="${item.name}"
              />
              <div class="shop-cart-desc">
                <div class="heading">${item.name}</div>
                <div class="shop-product-btns">
                  <button  class="cart-btn decrement-product">-</button>
                  <form>
                    <input
                      type="number"
                      name="qty-product"
                      id="qty-${item.id}"
                      value="${item.numberOfUnits}"
                    />
                  </form>
                  <button  class="cart-btn increment-product">+</button>
                </div>
              </div>
              <span class="shop-cart-price">$${item.price}</span>
              <button class="remove-shop-cart">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
    `;

  document.querySelectorAll(".cart-btn").forEach(btn=> {
    btn.addEventListener("click",function(e) {

      //  console.log(e.target.closest(".shop-cart-item").dataset.id)
        if(e.target.classList.contains("increment-product")){
         changeNumberOfUnits('plus',e.target.closest(".shop-cart-item").dataset.id)
        }
        else if(e.target.classList.contains("decrement-product")) {
         changeNumberOfUnits('minus',e.target.closest(".shop-cart-item").dataset.id)
        }
      })
    })
 
    let removeItems =document.querySelectorAll(".remove-shop-cart");
    removeItems.forEach(remove=> {
      remove.addEventListener("click", function() {
        removeItemFromCart(remove.closest(".shop-cart-item").dataset.id)
      })
    })
  });
}
}


////////End render function/////////
//Remove item from cart
function removeItemFromCart(id) {
  cartArr = cartArr.filter((item)=> item.id !== id);
  updateCart();
}
//change number of unites
function changeNumberOfUnits(action,id) {
  cartArr = cartArr.map((item) => {
    let numberOfUnits= item.numberOfUnits;

    if(item.id === id) {
      if(action === "minus" && numberOfUnits>1) {
        numberOfUnits--;
      }else if(action === "plus" && numberOfUnits< item.stock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}







// //////////DISPLAY SHOP CART

let shopCart = document.querySelector(".nav-shop-cart");
let productsCart = document.querySelector(".shop-cart-section");
let closeShopCart = document.querySelector(".close-cart");
shopCart.addEventListener("click", function(){
  productsCart.classList.toggle("active");
})

closeShopCart.addEventListener("click",function() {
  closeShopCart.closest(".shop-cart-section").classList.remove("active");
})



//DISPLAY GRID OR LIST SHOP PAGE
const gridIcon = document.querySelector(".display-products-grid i");
const listIcon = document.querySelector(".display-products-list i");

if(gridIcon && listIcon){
gridIcon.addEventListener("click",function() {
  shopContainer.classList.remove("list");
  gridIcon.parentElement.classList.add("active");
  listIcon.parentElement.classList.remove("active");
});

listIcon.addEventListener("click",function() {
  shopContainer.classList.add("list");
  listIcon.parentElement.classList.add("active");
  gridIcon.parentElement.classList.remove("active");
})

}

//FOUND X PRODUCTS

let countProducts = document.querySelector(".found-total-products");
let totalProducts = document.querySelectorAll('.shop-products-items .shop-products-item');
if(countProducts) {
countProducts.innerHTML = totalProducts.length;
}
// Preview ptoduct

let previewProduct = document.querySelectorAll(".shop-preview");
let productShop = document.querySelectorAll(".view-prev-btn");

productShop.forEach(product => {
  product.addEventListener("click", function(){
      previewSection.style.display="flex";
      previewProduct.forEach(prevProduct=>{
        if(product.dataset.shop === prevProduct.dataset.preview) {
          // previewProducts(prevProduct.dataset.preview);
          prevProduct.classList.add("active");
        }
      });
  });
});


previewProduct.forEach(close=> {
  close.querySelector(".shop-close").addEventListener("click", function(){
    close.classList.remove('active');
    previewSection.style.display="none";
    
    //Uncheck products
    // this.closest(".shop-preview").children[1].querySelectorAll('[name="eatChoice"]').forEach(name=>{
    //   name.checked=false;
    // })
  });
});


// const hearts = document.querySelectorAll(".shop-favorit-box ");

// hearts.forEach(heart => {
//   heart.addEventListener("click", function() {
//     heart.classList.toggle("active");
//   })
// })

//ADD FAVORITE PRODUCTSHEART STYLE TO LOCAL STORAGE



let shopProducts = document.querySelectorAll(".shop-products-item");                            
let allHearts = document.querySelectorAll(".shop-favorit");
let favoritsList = [];

if(localStorage.getItem("favoritItems")){
  favoritsList = JSON.parse(localStorage.getItem("favoritItems"));
}

localStorageData();

allHearts.forEach(circle =>{
    circle.addEventListener('click',function(){
        let parentId = circle.closest(".shop-products-item").querySelector("[data-shop]").dataset.shop;
       if(circle.classList.contains("active")){
        circle.classList.remove("active");
        removeFromArray(parentId);

       } else {
        circle.classList.add("active");
        addToArray(parentId);
       }
    })
})

function addToArray(parentId) {
  favoritsList.push(parentId);
    addToLocalStorage(favoritsList);
}
function removeFromArray(parentId) {
    let index = favoritsList.indexOf(parentId);
    favoritsList.splice(index,1);
    addToLocalStorage(favoritsList);
}

function addToLocalStorage(array) {
    localStorage.setItem("favoritItems",JSON.stringify(array));
}

function localStorageData() {
    let data = localStorage.getItem("favoritItems");
    if(data) {
        let actives = JSON.parse(data)
        createFavorits(actives);
    }
}
function createFavorits(favoritsArray) {
    favoritsArray.forEach(favorit=>{
      shopProducts.forEach(parentShop=> {
            if(favorit  === parentShop.querySelector('[data-shop]').dataset.shop) {
                    parentShop.querySelector(".shop-favorit").classList.add("active");
                    // removeFromArray(parentId);
            }
        })
    })
}



// ///////////
// ASIDE SHOPE
// Display Aside
let displayShopeAside = document.querySelector(".display-shop-aside");
let closeShopeAside = document.querySelector(".shope-aside-close");
let shopAside = document.querySelector(".shop-aside");

if(displayShopeAside){
displayShopeAside.addEventListener("click",function(){
  displayShopeAside.previousElementSibling.classList.add("active");
})
}

// CLOSE Aside
if(closeShopeAside){
closeShopeAside.addEventListener("click",function(){
    closeShopeAside.closest(".shop-aside").classList.remove("active");

});
}

//////////////////////////////FILTER SHOP

let allShopProducts = document.querySelectorAll(".shop-products .shop-products-item");
let allShop = document.querySelectorAll(".shop-all");
let shopPasta = document.querySelectorAll(".shop-pasta");
let shopPizza = document.querySelectorAll(".shop-pizza");
let shopDessert = document.querySelectorAll(".shop-dessert");
let shopSalad = document.querySelectorAll(".shop-salad");
let shopOther = document.querySelectorAll(".shop-others");
let shopFilter = document.querySelectorAll(".shop-categories-list li");


shopFilter.forEach(elem =>{
  elem.addEventListener("click",removeAllShop);
  elem.addEventListener("click",manageShop);
})


function removeAllShop(){
  shopFilter.forEach(elem=>{
    elem.classList.remove("active");
    this.classList.add("active");
  })
 
}

function manageShop(){
  allShopProducts.forEach(elem=>{
    elem.style.display="none";
  });
document.querySelectorAll(this.dataset.shopcat).forEach(elem=>{
  elem.style.display="flex";
 });
}

// CHECKBOX FILTER SHOP
const tastFilter = document.querySelectorAll(".shop-tast-list input[type=checkbox]");
let allTastProducts = document.querySelectorAll(".shop-products .shop-products-item");
let tastProductsArr = Array.from(allTastProducts);

const checkedArray = [];
// var checkedList = document.querySelectorAll("input[name^='item[']:checked");
/// data-name === tastFilter.name

tastFilter.forEach(elem =>{
  // elem.addEventListener("click",removeAllShop);
  // elem.addEventListener("click",manageShop);
  elem.addEventListener("change", ()=>{
    if(elem.checked) {
      checkedArray.push(elem.name);
    } else {
      let index= checkedArray.indexOf(elem.name);
      checkedArray.splice(index, 1);
    }
    manageTastShop(checkedArray);

  })
})

function manageTastShop(array){
  allTastProducts.forEach(elem=>{
    elem.style.display="none";
  });
  array.forEach( arr=> {
  document.querySelectorAll(`[data-${arr}]`).forEach(elem=>{
    elem.style.display="flex";
   })});
   if(array.length === 0) {
    allTastProducts.forEach(elem=>{
      elem.style.display="flex";
    });

   }
}


}
/////////////////////////////////////////////////////////////////////END SHOP PAGE/////////////////////////////////////////////////////

//VALIDATE HOME PGAE CONTACT FORM

const homepageForm = document.getElementById('homepage-form');
const homepageFirstname = document.getElementById('homepage-firstname');
const homepageLastname = document.getElementById('homepage-lastname');
const homepageEmail = document.getElementById('homepage-email');
const homepageSubject = document.getElementById('homepage-subject');
const homepageMessage = document.getElementById('homepage-message');

if(homepageForm) {
homepageForm.addEventListener("submit", function(e) {
  e.preventDefault();
  checkHomeInputs();
})

}


function checkHomeInputs () {
  const firstnameValue = homepageFirstname.value.trim();
  const lasttnameValue = homepageLastname.value.trim();
  const emailValue = homepageEmail.value.trim();
  const subjectValue = homepageSubject.value.trim();
  const messageValue = homepageMessage .value.trim();

   if (firstnameValue=== "") {
    setErrorFor(homepageFirstname,"first name cannot be empty");
   }else {
    setSuccessFor(homepageFirstname);
   }

   if (lasttnameValue === "") {
    setErrorFor(homepageLastname,"Last name cannot be empty");
   }else {
    setSuccessFor(homepageLastname);
   }

   if (emailValue === "" ) {
    setErrorFor(homepageEmail,"Email cannot be empty");
   } else if(!validEmail(emailValue)) {
    setErrorFor(homepageEmail,"Enter a valid email");
   }
   else{
    setSuccessFor(homepageEmail);
   }

   if (subjectValue === "") {
    setErrorFor(homepageSubject,"Subject cannot be empty");
   }else {
    setSuccessFor(homepageSubject);
   }


   if (messageValue === "") {
    setErrorFor(homepageMessage,"Message cannot be empty");
   }  else if((messageValue.length < 50)){
    setErrorFor(homepageMessage,"50 character required!");
   }else {
    setSuccessFor(homepageMessage);
   }

}
////////////////////////

///// VALIDATE RESERVATION FORM

const reservationForm = document.getElementById('rsv-form');
const reservationDate = document.getElementById('reservation-date');
const reservationHour = document.getElementById('reservation-time');
const reservationGuests = document.getElementById('reservation-guests');
const reservationPhone = document.getElementById('reservation-phone');
const reservationName = document.getElementById('reservation-full-name');
const reservationMessage = document.getElementById('rsv-message');


if(reservationForm) {
  reservationForm.addEventListener("submit", function(e) {
  e.preventDefault();
  checkRsvInputs();
})
}


function checkRsvInputs() {
  const reservationDateValue = reservationDate.value.trim();
  const reservationHourValue = reservationHour.value.trim();
  const reservationGuestsValue = reservationGuests.value.trim();
  const reservationPhoneValue = reservationPhone.value.trim();
  const reservationNameValue = reservationName.value.trim();
  const reservationMessageValue = reservationMessage.value.trim();

   if (reservationDateValue === "") {
    setErrorFor(reservationDate,"Date cannot be empty");
   }else {
    setSuccessFor(reservationDate);
   }

   if (reservationHourValue === "") {
    setErrorFor(reservationHour,"Hour cannot be empty");
   }else {
    setSuccessFor(reservationHour);
   }

   if (reservationGuestsValue === "") {
    setErrorFor(reservationGuests,"Hour cannot be empty");
   }else {
    setSuccessFor(reservationGuests);
   }

   if (reservationPhoneValue === "" ) {
    setErrorFor(reservationPhone,"Phone cannot be empty");
   } 
   else{
    setSuccessFor(reservationPhone);
   }

   if (reservationNameValue === "") {
    setErrorFor(reservationName,"Name cannot be empty");
   }else {
    setSuccessFor(reservationName);
   }


   if (reservationMessageValue === "") {
    setErrorFor(reservationMessage,"Message cannot be empty");
   }
   else if((reservationMessageValue.length < 50)){
    setErrorFor(reservationMessage,"50 character required!");
   }
   else {
    setSuccessFor(reservationMessage);
   }

}


//CHECK FORMS

 function validEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".input-error-msg");
  small.innerText = message;
  formControl.className="input-element error";
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className="input-element success"

}

//SIGNUP LOGIN FORM
const formContainer = document.querySelector('.login-signup-section'); 
const passShowHide = document.querySelectorAll('.hideShow'); 
const formPass = document.querySelectorAll('.form-pass'); 
const signUpLink = document.querySelector('.signup-link'); 
const loginLink = document.querySelector('.login-link'); 
const loginForm = document.querySelector('.login-form'); 
const signupForm = document.querySelector('.signup-form'); 
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const loginSignupBtns = document.querySelectorAll(".login-signup-btn");
const loginSignForms =  document.querySelectorAll(".login-signup-forms .form");
const logsignClose = document.querySelectorAll(".close-signlog-form");

passShowHide.forEach(showHide=>{
  showHide.addEventListener("click", function(){
    formPass.forEach(pass=>{
      if(pass.type=== "password"){
        pass.type="text";
        passShowHide.forEach(icon => {
          icon.classList.replace("fa-eye-slash","fa-eye")
        })
      } else {
        pass.type="password";
        passShowHide.forEach(icon => {
          icon.classList.replace("fa-eye","fa-eye-slash")
        })
      }
    })
  })
})



loginSignupBtns.forEach(btn=> {
  btn.addEventListener("click", function(){
  loginSignForms.forEach(form=>{
    form.classList.remove("active");
    form.closest(".login-signup-section").classList.remove("active");
  })
  if(this.classList.contains("login-btn")) {
    formContainer.classList.add("active");
    loginForm.classList.add("active");
  }else{
    formContainer.classList.add("active");
    signupForm.classList.add("active")
  }
  })
})

if(signUpLink){
signUpLink.addEventListener("click", function() {
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
})
}

if(loginLink){
loginLink.addEventListener("click", function() {
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
})
}

logsignClose.forEach(close=> {
  close.addEventListener("click", function(){
    this.closest(".form").classList.remove("active");
    this.closest(".login-signup-section").classList.remove("active");
  })
})


// SIGNUP FORM VERIFICATION
const signupName = document.getElementById('signup-name');
const signupMail = document.getElementById('signup-email');
const signupPass = document.getElementById('signup-pass');
const signupConfirmPass = document.getElementById('signup-confirmpass');

if(signupForm) {
  signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  checkSignupInputs();
})
}


function checkSignupInputs() {
  const signupNameValue = signupName.value.trim();
  const signupMailValue = signupMail.value.trim();
  const signupPassValue = signupPass.value.trim();
  const signupConfirmPassValue = signupConfirmPass.value.trim();

   if (signupNameValue === "") {
    singupErr(signupName,"Name cannot be empty");
   }else {
    singupSuccess(signupName);
   }

   if (signupMailValue === "" ) {
    singupErr(signupMail,"Email cannot be empty");
   } else if(!validEmail(signupMailValue)) {
    singupErr(signupMail,"Enter a valid email");
   }
   else{
    singupSuccess(signupMail);
   }

   if (signupPassValue === "") {
    singupErr(signupPass,"Password cannot be empty");
   }else {
    singupSuccess(signupPass);
   }

   if (signupConfirmPassValue=== "" ) {
    singupErr(signupConfirmPass,"Confirmation password cannot be empty");
   } else if(signupPassValue !== signupConfirmPassValue) {
    singupErr(signupConfirmPass,"Passwords does not match");
   }
   else{
    singupSuccess(signupConfirmPass);
   }
}

function singupErr(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".signup-error");
  small.innerText = message;
  formControl.className="input-field error";
}
function singupSuccess(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector(".signup-error");
  small.innerText ="";
  formControl.className="input-field success"
}





// FIXED HOME NAVIGATION

const header = document.querySelector(".nav-header");
const heroSection = document.querySelector('.hero');
const mobileNav = document.querySelector(".mobile-nav");


const heroSectionOptions = {
  rootMargin : "-200px 0px 0px 0px"
};

const heroSectionObserver = new IntersectionObserver(function(entries,heroSectionObserver) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      header.classList.add("static-nav");
    } else {
      header.classList.remove("static-nav");

    }
  });
},heroSectionOptions);

// heroSectionObserver.observe(heroSection);
