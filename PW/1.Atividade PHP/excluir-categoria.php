<?php
    $idContato = $_GET['id'];

    include('conexao.php');


    try {
        if ($resultado = 'True'){
            $stmt = $pdo -> prepare("delete from tbContato where idContato = '$idContato'");
            $stmt -> execute();
            $pdo = null;
            header('Location:index.php');
        }
        

        
    }catch(PDOException $e){
        print 'Erro: '. $e -> getMessage();
    }


?>