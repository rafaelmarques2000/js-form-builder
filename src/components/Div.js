class Div{
    
    constructor(){
        this.DEFAULT_CLASS_NAME = 'input-container';
    }

    buildComponent(){
        let div = document.createElement("div");
        div.className = this.DEFAULT_CLASS_NAME;
        return div;
    }
}

export default Div;