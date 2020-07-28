let cardRadioBttn = document.getElementById("credit-card-radio");
let cardInputForm = document.getElementById("card-inputs-info");

cardRadioBttn.addEventListener("click", (e) => {
  let submitBttn = document.getElementById("submit-button");
  let formInputs = document.getElementsByClassName("form-input");

  let i;
  for (i = 0; i < formInputs.length; i++) {
    formInputs[i].style.height = "30px";
  }

  cardInputForm.style.display = "flex";
  cardInputForm.style.flexDirection = "column";
  cardInputForm.style.marginBottom = "15px";
  submitBttn.style.backgroundColor = "rgb(0, 128, 128)";
  submitBttn.style.border = "none";
  submitBttn.style.height = "40px";
  submitBttn.style.textAlign = "center";
  submitBttn.style.fontWeight = "900";
  submitBttn.style.fontFamily = "Raleway";
  submitBttn.style.fontSize = "15px";
  submitBttn.style.color = "white";
  formInputs.style.height = "30px";
});

function cardFormRemove() {
  let payPalRadio = document.getElementById("pp-button");

  let cardInputFormPP = document.getElementById("card-inputs-info");

  cardInputFormPP.style.display = "none";
};

function closeCheckout() {

  let bgShadow = document.getElementById("background-shadow")

  bgShadow.style.display = "none";

};

function displayShipForm(){

  let shippingForDiv = document.getElementById("shipping-add-form-div");
  let shippingH1 = document.getElementById("ship-add-h1");

  shippingForDiv.style.display = "flex";
  shippingH1.style.display = "flex";

}

function removeShipForm(){

  let shippingForDiv = document.getElementById("shipping-add-form-div");
  let shippingH1 = document.getElementById("ship-add-h1");

  shippingForDiv.style.display = "none"
  shippingH1.style.display = "none"
  
  

}