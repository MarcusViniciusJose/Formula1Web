<?php
class Usuario{
    public $codigo, $nome, $login, $senha;

    //Metodo construtor
    function __construct($codigo,$nome, $login, $senha) {
            $this->codigo = $codigo;
            $this->nome = $nome;
            $this->login = $login;
            $this->senha = $senha;
    }
    
    //Funcao para validar o login
    function validaUsuarioSenha($login, $senha) {
        if($login == $this->login && $senha == $this->senha) {
            return true;
        }
        return false;
    }
}
?>