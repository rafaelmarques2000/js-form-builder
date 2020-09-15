import RegisterEvents from '../helpers/RegisterEvents'
import InputContainer from './InputContainer';

class InputFactory {
     
    constructor(props) {
          this.props = props;
     } 

     buildComponent(){
         let input = document.createElement("input");
         let inputProps = Object.getOwnPropertyNames(this.props)
         let container = new InputContainer(this.props).buildComponent();

         inputProps.map(item => {
             input[item] = this.props[item]
         })

         if(inputProps.includes("events")) { 
             input = RegisterEvents.register(input,this.props.events);
         }

         container.appendChild(input);
         return container;
     }  
}

export default InputFactory;