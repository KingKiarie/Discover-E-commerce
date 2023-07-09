const container = document.querySelector('.container')
const total = document.querySelector('.total')


const getItem = localStorage.getItem('cartItems');
const product = JSON.parse(getItem);

let sum = 0

product.forEach((name,index)=>{
    const cartContainer = document.createElement('div')
    cartContainer.classList.add('cartContainer')


    cartContainer.innerHTML=`
    <div class = "cartItem">
        <div><img class="img" src="${name.image}"/></div>
        <h2>${name.title}</h2>
        <h2>${name.price}</h2>
        <button class="remove">Remove from cart</button>
    </div>
    `
    sum += name.price

    total.innerHTML = `Total $${sum}`

    container.appendChild(cartContainer)

    const remove = container.querySelector('.remove')

    remove.addEventListener('click',()=>{
        product.splice(index,1)
        localStorage.setItem('cartItem', JSON.stringify(product))
        window.location.reload();
    })

})






