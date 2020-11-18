    if (document.redyState == 'loading') {
        document.addEventListener('DOMContentLoaded',ready)
    } else {
        ready()
    }


    function removeCartItem(event){
    var buttonClicked=event.target
        buttonClicked.parentElement.parentElement.remove()
     //   updateCartTotal()
        console.log(buttonClicked)
    }

    function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn_remove')
for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
        
  }
}
       
//button.addEventListener('click', removeCartItem)
 var addToCartButtons = document.getElementsByClassName('add_button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)

    }

function addItemToCart(title, price ,imageSrc){
    var cartRow = document.createElement('div')
    //cartRow.innerText=title will be inner html
    cartRow.classList.add('cart_row')
    var cartItems = document.getElementsByClassName('shop-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('product_title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents =`<div class="product">
                        <span class="product_title">${title}  </span>
                        <img class="product_image" src="${imageSrc}" width="100" height="100">
                        <div class="product_details">
                            <span class="product_price">${price}</span>
                            <input class="shop_item_quantity_input" type="number" value=1> </div>
                        <button class="btn_remove" type="button">REMOVE</button>
                    </div>`
    cartRow.innerHTML=cartRowContents               
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn_remove')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('shop_item_quantity_input')[0].addEventListener('change',quantityChanged)
} 
function addToCartClicked(event) {
    var button = event.target
//    button.parentElement.parentElement.add()
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('product_title')[0].innerText
    var price = shopItem.getElementsByClassName('product_price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('product_image')[0].src
    addItemToCart(title, price ,imageSrc)
    updateCartTotal()
   
}

 //update the total price
function updateCartTotal(){
var cartItemContainer=document.getElementsByClassName('my_list')[0]
var cartRows= cartItemContainer.getElementsByClassName('cart_total') 
var total=0
 for (var i = 0; i <cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement=cartRow.getElementsByClassName('cart_total_price')[0]
        var quantityElement=cartRow.getElementsByClassName ('shop_item_quantity_input')[0]
        var price = parseFloat(priceElement.innerText.replace('dt', ''))
        var quantity=quantityElement.value
        price=total*quantity
        // total = Math.round(total * 100) / 100 if the total has,999999999
        document.getElementsByClassName('cart_total_price')[0].innerText=total +'DT'
 }
 }
 
document.getElementsByClassName('btn-purchase')[0].addEventListener('click',purchaseClicked)
function purchaseClicked (){
    alert('thank you for your purchase')
    var cartTotal= document.getElementsByClassName('cart_total')[0]
    while (cartTotal.hasChildNodes()){
        cartTotal.removeChild(cartTotal.firstChild)
}

}