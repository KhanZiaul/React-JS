// normally data added in local storage ------------------------

// const LocalStorage = (id) => {

//     localStorage.setItem(id,1);
// };

// dynamically data added in local storage ----------------------

// const LocalStorage = (id) => {

//     let storedCart = localStorage.getItem(id);

//     if(storedCart){

//         let newquantity = parseInt(storedCart ) + 1; 

//         localStorage.setItem(id,newquantity);  
//     }
//     else{

//         localStorage.setItem(id,1);  
//     }

// };

// dynamically added data as object in local storage ---------------

const LocalStorage = (id) => {

    let clientCart = {};

    const storedCart = localStorage.getItem('client-cart');

    if(storedCart){

        clientCart = JSON.parse(storedCart);
    }

    const quantity = clientCart[id];

    if(quantity){

        const newQuantity = quantity + 1 ;

        clientCart[id] = newQuantity ;
    }

    else{

        clientCart[id] = 1 ;
    }

    localStorage.setItem('client-cart', JSON.stringify(clientCart)) ;

};

// remove sigle data from local storage

const removeCartFromstorage = (id) => {

    const storedCart = localStorage.getItem('client-cart');

    if(storedCart){
        let clientCart = JSON.parse(storedCart) ;

        if(id in clientCart){

            delete clientCart[id];

            localStorage.setItem('client-cart', JSON.stringify(clientCart)) ;
        }
    }
}

export {LocalStorage,removeCartFromstorage};