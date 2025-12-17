function myFunction(){
   const Name = document.getElementById('Name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pnumber = document.getElementById('pnumber').value.trim();
    const residence = document.getElementById('residence').value.trim();
    const message = document.getElementById("notify")
    if(email === "" || pnumber === "" || residence === "" || Name === "" ){
        message.innerHTML ="Please fill in the missing fields";
        message.style.color = "red";
    }
    else{
        message.innerHTML ="Thank you";
        message.style.color = "green";
    }
}
alert('You can Order any Fruit' );

document.querySelector('.scroll-top').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};