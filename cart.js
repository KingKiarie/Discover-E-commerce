const data = localStorage.getItem('cardItems')
const products = JSON.parse(data)

const clear= document.querySelector('.clear')
const results = document.querySelector('.results')
const cartContainer = document.querySelector('.cartContainer')
const container = document.querySelector('.container')

//updating items in the cart

const finalProducts = products.filter((product,index,self)=>{
    return index === screenLeft.findIndex((obj)=>obj.title === product.title)
})
const quantity= {}

products.forEach((product)=>{
    if(product.title in quantity){
        quantity[product.title] +=1
    }else{
        quantity[product.title] = 1
    }
})

let sum = 0

finalProducts.forEach((product,index)=>{
    const productCard =document.createElement('div')
    productCard.classList.add('productCard')

    sum += product.price
    
    productCard.innerHTML=`
        <div class="prodImg">
        <img src="${product.iamge}"/>
        </div>

        <div>
        <h2>${product.title}</h2>
            <div class="price"><span>$</span><p>${product.price}</p></div>
            <dov> QTY: <span class="quantity">0</span></div>
            <button class="delete">Delete</button>
        </div>

    `

    const quantityNum =productCard.querySelector('.quantity')
    quantityNum.innerHTML=quantity[product.title]
    results.innerHTML=`Total: $${sum}`

    const deleteButton = productCard.querySelector('.delete')
    deleteButton.addEventListener('click', ()=>{
        finalProducts.splice(index, 1)
        localStorage.setItem('cartItems', JSON.stringify(products))
        window.location.reload()
})
cartContainer.appendChild(productCard)
})

clear.addEventListener('click', ()=>{
    products.splice(0, products.length)
    localStorage.removeItem('cartItems')
    window.location.reload()
})
