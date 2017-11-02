import store from './store';

 export const Play = id =>{
    let newList = store.getState().songs;
    newList = newList.filter(item => {
        if (item.id == id){
            item.state = 'starplay';
        }
    });
    console.log(newList) ;
    store.setState({
       comments: newList
    });
 };
 export const Next = id =>{
    let newList = store.getState().songs;
    newList = newList.filter(item => item.id == id);
    store.setState({
       comments: newList
    });
};
 export const Stop = id =>{
    let newList = store.getState().songs;
    newList = newList.filter(item => item.id == id);

    console.log(newList);
    store.setState({
       comments: newList
    });
};
/*
export const deleteComment = id => {
    let newList = store.getState().comments;
    newList = newList.filter(item => item.id != id);
    store.setState({
       comments: newList
    });
 };*/