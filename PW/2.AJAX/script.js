function carregarDados(){
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById('dados').innerHTML = formataDados(xhr.responseText)
        }
    }

    xhr.open("GET","lista.json",true)
    xhr.send();
}

function formataDados(strDados){
    var objDados = JSON.parse(strDados)
    var linhastabela = ''
    for(la of objDados['listaAlunos']){
        linhastabela += 
        "<tr>"+
            '<td>'+ la['id'] +'</td>'+
            '<td>'+ la['name'] +'</td>'+
            '<td>'+ la['idade'] +'</td>'+
        '</tr>'
    }
    return linhastabela
}