'use client'

class ListaAgentes {
    constructor(){
        this.listaAgentes = []
    }

    addAgente(agente){
        this.listaAgentes.push(agente)
        console.log("Lista Agente Class",this.listaAgentes)
    }

    getListaAgentes(){
        return this.listaAgentes
    }

    removeAgente(agente){
        this.listaAgentes = this.listaAgentes.filter(item => item.uuid !== agente.uuid)
        console.log("Lista Agente Class",this.listaAgentes)
    }
    
}

export default ListaAgentes