import createStore from 'redux-zero';

const songs = [
    { id : 0 ,
      title : "Here Comes the Sun - The Beatles",
      duration :'2.45',
      state :'notplay'
    },
    { id : 1  ,
      title : "Walking on Sunshine - Katrina and the Waves",
      duration :'3.43',
      state :'notplay'
    },
    { id : 2 ,
      title : "Sunshine - Katrina",
      duration :'3.43' ,
      state :'notplay'
    },
] ;

const initialState = {
    songs : songs 
};

const store = createStore(initialState);

export default store;