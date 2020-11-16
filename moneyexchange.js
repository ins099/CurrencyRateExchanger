document.addEventListener('DOMContentLoaded',function(){
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const rates = data.rates.EUR
        document.querySelector('body').innerHTML = `1 USD equals to ${rates.toFixed(3)}`;
    })
});