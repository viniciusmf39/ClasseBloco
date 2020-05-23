class Bloco{
    constructor(){
        this.titulo = document.getElementById('titulo');
        this.conteudo = document.getElementById('conteudo');
        this.data = document.getElementById('data');
        this.hora = document.getElementById('hora');
        this.btnAdicionarNota = document.getElementById('Btncomp');
        this.div = document.getElementById('blocoNotas');
        this.bloco = [];
        this.AdicionarCompromisso();
    }

    AdicionarCompromisso(){
        this.btnAdicionarNota.onclick = event => this.AdicionarNota();
    }
    AdicionarNota(){
        if(!this.titulo.value || !this.conteudo.value || !this.data.value || !this.hora.value){
            alert('Preencha todos os campos requisitados') ;
        }else{

            const blocos = {
                titulo: this.titulo.value ,
                conteudo: this.conteudo.value ,
                data : this.data.value,
                hora : this.hora.value
            }
            this.bloco.push(blocos);
        }
        this.mostrarNotas();
        this.quantidadeNotas();
    }

    mostrarNotas(){
            this.div.innerHTML ='' ;
        for(let blocos of this.bloco){
            this.div.innerHTML +=
            `
            <label> Titulo: </label>
            <label>${blocos.titulo}</label>
            <br>
            <label> Conteúdo: </label>
            <label>${blocos.titulo}</label>
            <br>
            <label> Data :</label>
            <label>${blocos.data}</label>
            <br>
            <label> Hora :</label>
            <label>${blocos.hora}</label>
            <br>
            <br>
            `
        }
    }
    
    quantidadeNotas(){
        this.div.innerHTML = '';
        
        console.log() ;

        this.div.innerHTML += `
        <label>Notas Criadas:</label>
        <label>${this.bloco.lenght}</label>
        `
    }
}

new Bloco(); 