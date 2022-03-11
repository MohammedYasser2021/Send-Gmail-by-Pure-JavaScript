function sendEmail() {
  emailjs
    .send('service_mn9quw6', 'template_9it1hcr', {
      from_name: document.querySelector('#name_from').value,
      to_name: document.querySelector('#name_to').value,
      message: document.querySelector('#message').value,
      email_to: document.querySelector('#email_to').value,
    })
    .then(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      },
    )
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
  sendEmail()
})
