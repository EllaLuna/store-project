<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pandemic Shop</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" type="text/javascript"></script>
    <script src="functions.js" type="text/javascript"></script>

</head>
<body>
<?php
require ('./header.php');
$notMain = false;
echo var_dump($notMain);
echo "<script type='text/javascript'> updateNavi( ".$notMain.") </script>";
$quantity = 0;
echo "<br>
<br><br>";
echo "
<table class='table-del'>
    <tr>
        <th>Product</th>
        <th>Title</th>
        <th>Price</th>
        <th>Quantity</th>
    </tr>
    <tbody id='productTable' class='table-del'>";
   
foreach($_POST as $row) {
    if(gettype($row) !== "string") {
        echo "<script type='text/javascript'> displayCart( '" . $row[0] . "', '" . $row[1] . "', " . $row[2] . " , " . $row[3] . ") </script>";
        $quantity += (int)$row[3];
    }
}
echo "<tr class='total'> 
        <td>Total</td>
        <td>". $_POST['total'] . "$ </td>
         <td>Quantity</td>
         <td>" .$quantity. "</td>
        </tr>
</tbody>
</table>
<br><br>";
require ('./footer.php');
?>
</body>
</html>