class Label{
    constructor(props){
        this.props = props;
    }

    buildComponent(){
        let label = document.createElement("label");
        label.textContent = this.props.label;
        return label;
    }
}

export default Label;