// normally data added in local storage ------------------------

// const LocalStorage = (id) => {

//     localStorage.setItem(id,1);
// };

// dynamically data added in local storage ----------------------

const LocalStorage = (id) => {

    let storedCart = localStorage.getItem(id);

    if(storedCart){

        let newquantity = parseInt(storedCart )+ 1; 

        localStorage.setItem(id,newquantity);  
    }
    else{

        localStorage.setItem(id,1);  
    }

};

export default LocalStorage;