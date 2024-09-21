import { accounts } from "../data/accounts.js";
import { numbFormat, to4Digits } from "./maths/maths.js";
import { callCart, cart} from "../data/carrito.js";
import { savedItemBtn } from "./pages/cart-functions.js";

let loadedAccNum = 0;
let htmlAccounts = document.querySelector('.js-products-grid');
const addAccountsBtn = document.querySelector('.add-accounts-btn-js');

function load15Accounts() {
  const currentLoadedAccounts = loadedAccNum;

  for (let i = loadedAccNum; i < currentLoadedAccounts + 15; i++) {
    if (!accounts[i]) {
      console.log(`no existe la cuenta con id ${i}`);
      break;
    } else if (accounts[i]) {
      htmlAccounts.innerHTML +=
  `
    <div class="product-container">
      <div class="product-image-container">
        <a href="img/accounts/account${accounts[i].id}.jpg" target="_blank">
          <img class="product-image"
            src="img/accounts/account${accounts[i].id}.jpg">
        </a>
      </div>

      <div class="product-id limit-text-to-2-lines">
        ID: ${to4Digits(accounts[i].id)}
      </div>

      <div class="product-name limit-text-to-2-lines">
      ${accounts[i].description}
      </div>

      <div class="product-price-box">
        <div class="product-price">
        $${numbFormat(accounts[i].priceCents)} USD
        </div>
        <div class="product-price-mm">+ MM</div>
      </div>


      <button type="button" class="button js-add-to-cart" data-product-id="${accounts[i].id}">
      <span class="button__text">
        Guardar en carrito
      </span>
      <span class="button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg>
      </span>
      </button>

      <div class="product-wapp-link">
        <a target="_blank" href="https://whatsApp.com">Link a whatsapp</a>
      </div>
    </div>
  `;
    addListenerToBtn();

    loadedAccNum ++;
    console.log(`Se ha cargado la cuenta con id: ${loadedAccNum}`);
  };
    }

};

function addListenerToBtn() {
  document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    const id = button.dataset.productId
    
    cart.forEach((cartId) => {
      if (id == cartId) {
        savedItemBtn(button);
      }
    })

    button.addEventListener(('click'), () => {
      callCart(id, button);
    })
  });
}
  
addAccountsBtn.addEventListener(('click'), () => {
  load15Accounts();
})


  load15Accounts();
  load15Accounts();


/*
function loadAccounts() {
  accounts.forEach((account, i) => {
    htmlAccounts.innerHTML +=
    `
      <div class="product-container">
        <div class="product-image-container">
          <a href="img/accounts/account${account.id}.jpg" target="_blank">
            <img class="product-image"
              src="img/accounts/account${account.id}.jpg">
          </a>
        </div>
  
        <div class="product-id limit-text-to-2-lines">
          ID: ${to4Digits(account.id)}
        </div>
  
        <div class="product-name limit-text-to-2-lines">
        ${account.description}
        </div>
  
        <div class="product-price-box">
          <div class="product-price">
          $${numbFormat(account.priceCents)} USD
          </div>
          <div class="product-price-mm">+ MM</div>
        </div>
  
  
        <button type="button" class="button js-add-to-cart" data-product-id="${account.id}">
        <span class="button__text">
          Guardar en carrito
        </span>
        <span class="button__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg>
        </span>
        </button>
  
        <div class="product-wapp-link">
          <a target="_blank" href="https://whatsApp.com">Link a whatsapp</a>
        </div>
      </div>
    `
  })
  
  let anonAccount = 1;
  for (let i = loadedAccNum + 1; i < loadedAccNum + 18; i++) {
  
    htmlAccounts.innerHTML +=
    `
      <div class="product-container">
        <div class="product-image-container">
          <a href="img/undefined-accounts/account${anonAccount}.jpg" target="_blank">
            <img class="product-image"
              src="img/undefined-accounts/account${anonAccount}.jpg">
          </a>
        </div>
  
        <div class="product-id limit-text-to-2-lines">
          ID: ${to4Digits(i)}
        </div>
  
        <div class="product-no-text limit-text-to-2-lines">
        Los detalles se pueden ver al dar click en la imagen o preguntando en WhatsApp
        </div>
  
        <div class="product-price-box">
          <div class="product-no-price">
           Pregunta por precio
          </div>
          <div class="product-no-price-mm">en WhatsApp</div>
        </div>
  
        <div class="product-spacer"></div>
  
  
        <button class="add-to-cart-button button-primary2 js-add-to-cart-undefined"
        data-product-id="i">
          Link a WhatsApp
        </button>
      </div>
    `;
  
    anonAccount ++;
   }
  };
  ;
*/