// const valueList = document.querySelector('.value-list')
// const input = document.querySelector('.input')
// const resultInput = document.querySelector('.result')
// const getBtn = document.querySelector('.btn')
// const sign = document.querySelector('.sign')
//
//
// getBtn.addEventListener('click', ()=>{
//     if (valueList.value === 'EUR'){
//         fetch('https://api.exchangerate.host/latest?base=kgs')
//             .then(res => res.json())
//             .then(data => resultInput.value =  (data.rates.EUR*input.value).toFixed(2))
//         sign.textContent= '€'
//     } else if (valueList.value === 'USD'){
//         fetch('https://api.exchangerate.host/latest?base=kgs')
//             .then(res => res.json())
//             .then(data => resultInput.value = (data.rates.USD*input.value).toFixed(2))
//         sign.textContent= '$'
//     } else if (valueList.value === 'RU'){
//         fetch('https://api.exchangerate.host/latest?base=kgs')
//             .then(res => res.json())
//             .then(data => resultInput.value = (data.rates.RUB*input.value).toFixed(2))
//         sign.textContent= '₽'
//     }
// })


// const  row = document.querySelector('.row')
//
// fetch('https://restcountries.eu/rest/v2/all')
// .then(res => res.json())
// .then(data => data.map(item => {
//     console.log(item.name)
// })
// )




const row = document.querySelector('.row')

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
        data.forEach(item => {
            row.innerHTML += `<div class="col-3"> 
            <div class="flag-img">
            <img src="${item.flag}" alt="" class="img" > <br>
            </div>
           Cauntry Name: ${item.name} <br>
           Capital Name: ${item.capital}<br>
           Population: ${item.population}
             </div>`
        })
        console.log(data)
    })

