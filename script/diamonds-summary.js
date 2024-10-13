import { diamonds } from "../data/products.js";
import { numbFormat } from "./maths/maths.js";
import { cart, callCart } from "../data/carrito.js";

let htmlAccounts = document.querySelector('.js-products-grid');


diamonds.forEach(diamond => {
  htmlAccounts.innerHTML +=
  `
    <div class="product-container diamante-${diamond.diamondPack}">
      <div class="product-image-container product-diamond-image-container product-image-${diamond.diamondPack}">
        <img class="product-image-diamond"
          src="${diamond.url}">
      </div>

      <div class="product-id limit-text-to-2-lines">
       ${diamond.diamondPack} Pack
      </div>

      <div class="product-name limit-text-to-2-lines">
      Pack de ${diamond.diamondPack} diamantes.
      </div>

      <div class="product-price-box">
        <div class="product-price">
        $${numbFormat(diamond.priceCents)} USD
        </div>
        <div class="product-price-mm"></div>
      </div>

      <div class="product-spacer"></div>


      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="i">
        Comprar en WhatsApp
      </button>
    </div>
  `
});

const dialog = document.querySelector('.dialog-alert');
const closeDialogBtn = document.querySelector('.modal__close-button');

closeDialogBtn.addEventListener("click", () => {
    dialog.close();
})

