
const tarefaInput = document.querySelector("#tarefa");
console.log(tarefaInput);

const btnEnviar = document.querySelector("#botaoEnviar");

const listTasks = document.querySelector(".list-tasks");

btnEnviar.addEventListener("click", (e)=>{
    e.preventDefault();

    const valorTarefa = tarefaInput.value.trim();
    if(valorTarefa === ""){
        alert("Preencha o nome da Tarefa!");
        return;
    }

    inserirTarefaExcluir(valorTarefa);
    
    tarefaInput.value = "";
})

const inserirTarefaExcluir = (valor) =>{
    console.log(valor);
    
    const linha = document.createElement("li"); 
    const btnExcluir = document.createElement("button");
    const imgLixeira = document.createElement("img");
    imgLixeira.src = "images/delete-icon.svg";
    imgLixeira.alt = "Excluir";
    imgLixeira.classList.add("icon-lixeira");

    btnExcluir.classList.add("botaoExcluir");

    listTasks.appendChild(linha);
    linha.textContent = valor;
    linha.appendChild(btnExcluir);
    btnExcluir.appendChild(imgLixeira);

    //EXCLUIR TAREFA
    btnExcluir.addEventListener("click", () => {
      listTasks.removeChild(linha);
    });

    //TAREFA CONCLUIDA
    linha.addEventListener("click", ()=>{
        linha.classList.toggle("concluida");
    })

}







