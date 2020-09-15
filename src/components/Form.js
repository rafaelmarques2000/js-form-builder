import RegisterEvents from '../helpers/RegisterEvents'

class Form {
    constructor(props){
       this.props = props;
    }

    buildComponent(){
        let form = document.createElement("form");
        let formProps = Object.getOwnPropertyNames(this.props)
        
        formProps.map(item => {
            form[item] = this.props[item]
        })

        if(formProps.includes("events")){
           return RegisterEvents.register(form,this.props.events) 
        } 
        return form;
    }
}

export default Form;