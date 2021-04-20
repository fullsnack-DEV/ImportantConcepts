//All the redux concept

//why we need redux?

//according to the defination redux is state managment container for a javascript application

//Advantage of redux

// 1 > Centraloize the applicationm store
//It put all the state in our application into the
//single centrlized Repository called store. Store is simple Javascript Object
//so, there is only single source of a State in out application
// 2> with the help of a redux we can make the data flow
//more predictable  and transparent

//cycle of redux

//UI ---> Actions  ----> Reducers -----> Store ----> UI will uppdate accordingly to the State chnage in Store

//Actions ?

//actions are a plain javascript Objects
// const addtofav = (id) => ({
//   type: addtofav,
//   id: id
// });

//Action creator will carry some data to our Reducer and according to that
//fdata the  and type of actionj the reponssible reducer will get invoked
