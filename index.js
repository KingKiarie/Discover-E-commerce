//animated shopping cart
const cart = document.getElementById('cart');
let cartPosition = 0;
let isMovingRight = true;

function moveCart() {
  if (isMovingRight) {
    cartPosition += 10;
    if (cartPosition >= 300) {
      isMovingRight = false;
    }
  } else {
    cartPosition -= 10;
    if (cartPosition <= 0) {
      isMovingRight = true;
    }
  }
  
  cart.style.left = cartPosition + 'px';
  
  requestAnimationFrame(moveCart);
}

moveCart();
//signup authentication prompt
const username = localStorage.getItem('username')
if (!username) {
    alert('login to continue')

    setTimeout(() => {
        window.location.href = '/accounts.html'
    }, '2000');
}
// const products = document.querySelector('.products')

const productsContainer = document.querySelector('.products')
const form= document.querySelector('.form')
const cartNum = document.querySelector('.cartNum')

const object = localStorage.getItem('cartItems')
// const cartProducts=JSON.parse(objects)

// if(cartProducts){
//     cartNum.innerHTML=cartProducts.length
// }

let searchParam = ''
let cartItems = []


 


form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const input = form.querySelector('.placeholder')
    searchParam=input.value
    productsContainer.innerHTML=''
    console.log(searchParam)

    try{
        searchProducts(searchParam)
    }catch(error) {
        console.log(error)
    }


})

const fetchProducts = async()=>{
   /*Find error in this line*/ const response = await fetch (`https://dummyjson.com/products`)
    const data = await response.json()

    data.products.forEach((product)=>{
        
        const container = document.createElement('div')
        container.classList.add('containerProduct')
        container.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="${product.thumbnail}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.price}</p>
          <span>$</span>
          <button class="cartbutton">Add to cart</button>
        </div>
      </div>
        `
        const addButton = container.querySelector('.cartbutton')
        addButton.addEventListener('click',()=>{
            const productObject = {
                title: product.title,
                price: product.price,
                image: product.thumbnail,
            }
            cartItems.push(productObject)
            localStorage.setItem("cartItems",JSON.stringify('cartItems'))
            cartNum.innerHTML = cartItems.length
        })
        productsContainer.appendChild(container)
    })
}
fetchProducts()

const searchProducts =async (products)=>{
    const response= await fetch(`https://dummyjson.com/products/search?q=${products}`)
    const data = await response.json()
    data.products.forEach((product)=>{
        console.log(product)
        const container = document.createElement('div')
        container.classList.add('containerProduct')
        container.innerHTML=`
        <div>
            <div class = "product-card">
                <div>
                    <div class="product-image"><img src="${product.thumbnail}"/></div>
                    <h2>${product.title}</h2>
                    </div>
                    <div>
                    <h3>$. ${product.price}</h3>
                    <span>$</span>
                    <p>Quantity: <input type="number" value="1"></p>
                    <button class="cartbutton">Add to cart</button>
                </div>
            </div>
        </div>
        `

        const addButton = container.querySelector('.cartbutton')
        addButton.addEventListener('click', ()=>{
            const productObject = {
                title: product.title,
                price: product.price,
                image: product.thumbnail,
            }
            cartItems.push(productObject)
            console.log(cartItems)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
        })
        productsContainer.appendChild(container)
    })
}

const revealBtn = document.querySelector('.revealBtn');
const hiddenContent= document.querySelector('.hiddenContent');

function revealContent(){
    if(hiddenContent.classList.contains('revealBtn'))
    {
        hiddenContent.classList.remove('revealBtn')
        revealBtn
    }else{
        hiddenContent.classList.add('revealBtn')
    }
}

revealBtn.addEventListener('click', revealContent)


