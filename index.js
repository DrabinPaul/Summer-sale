function handleProduct(target){

  const title = target.querySelector('.item-name').innerText;
  const price = target.querySelector('.item-price').innerText;

  const titleElement = document.createElement('p');
  const entry = document.getElementById('calculation-entry');
  const count = entry.childElementCount;
  titleElement.innerText = `${count + 1}. ${title}`;
  entry.appendChild(titleElement);

  const totalDollar = document.getElementById('total-dollar').innerText;
  const discountValue = document.getElementById('discount-amount').innerText;
  
  const sum = parseInt(totalDollar) + parseInt(price);

  const totalSum = sum - parseInt(discountValue);

  const totalDollarAmount = document.getElementById('total-dollar');
  totalDollarAmount.innerText = sum.toFixed(2);

  const finalTotalAmount = document.getElementById('total-final');
  finalTotalAmount.innerText = totalSum.toFixed(2);

  const buttonTakar = document.getElementById('purchase-btn'); 

  if (parseInt(price) > 0) {
    buttonTakar.removeAttribute("disabled");
    buttonTakar.style.backgroundColor = "#E527B2";
}
};

function handleReload(){



  const totalDollarAmount = document.getElementById('total-dollar');
  totalDollarAmount.innerText = 0.00;

  const finalTotalAmount = document.getElementById('total-final');
  finalTotalAmount.innerText = 0.00;

  const discountTaka = document.getElementById('discount-amount');
    discountTaka.innerText = 0.00;

  const entry = document.getElementById('calculation-entry');
  entry.innerHTML = '';

  const field = document.getElementById("inputField");
  field.value = '';
  
  const purchaseButton = document.getElementById('purchase-btn');
  purchaseButton.setAttribute("disabled", 'true');
  purchaseButton.style.backgroundColor = "#d39bc5";

  const myButton = document.getElementById('applyButton');
  myButton.setAttribute("disabled", 'true');
  myButton.style.backgroundColor = "#d39bc5";

}


document.getElementById("inputField").addEventListener("input", function(e){
  const inputFieldValue = e.target.value;
  const myButton = document.getElementById("applyButton");
  if (inputFieldValue === "SELL200") {
      myButton.removeAttribute("disabled");
      myButton.style.backgroundColor = '#E527B2';
  } else {
      myButton.setAttribute("disabled", "true");
      myButton.style.backgroundColor = '#d39bc5';

  }
});

function handleDiscount(){
  const currentPriceEl = document.getElementById('total-dollar');
  const currentPrice = parseInt(currentPriceEl.innerText);
  if(currentPrice >= 200){
    const discountPrice = (currentPrice*20)/100;

    const discountTaka = document.getElementById('discount-amount');
    discountTaka.innerText = discountPrice.toFixed(2);

    const finalTotalAmount = document.getElementById('total-final');
    finalTotalAmount.innerText = (currentPrice-discountPrice).toFixed(2);
  }
}
