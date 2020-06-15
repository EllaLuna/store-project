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
    productTable = document.getElementById("productTable");
    document.getElementById("amount").innerText = '0.00$';
    navig = document.getElementById("navig")
    items = 0;
    btn.onclick = cartButton;
    closeButton.onclick = popupClose;
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
    var exists = false;
    for(i in cart) {
        if (cart[i].name == name) {
            exists = true;
            cart[i].count += count;
            document.getElementById("amount").innerText = `${num} $`;
            cart[i].price = Number((cart[i].price + price).toFixed(4));
            for (var j in curItem) {
                var curName = document.getElementsByClassName('item_row')[j];
                if(curName.childNodes == undefined)
                    return;
                if (curName.childNodes[2].innerText == cart[i].name) {
                    var j = i+1;
                    curItem[i].innerHTML = `<img class = "item-picture" src="${image}"> 
                        <span>${name}</span> 
                        <span class="price-itm">${cart[i].price}</span>
                        <span>${cart[i].count}</span>
                        <input type="hidden" name="product' + ${j} + '[]" value="${image}">
                        <input type="hidden" name="product' + ${j} + '[]" value="${name}">  
                        <input type="hidden" name="product' + ${j} + '[]" value="${cart[i].price}">
                        <input type="hidden" name="product' + ${j} + '[]" value="${cart[i].count}">
                          <input type="hidden" name="total" value="${num}">
                       <button class = "button-remove" onclick="removeFromCart('${name}', '${price}')">Remove</button>`
                }
            }
            return;
        }
    }
    if(exists == false) {
        items++;
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
        <input type="hidden" name="product' + ${items} + '[]" value="${image}">
        <input type="hidden" name="product' + ${items} + '[]" value="${name}">  
        <input type="hidden" name="product' + ${items} + '[]" value="${price}">
        <input type="hidden" name="product' + ${items} + '[]" value="${count}">    
        <input type="hidden" name="total" value="${num}">
        <button class = "button-remove" onclick="removeFromCart('${name}', '${price}')">Remove</button>
    `
    cartRow.innerHTML = itemHtml;
    cartRow.addEventListener('mouseover', function() {
        this.style.backgroundColor = "mistyrose";
    });
    cartRow.addEventListener('mouseout', function() {
        this.style.backgroundColor = "floralwhite";
    });
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
                        var j = i+1;
                    curItem[i].innerHTML = `<img class = "item-picture" src="${cart[i].image}"> 
                        <span>${name}</span> 
                        <span class="price-itm">${cart[i].price}</span>
                        <span>${cart[i].count}</span>
                        <input type="hidden" name="product' + ${j} + '[]" " value="${cart[i].image}">
                        <input type="hidden" name="product' + ${j} + '[]" value="${name}">  
                        <input type="hidden" name="product' + ${j} + '[]" value="${cart[i].price}">
                        <input type="hidden" name="product' + ${j} + '[]" value="${cart[i].count}">
                        <input type="hidden" name="total" value="${num}">
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

function displayCart(image, name, price, quantity) {
    var tableRow = document.createElement('tr');
    tableRow.classList.add('product');
    let productData = `
        <td> <img class = "item-picture" src="${image}"> </td>
           <td>${name}</td> 
             <td class="price-itm">${price}</td>
             <td>${quantity}</td>

     `;
    tableRow.innerHTML = productData;
    tableRow.addEventListener('mouseover', function() {
        this.style.backgroundColor = "mistyrose";
    });
    tableRow.addEventListener('mouseout', function() {
        this.style.backgroundColor = "floralwhite";
    });
    productTable.appendChild(tableRow);
}

function updateNavi(isMain) {
    if(isMain == true) {
        navig.innerHTML = `<ul class = "navi">
            <il class="navi"> <a href="#home" class="nav-color"
            onmouseenter=" colorAnchor(this)" onmouseleave="uncolorAnchor(this)">Home</a> </il>
            <il class="navi"> <a href="#about" class="nav-color"
            onmouseenter=" colorAnchor(this)" onmouseleave="uncolorAnchor(this)">About</a> </il>
            <il class="navi"> <a href="#contact" class="nav-color"
            onmouseenter=" colorAnchor(this)" onmouseleave="uncolorAnchor(this)">Contact</a> </il>
            </ul>`
    }
    else {
        navig.innerHTML = `<ul class = "navi">
            <il class="navi"> <button onclick="goBack()" class="button"
            onmouseenter=" colorAnchor(this)" onmouseleave="uncolorAnchor(this)">Go Back</a> </il>
            </ul>`
    }
}

function goBack() {
    window.history.back();
}