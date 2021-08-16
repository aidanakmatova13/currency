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


// const money = document.querySelector('.money')
// const btn = document.querySelector('.btn')
// const moneys = document.querySelector('.moneys')
//
// moneys.innerHTML = []
// btn.addEventListener('click', () =>{
//     let moneys = [100,50,25,5,1]
//
// })


function get(amount){
    const moneyList = [100,50,20,10]
    const result = []

    if (amount > 0){
        for (let i = 0; i <moneyList.length; i ++){
            let note = moneyList[i]
            while (amount - note >= 0) {
                amount -= note
                result.push(note)
            }
        }
    } else {
        console.log('ENTER NEW AMOUNT!')
    }
    return result
}
console.log(get(250))