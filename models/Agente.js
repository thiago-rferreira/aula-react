class Agente {
    constructor(displayName, bustPortrait, description){
        this.displayName = displayName;
        this.bustPortrait = bustPortrait;
        this.description = description;
        this.uuid = this.generateId();
    }

    generateId(){
        return Math.floor(Math.random() * 10000);
    }
    
}


export default Agente