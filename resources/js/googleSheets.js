function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyPwUfiI9Bibp8tsVK45hv8ULfSqal2azW5ByXUKyerQ4_A68xW2GgzZwWrq8LZhlVy/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
