import InputContainer from './InputContainer';
import RegisterEvents from '../helpers/RegisterEvents';

class Select {
     constructor(props){
         this.props = props
     }

     buildComponent(){
         let select = document.createElement("select");
         let selectProps = Object.getOwnPropertyNames(this.props);
         let container = new InputContainer(this.props).buildComponent();
         
         selectProps.filter(item => item != "options").map(item => {
            select[item] = this.props[item]
         });

        this.props.options.map(item =>{
            select.options.add(new Option(item.text,item.value));
        })

        if(selectProps.includes("events")){
            select = RegisterEvents.register(select,this.props.events); 
        }
        container.appendChild(select);
        return container;
     }
}

export default Select;