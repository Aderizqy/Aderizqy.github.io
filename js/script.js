function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// form contact
const scriptURL = 'https://script.google.com/macros/s/AKfycbxD2guMrtl3RXY7cWzaMH6yXBg6HKRaAn2lZ1sZWytIxzy9OCfHbnZh0mZJ4Ic48_uv/exec'
const form = document.forms['rzqy-contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Thank you, your message has been sent."))
      .then(() => { window.location.reload(); })
      .catch(error => console.error('Error!', error.message))
  });