<?php 

    $item = $_POST['item'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    mail("test@gmail.com", "Заказ с сайта avtomatras.com.ua","Товар: ".$item. "\n\nИмя: ".$name."\n\nТелефон: ".$phone."\r\n")

?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">

function changeurl1(){eval(self.location="https://avtomatras.com.ua/success.html");}
window.setTimeout("changeurl1();",1);

</script>