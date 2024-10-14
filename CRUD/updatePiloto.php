<?php
    include '../CLASSES/conexao.php';
    include_once '../CLASSES/usuario.php';
    session_start();

    header('Content-type: application/json');

    $sql = "UPDATE piloto SET nome = '" . $_POST['nome'] . "', pontuacao = '" . $_POST['pontuacao'] . "', equipe = '" . $_POST['equipe'] . "', vitorias = '" . $_POST['vitorias'] . "', podiums = '" . $_POST['podiums'] . "', usuario_id = '" . $_SESSION['user']->codigo . "' WHERE piloto_id = " . $_POST['piloto_id']. "";

    if($conn->query($sql)===true){
        $msg = "Dados atualizados com sucesso";
    }else{
        $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>