<?php

{
   $mail="zayavka.biga@ya.ru";
  // e-mail куда уйдет письмо

  $title="Заявка с сайта бигамотор/тнвд"; // заголовок(тема) письма

  $name = $_POST["name"];  
  $phone = $_POST["phone"];
  $city = $_POST["city"];
  $action = $_POST["action"];
  $quiz1 = $_POST["quiz1"];
  $quiz2 = $_POST["quiz2"];
  $quiz3 = $_POST["quiz3"];
  $quiz4 = $_POST["quiz4"];
  $quiz5 = $_POST["quiz5"];
  $quiz6 = $_POST["quiz6"];
  $quizsale = $_POST["quizsale"];
  $mess="<b>Клиент прошел тест - </b>" .$action ."<br><b> Имя</b> <br>" .$name. "   <br> <b>телефон</b><br>" .$phone ."<br> <b>Ответы на вопросы</b>
       <br>Вопрос1: "  .$quiz1 
      ."<br>Вопрос2: " .$quiz2 
      ."<br>Вопрос3: " .$quiz3 
      ."<br>Вопрос4: " .$quiz4 
      ."<br>Вопрос5: " .$quiz5 
      ."<br>Вопрос6: " .$quiz6 
      ."<br><b>Общая скидка</b> " .$quizsale;


  $headers="MIME-Version: 1.0\r\n";

  $headers.="Content-type: text/html; charset=utf-8\r\n"; //кодировка

  $headers.="From: admin@".$_SERVER["SERVER_NAME"]; // откуда письмо (необязательнакя строка)

  mail($mail, $title, $mess, $headers); // отправляем


print"1";

}

?>