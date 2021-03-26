<?php
    $nome = $_POST['Nome'];
    $email = $_POST['email'];
    $assunto = $_POST['assunto'];
    $msg = $_POST['msg'];
    include('conexao.php');
    $teste = 0;
    if (empty($nome) == false){$teste += 1;}
    if (empty($email) == false){$teste += 1;}
    if (empty($assunto) == false){$teste += 1;}
    if (empty($msg) == false){$teste += 1;}

    if ($teste == 4){
        try {
            $stmt = $pdo -> prepare("insert into tbContato values(null,'$nome', '$email', '$assunto', '$msg')");
            $stmt -> execute();
            $pdo = null;
    
            header('Location:index.php');
        }catch(PDOException $e){
            print 'Erro: '. $e -> getMessage();
        }
    }else{
        echo '<script type:"javascript" >alert("Um ou mais dos campos está vazio, é obrigatório inserir dados em todos so campos");</script>';
        header('Location:index.php');
    }



   


?>