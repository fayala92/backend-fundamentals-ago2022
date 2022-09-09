const signup_form = document.getElementById("signup_form")

signup_form.onsubmit = (event)=>{
    event.preventDefault()
    const {
        name,
        email,
        password,
        password_confirm
        
    } = signup_form
    const data = {
        name:name.value,
        email:email.value,
        password:password.value,
        password_confirm:password_confirm.value  
    }
    console.log(data)
    fetch("/api/auth/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/JSON"
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(console.log)
    .catch(console.log)
    
}