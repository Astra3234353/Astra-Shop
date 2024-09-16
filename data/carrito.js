import { savedItemBtn, deleteItemBtn } from "../script/pages/cart-functions.js";

function localStoragecart () {
  let cartnt;
  cartnt = JSON.parse(localStorage.getItem ('cart'));

  if (!cartnt) {
    cartnt = [];
  }

  return cartnt
};

export let cart = localStoragecart();

export function saveInLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function callCart(id, button) {
  let matchingId;

  cart.forEach(itemId => {
    if (id === itemId) {
      matchingId = id
    }
  });

  if (matchingId) {
    deleteItemBtn(button);
    deleteCartItem(id)
    console.log('deleted succed');
    console.log(cart);
  } else {
    cart.push(id)
    savedItemBtn(button)
    console.log('add succed');
    console.log(cart);
  }

  saveInLocalStorage();
};


export function removeELem (btnId) {
  const container = document.querySelector(`.cart-product-${btnId}`);
  container.remove();
}

export function deleteCartItem (btnId) {
  cart.forEach((accountId, i) => {
    if (accountId == btnId) {
      cart.splice(i, 1)
    }
  })

  saveInLocalStorage();
}

export function checkCartNull(cartMainElem) {
  if (!cart[0]) {
    cartMainElem.innerHTML = `
        <div class="empty-cart">
          <img src="img/PNG/empty-cart.png" class="empty-cart-img">
        </div>
    `;
  }
}
