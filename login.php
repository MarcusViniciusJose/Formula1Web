<?php
//Inicia a sessão
session_start();
?>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página de Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .login-container {
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            margin-top: 0px;
            margin-bottom: 20px;
            font-size: 35px;
            text-align: center;
        }
        input[type="text"], input[type="password"] {
            width: 95%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #5cb85c;
            border: none;
            color: white;
            border-radius: 3px;
            cursor: pointer;
        }
        button:hover {
            background-color: #4cae4c;
        }
        label{
            font-family: Arial, sans-serif;
            color: red;
            font-size: 10px;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <h2>Login</h2>
        <form action="./CLASSES/verifica.php" method="POST">
            <input type="text" name="usuario" placeholder="Usuário" required>
            <input type="password" name="senha" placeholder="Senha" required>
            <?php if (isset($_SESSION['msg'])): ?>
                    <label><?php echo $_SESSION['msg']; ?></label>
                    <?php unset($_SESSION['msg']);?>
            <?php endif; ?>
            <button type="submit">Entrar</button>
        </form>
    </div>
</body>
</html>