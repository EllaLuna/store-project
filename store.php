<?php
$game_list = array (
    1 => array ("name" => "The Last Of Us", "price" => 14.99, "img" => 'https://media.playstation.com/is/image/SCEA/the-last-of-us-remastered-two-column-01-ps4-us-28jul14?$TwoColumn_Image$',
        "description" => "The Last of Us is a 2013 action-adventure game. et away from the real pandemic to play a virtual one! Winner of over 200 Game of the Year awards."),
    2 => array("name" => "Skyrim", "price" => 39.99, "img" => 'https://upload.wikimedia.org/wikipedia/he/1/15/The_Elder_Scrolls_V_Skyrim_cover.png',
        "description" => "The Elder Scrolls V: Skyrim is here! Brings the epic fantasy to life, Run away from quarantine to fantasy. Winner of more than 200 Game of the Year Awards."),
    3 => array("name" => "The Sims 4", "price" => 35.99, "img" => 'https://upload.wikimedia.org/wikipedia/he/3/32/The_Sims_4_Box_Art.png',
        "description" => "The Sims 4 is a real life simulation game. Experience creativity, humor, escape, and freedom. Live your amazing virtual life without the pandemic!")
);

$books_list = array(
    1 => array("name" => "Brave New World", "price" => 24.99, "img" => 'https://upload.wikimedia.org/wikipedia/en/thumb/6/62/BraveNewWorld_FirstEdition.jpg/220px-BraveNewWorld_FirstEdition.jpg',
        "description" => "Huxley imagines a genetically-engineered future where life is pain-free but meaningless. The book heavily influenced George Orwell's 1984 and science-fiction in general."),
    2 => array("name" => "The Plague", "price" => 19.99, "img" => 'https://img1.od-cdn.com/ImageType-400/0111-1/765/7F7/93/%7B7657F793-73CD-4029-BD7C-F08521199F6F%7DImg400.jpg',
        "description" => "The Plague is a novel by Albert Camus, published in 1947 that tells the story of a plague sweeping the French Algerian city of Oran. Let's see how far can we get!"),
    3 => array("name" => "1984", "price" => 14.99, "img" => 'https://images-na.ssl-images-amazon.com/images/I/31PVwF1ujvL._SX282_BO1,204,203,200_.jpg',
        "description" => "A dystopian novel by English novelist George Orwell. 1984 centres on the consequences of government over-reach, totalitarianism, mass surveillance, etc. Let's see how far our government will get!"),

)
?>

<article>
    <a name="home"></a>
    <br>
    <h2>Go Through Quarantine:</h2>
    <br>
    <div class = "container-fluid">
        <h3>With Games:</h3>
        <br>
        <div class="row">
            <?php
            foreach($game_list as $row) {
                echo "<div class = 'col-sm-4'>
                    <img src = " .$row["img"] ." alt = \"The Last Of Us.jpg\">
                    <h5>" .$row["name"] . "</h5> 
                    <p>" .$row["description"]. "</p> 
                    <p class = 'price'>".$row["price"]. "$</p>";
                echo "<button onclick='addProduct(`".$row["name"]. "`, ".$row["price"]. ", `" .$row["img"]. "`, 1)' class = 'button'>Add to Cart</button>
                    </div>";
            }
            ?>

        </div>
        <br>
        <hr>
        <h3>With Knowledge:</h3>
        <br>
        <div class = "row">
            <?php
            foreach($books_list as $row) {
                 echo "<div class = 'col-sm-4'>
                    <img src = " .$row["img"] ." alt = \"The Last Of Us.jpg\">
                    <h5>" .$row["name"] . "</h5> 
                    <p>" .$row["description"]. "</p> 
                    <p class = 'price'>".$row["price"]. "$</p>";
                    echo "<button onclick='addProduct(`".$row["name"]. "`, ".$row["price"]. ", `" .$row["img"]. "`, 1)' class = 'button'>Add to Cart</button>
                    </div>";
            }
            ?>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
</article>