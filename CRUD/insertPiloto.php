<?php
    include '../CLASSES/conexao.php';
    include_once '../CLASSES/usuario.php';
    session_start();


    header('content-type: application/json');

    $sql = "INSERT INTO piloto (nome, pontuacao, equipe, vitorias, podiums, usuario_id) VALUES ('" . $_POST['nome'] . "', '" . $_POST['pontuacao'] . "', '" . $_POST['equipe'] . "', '" . $_POST['vitorias'] . "', '" . $_POST['podiums'] . "', " .  $_SESSION['user']->codigo . ")";

    if($conn->query($sql) === true){
        $msg = "Piloto cadastrado com sucesso!";
    }else{
        $msg = "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

    echo json_encode(['msg'=>$msg]);
?>