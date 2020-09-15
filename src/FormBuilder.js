import InputFactory from './components/InputFactory'
import Form from './components/Form'
import Buttom from './components/Button'
import Select from './components/Select';

class FormBuilder {
    constructor(domElementId){
        this.domElementId = domElementId;
        this.elements = [];
    }
    createInput(props){
         let factory = new InputFactory(props)
         this.elements.push(factory.buildComponent());
         return this;       
    }

    createButton(props){
        let buttom = new Buttom(props).buildComponent();
        this.elements.push(buttom);
        return this;
    }

    createSelect(props){
        let select = new Select(props).buildComponent();
        this.elements.push(select)
        return this;
    }

    createForm(props){
        let form = new Form(props).buildComponent();
        this.elements.map(item => form.appendChild(item));
        document.getElementById(this.domElementId).appendChild(form);
    }
}
export default FormBuilder;