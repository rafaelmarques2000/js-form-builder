import Label from './Label'
import Div from './Div'

class InputContainer{
    
    constructor(props){
        this.props = props
    }

    buildComponent(){
        let label = new Label(this.props).buildComponent();
        let container = new Div().buildComponent();
        let br = document.createElement("br");
        
        container.appendChild(label);
        container.appendChild(br);
        
        return container;    
    }

}

export default InputContainer