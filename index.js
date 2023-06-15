alert('Please signin for better services')
const products = document.querySelector('.products')

const parent = document.querySelector('.parent-list')
const form= document.querySelector('.form')

const cartNum = document.querySelector('.cartNum')
let searchParam = 'phone'
let cartItems = []


 parent.addEventListener('click', function(event){

    const sublist= event.target.querySelector('.sublist')
    if(event.target.tagName === 'LI'){
       sublist.classList.toggle('hidden')
    }
})

// // const fetchData = async()=>{
//     const response = await fetch('https://fakestoreapi.com/products')
//     const data = await response.json()
//     console.log(data)

//     data.forEach((product)=>{
//         const container=document.createElement('div')
//         container.classList.add('container')

//         container.innerHTML=`
//         <div><img class="cnt-img" src="${product.image}"</div>
//         <h2>${product.title}</h2>
//         <h3>${product.description}</h3>
//         <h3>${product.category}</h3>
//         <h3>${product.rating}</h3>
//         <h3>${product.price}</h3>
//         `
//         document.body.appendChild(container)
//     })
// }

form.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const input = form.querySelector('.placeholder')
    searchParam=input.value
    product.innerHTML=''
    console.log(searchParam)

    try{
        searchProducts(searchParam)
    }catch(error) {
        console.log(error)
    }


})

const searchProducts =async (products)=>{
    const response= await fetch(`https://dummyjson.com/products/search?q=${products}`)
    const data = await response.json()
    data.products.forEach((item)=>{
        console.log(item)
        const container = document.createElement('div')
        container.classList.add('containerProduct')
        container.innerHTML=`
        <div class="product-image"><img src="${item.thumbnail}"/></div>
        <h2>${item.title}</h2>
        <h3>$. ${item.price}</h3>
        <p>Quantity: <input type="number" value="1"></p>
        <button class="cartbutton">Add to cart</button>
        `

        const addButton = container.querySelector('.cartbutton')
        addButton.addEventListener('click', ()=>{
            const productObject = {
                title: item.title,
                price: item.price,
                image: item.thumbnail,
            }
            cartItems.push(productObject)
            console.log(cartItems)
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            cartNum.innerHTML = cartItems.length
        })
        product.appendChild(container)
    })
}

fetchData()