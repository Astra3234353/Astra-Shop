import { cart, removeELem, deleteCartItem, checkCartNull } from "../data/carrito.js";
import { accounts } from "../data/accounts.js";
import { numbFormat, to4Digits } from "./maths/maths.js";

let cartMainElem = document.querySelector('.cart');
checkCartNull(cartMainElem);

cart.forEach((cartId)=> {
  accounts.forEach(account => {
    if (cartId == account.id) {
      cartMainElem.innerHTML += `
        <div class="product-container cart-product-${cartId}">
      <div class="product-image-container">
        <a href="img/accounts/account${cartId}.jpg" target="_blank">
          <img class="product-image-cart" src="img/accounts/account${cartId}.jpg" draggable="false">
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
        <button class="js-cart-delete js-cart delete-btn" data-account-id="${account.id}">Borrar</button>
        <div class="cart-account-status">${account.status}</div>
      </div>
        <a target="_blank" href="https://whatsApp.com" class="whats-btn">
            Ver en WhatsApp
        </a>
    </div>
      `;
    }
  });
});


document.querySelectorAll('.js-cart-delete')
  .forEach(accountElem => {
    accountElem.addEventListener('click', () => {
      const btnId = accountElem.dataset.accountId;
      removeELem(btnId);
      deleteCartItem (btnId)
      checkCartNull(cartMainElem);
    })
  })






  