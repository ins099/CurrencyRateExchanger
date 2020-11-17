document.addEventListener('DOMContentLoaded',function(){
 
    document.querySelector('form').onsubmit= () => {

        const c1 =  document.querySelector('#c1').value.toUpperCase();
        const c2 =  document.querySelector('#c2').value.toUpperCase();
        const cv1 =  document.querySelector('#cv1').value;

        
        fetch(`https://api.exchangeratesapi.io/latest?base=${c1}`)
        .then(response => response.json())
        
        .then(data => {

            const rates = data.rates[c2] * cv1;
            document.querySelector('#output').innerHTML = `${cv1} ${c1} equals to ${rates} ${c2}`;

        })

        return false;
    };

});


