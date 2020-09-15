import RegisterEvents from "../helpers/RegisterEvents";

class Buttom {

    constructor(props){
        this.props = props;
    }

    buildComponent(){
        let buttom = document.createElement("input");
        let buttomProps = Object.getOwnPropertyNames(this.props)
        
        buttomProps.map(item => {
            buttom[item] = this.props[item]
        });
        
        if(buttomProps.includes('events')){
            return RegisterEvents.register(buttom,this.props.events)
        }
        return buttom
    }

}

export default Buttom;