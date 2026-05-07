
emailjs.init({
  publicKey: '-YTXFvEX3dBdiD8N_',
});


const form = document.querySelector(".donation-form")
form.addEventListener("submit", function (e) {
 e.preventDefault();

  
 



  const templateParams = {
    amount: document.querySelector("input[name='amount']:checked").value , 
    email: document.querySelector("#donor-Email").value , 
    phone: document.querySelector("#donor-phone").value ,
    name:document.querySelector("#donor-name").value 

  }
 
  if(!templateParams.name || !templateParams.email || !templateParams.phone || !templateParams.amount   ){
    alert("Please fill in all fields.")
    return
  }else{
    emailjs.send('service_6owhss5', 'template_yvujcw7', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response);
    alert("Thank you for your donation! We will contact you soon.")
    form.reset()
  },
  (error) => {
    console.log('FAILED...', error);
    alert("Sorry, there was an error sending your donation. Please try again later.")

  },
);
  }

 




})









