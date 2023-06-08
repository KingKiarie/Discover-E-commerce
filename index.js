 const parent = document.querySelector('.parent-list')
 parent.addEventListener('click', function(event){

    const sublist= event.target.querySelector('.sublist')
    if(event.target.tagName === 'LI'){
       sublist.classList.toggle('hidden')
    }
})
const fetchData = async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)

    data.results.forEach((product)=>{
        const container=document.createElement('div')
        container.classList.add('container')

        container.innerHTML=`
        <div><img class="cnt-img" src="${product.image}"</div>
        <h2>${product.title}</h2>
        <h3>${product.description}</h3>
        <h3>${product.category}</h3>
        <h3>${product.rating}</h3>
        <h3>${product.price}</h3>
        `
        document.body.appendChild(container)
    })
}
fetchData()