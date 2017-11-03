import store from './store';

 const playing = (play , next) => {

    let newList = store.getState().songs;
    let newPosition = store.getState().position + next;
    if (newPosition >=3){
        newPosition = 0;
    }
    newList = newList.map(item => {
        if (item.id === newPosition){
            return {
                ...item,
                state: play
            }
        }
        return item
    });

    store.setState({
       songs: newList , 
       position:newPosition
    });
 }

 export const Play = id =>{
    playing('starplay' , 0);
 };
 export const Next = id =>{
     playing('starplay',1);
    
};

 export const Stop = id =>{
    playing('notplay' ,0)
};
