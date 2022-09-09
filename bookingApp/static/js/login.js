const loginForm = document.getElementById("loginForm")
const message = document.getElementById("message")

loginForm.onsubmit = (event)=>{
    event.preventDefault()
    const {
        email,
        password,
        
    } = loginForm
    const data = {
        email:email.value,
        password:password.value,  
    }
    console.log(data)

    fetch("/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
        
    })
    .then(response=>response.json())
    .then(result=>{
        if(result.success){
            window.location.href = "/"
        }

        message.innerText = `${result.message}`
    })
        // if(!data.success){
        //     message.innerText = data.message
        // }else{
        //     const user = data.user
        //     message.innerText = ""
        //     // Guardar data en el navegador
        //     localStorage.setItem("id",user.id)
        //     localStorage.setItem("name",user.name)
        //     localStorage.setItem("email",user.email)
        //     // Redirección
        //     // location.href = "/"
        // }
    
    .catch(console.log)
}
