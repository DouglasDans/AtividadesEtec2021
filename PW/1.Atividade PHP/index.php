<html>

<head>
    <title>Teste</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="js/index.js"></script>
</head>

<body>

    <nav class="color2">
        <img src="Paralax.png" alt="" style="width: 12rem; margin: 1.5rem">
    </nav>

    <section class="forms">
        <h2>Registrar Dados</h2>

        <form method="post" action="inserir-dados.php" class="text-left">
            <label>Nome:</label><br>
            <input type="text" name="Nome" id="Nome" class="input">
            <label>Email:</label><br>
            <input type="email" name="email" id="email" class="input">
            <label>Assunto:</label><br>
            <input type="text" name="assunto" id="assunto" class="input">
            <label>Mensagem:</label><br>
            <textarea name="msg" id="msg" cols="30" rows="3" class="input"></textarea>
    
            <button type="submit" class="btn">Registrar</button>
        </form>

    </section>

    




    <section class="forms">
        <h2>Dados já Registrados</h2>
            <?php 
                include("conexao.php");

                try {
                    $stmt = $pdo -> prepare("select * from tbContato");
                    $stmt -> execute();
                    while ($row = $stmt -> fetch(PDO::FETCH_BOTH)){
                        print '<div class="dados">';
                        print 'Id: '.$row['idContato'].'<br>';
                        print 'Nome: '.$row['nomeContato'].'<br>';
                        print 'Assunto: '.$row['assuntoContato'].'<br>';
                        print 'Email:'.$row['emailContato'].'<br>';
                        print 'Mensagem: '.$row['mensagemContato'].'<br>';
                        print "<a href='excluir-categoria.php?id=".$row['idContato']."' ><button type='submit' class='btn-excluir '>Excluir</button></a>";
                        print '</div>';
                    }
                }catch(PDOException $e){
                    print "Erro: "+ $e -> getMessage();
                }

            ?>
    </section>
    <footer class="color2">
        <p>Tela de cadastro para testes em PHP, JS, CSS. Distribuido de forma livre pela Paralax Brasil</p>
    </footer>
</body>

</html>