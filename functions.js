function colorRow(tableRow) {
        tableRow.style.backgroundColor = "lightCoral";
}

function uncolorRow(tableRow) {
    tableRow.style.backgroundColor = "floralwhite";
}

function colorAnchor(anchor) {
    anchor.style.color = "floralwhite";
}

function uncolorAnchor(anchor) {
    anchor.style.color = "black";
}

window.onload = function() {
    btn = document.getElementById("btn");
    popup = document.getElementById("popup");
    popupContent = document.getElementById("popup-content");
    closeButton = document.getElementsByClassName("close")[0];
    purchaseButton = document.getElementById("purchase-button")
    outPurchaseButton = document.getElementById("out-purchase-button");
    clearButton = document.getElementById("clear-button");

    btn.onclick = cartButton;
    closeButton.onclick = popupClose;

    document.getElementById("amount").innerText = '0.00$';
    purchaseButton.disabled = true;
    clearButton.disabled = true;

    var exit = false;
    $(document).mouseleave(function () {
        if (exit == false) {
            exit = true;
            alert("Have a great day and thanks for coming! ♥");
        }
    });
}

var cart = [];
var curItem = document.getElementsByClassName("item_row");
var num = 0;

function cartButton() {
    popup.style.display = "block";
    btn.style.backgroundColor = "white";
    btn.style.border = "2px solid black";
}

function popupClose() {
    popup.style.display = "none";
    btn.style.backgroundColor = "lightcoral";
    btn.style.border = "0px";
}

var item = function (name, price, image, count) {
    this.name = name;
    this.price = price;
    this.image = image;
    this.count = count;
};

function addProduct(name, price, image, count) {
    var i = 0;
    num += price;
    num = Number(num.toFixed(4));
    for(i in cart) {
        if (cart[i].name == name) {
            cart[i].count += count;
            document.getElementById("amount").innerText = `${num} $`;
            cart[i].price = Number((cart[i].price + price).toFixed(4));
            for (var j in curItem) {
                var curName = document.getElementsByClassName('item_row')[j];
                if(curName.childNodes == undefined)
                    return;
                if (curName.childNodes[2].innerText == cart[i].name) {
                    curItem[i].innerHTML = `<img class = "item-picture" src="${image}"> 
                        <span>${name}</span> 
                        <span class="price-itm">${cart[i].price}</span>
                        <span>${cart[i].count}</span>
                       <button class = "button-remove" onclick="removeFromCart('${name}', '${price}')">Remove</button>`
                }
            }
            return;
        }
    }
    var product = new item(name, price, image, count);
    cart.push(product);
    purchaseButton.disabled = false;
    clearButton.disabled = false;
    document.getElementById("amount").innerText = `${num} $`;
    createHtml(name, price, image, count);
}

function createHtml(name, price, image, count) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('item_row');
    var itemHtml =
        `<img class = "item-picture" src="${image}">
    <span>${name}</span> 
    <span class="price-itm">${price}</span>
    <span>${count}</span>
    <button class = "button-remove" onclick="removeFromCart('${name}', '${price}')">Remove</button>
    `
    cartRow.innerHTML = itemHtml;
    popup.appendChild(cartRow);
    popup.appendChild(outPurchaseButton);
}

function removeFromCart(name, price) {
    for(var i in cart) {
        if (cart[i].name == name) {
            num -= price;
            num = Number(num.toFixed(4));
            cart[i].count -= 1;
            document.getElementById("amount").innerText = `${num} $`;
            cart[i].price = Number((cart[i].price - price).toFixed(4));
            for (var j in curItem) {
                var curName = document.getElementsByClassName('item_row')[j];
                if (curName.childNodes == undefined)
                    return;
                if (curName.childNodes[2].innerText == cart[i].name) {
                    if(cart[i].count > 0) {
                    curItem[i].innerHTML = `<img class = "item-picture" src="${cart[i].image}"> 
                        <span>${name}</span> 
                        <span class="price-itm">${cart[i].price}</span>
                        <span>${cart[i].count}</span>
                       <button class = "button-remove" onclick="removeFromCart('${name}', '${price}')">Remove</button>`
                     }
                    else {
                        curItem[i].remove();
                        cart.splice(i, 1);
                        if(cart.length == 0) {
                            purchaseButton.disabled = true;
                            clearButton.disabled = true;
                        }
                    }
                }
            }
        }
    }
}

function clearCart() {
    cart.splice(0, cart.length);
    for(var i = curItem.length-1; i >=0; --i) {
        curItem[i].remove();
    }
    num = 0;
    document.getElementById("amount").innerText = `${num} $`;
    purchaseButton.disabled = true;
    clearButton.disabled = true;
}