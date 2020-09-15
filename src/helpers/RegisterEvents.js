class RegisterEvents{
    register(component,events){
        events.map((item,index) =>{
            let eventName = Object.getOwnPropertyNames(item)[0]
            component.addEventListener(eventName,item[eventName]);
        })
        return component;
    }
}

export default new RegisterEvents();