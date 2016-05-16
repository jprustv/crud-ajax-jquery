<?php

$id = intval ($_REQUEST['id']);
$assunto = $_REQUEST['assunto'];
$corpoMsg = $_REQUEST['corpoMsg'];
$dataPublicacao = $_REQUEST['dataPublicacao'];

include 'connect.php';

$sql = "insert into Noticias(noticiaID, assunto,corpoMsg,dataPublicacao) values('$id', '$assunto','$corpoMsg','$dataPublicacao')";
$result = @mysql_query($sql);
if ($result){
	echo json_encode(array('success'=>true));
} else {
	echo json_encode(array('msg'=>'Erro ao inserir dados.'));
}
?>