let height=document.getElementById('height')
let weight=document.getElementById('weight')
let getbmi = document.getElementById('getbmi')
let ranges = document.getElementById('ranges')

function calculate(){
    let bmi =(weight.value)/(height.value*height.value)
    getbmi.innerText=bmi.toFixed(2)
    if(bmi<18.5){
        ranges.innerText="Under Weight"
    }
    else if(18.5>=bmi<=24.9){
        ranges.innerText="Normal Weight"
    }
    else if(25>=bmi<=29.9){
        ranges.innerText="Over Weight"
    }
    else if(30>=bmi<=35)
        ranges.innerText="Obesity"
    else if(bmi>35){
        ranges.innerText="Severe obesity"
    }
    
}