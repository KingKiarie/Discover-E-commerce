const form = document.getElementById('form')
const submit = document.getElementById('submit')
const login = document.getElementById('login')

login.addEventListener("click", (event)=>{
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    window.location.href="/";
});

submit.addEventListener('click',(event)=>{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email =document.getElementById("email").value;

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("email",email);

    window.location.href ="https://discover-e-commerce-ji17kmprq-kingkiarie.vercel.app"
})

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    window.location.href="https://discover-e-commerce-ji17kmprq-kingkiarie.vercel.app"
})
