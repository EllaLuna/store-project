
<header>
		<div class = "stick"> Pandemic Shop
            <button id="btn" class="fa fa-shopping-cart" class = "cart-popup"></button>
            <form method="post" action = "./finalOrder.php">
            <div id = "popup" class = "cart-popup">
				<button class = "close" type="button">x</button>

				<br>
				<div id = "out-purchase-button" class = "cart-footer">
				<button type="submit" class = "button-purchase" id = "purchase-button">Purchase</button>
					<button class = "button-purchase" id="clear-button" onclick="clearCart()">Clear Cart</button>
					<span class = "total"> Total: <span id = "amount"> <span>$</span></span></span>
                </div>
			</div>
            </form>
		   <nav id="navig">
			   <ul class = "navi">
				   <il class="navi"> <a href="#home" class="nav-color"
										onmouseenter=" colorAnchor(this)" onmouseleave="uncolorAnchor(this)">Home</a> </il>
				   <il class="navi"> <a href="#about" class="nav-color"
										onmouseenter=" colorAnchor(this)" onmouseleave="uncolorAnchor(this)">About</a> </il>
				   <il class="navi"> <a href="#contact" class="nav-color"
										onmouseenter=" colorAnchor(this)" onmouseleave="uncolorAnchor(this)">Contact</a> </il>
			   </ul>
		   </nav>
		</div>


</header>