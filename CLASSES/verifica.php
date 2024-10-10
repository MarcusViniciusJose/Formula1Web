<?php
// Inicia a sessão
session_start(); 

include_once 'conexao.php';
include_once 'usuario.php';

// Validação do login
if (isset($_POST['usuario']) && isset($_POST['senha']))
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];

    $consulta = mysqli_query($conn, "SELECT usuario_id, nome, usuario, senha FROM usuarios WHERE usuario = '" . $usuario  . "'");
    $dados = mysqli_fetch_assoc($consulta);
    $user = null;
    if ($dados != null) {
        $user = new Usuario($dados["usuario_id"], $dados["nome"], $dados["usuario"], $dados["senha"]);
    }

    if ($user != null && $user->validaUsuarioSenha($usuario, $senha)) {
        $_SESSION['user'] = $user;
        header('Location: ../index.php');
        exit();
    } else {
        $_SESSION['msg'] = "Usuário ou senha incorretos!!!";
        header("Location: ../login.php");
        exit();
    }
?>