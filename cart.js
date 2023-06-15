const data = localStorage.getItem('cardItems')
const products = JSON.parse(data)

const container = document.querySelector('.container')

products.array.forEach(Product => {
    const item = document.querySelector('.container')
    item.classList.add('item')
    item.innerHTML=`
    <div><img src="${product.img}"/></div>
    <button class="deletebtn">Delete</button>
    `

    const deletebtn = item.querySelector('.deletebtn')
    deletebtn.addEventListener('click' ()=>{})

    container.appendChild(item)
});