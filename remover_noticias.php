<?php

$id = intval($_REQUEST['id']);

include 'connect.php';

$sql = "delete from Noticias where noticiaID=$id";
$result = @mysql_query($sql);
if ($result){
	echo json_encode(array('success'=>true));
} else {
	echo json_encode(array('msg'=>'Erro ao remover dados.'));
}
?>