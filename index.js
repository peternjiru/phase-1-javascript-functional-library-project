
function myEach(collection,callback){
    for(let element of typeof collection==="object"?Object.values(collection):collection  ){
        callback(element)
    }
    return collection
}

function myMap(collection,callback){
    let newCollection=[];
    for(let element of typeof collection==="object"?Object.values(collection):collection){
        newCollection.push(callback(element));
    }
    return newCollection
}

function myReduce(collection,callback,acc){
    let x=0;
    typeof acc==='undefined'?x=1:x=0;
    if(typeof acc==='undefined'){typeof collection==="object"?acc=Object.values(collection)[0]:acc=collection[0]}    
    for(let element of typeof collection==="object"?(Object.values(collection)).slice(x):collection.slice(x)){
        acc = callback(acc,element,collection)
    }
    return acc;
}

function myFind(collection,callback){
    for(let element of typeof collection==="object"?Object.values(collection):collection){
        if(callback(element))return element
    }
}

function myFilter(collection,callback){
    const newArray=[]
    for(let element of typeof collection==="object"?Object.values(collection):collection){
        if(callback(element)) newArray.push(element);
    }
    return newArray
}

function mySize(collection){ // without using .length
    let length=0;
    for(let element of typeof collection==="object"?Object.values(collection):collection){
        length++;
    }
    return length;
}

function myFirst(collection,elementNumber){
    let x=0;
    typeof elementNumber==='undefined'?x=1:x=elementNumber;
    let newArray= typeof collection==="object"?[...Object.values(collection).slice(0,x)]:[...collection.slice(0,x)]
    return newArray.length===1?newArray[0]:newArray
}

function myLast(collection,elementNumber){
    let x=0;
    typeof elementNumber==='undefined'?x=1:x=elementNumber;
    let newArray= typeof collection==="object"?[...Object.values(collection).slice(Object.values(collection).length-x,Object.values(collection).length)]:[...collection.slice(x,collection.length)]
    return newArray.length===1?newArray[0]:newArray
}

function myKeys(collection){ // error trying another approach? why ??  enumerable properties what is it ? should read about it in future
    // const newArray=[];
    // for(let element of collection){
    //     Number.isInteger(element)?newArray.push(element):"";
        
    // }
    return Object.keys(collection)
}

function myValues(collection){ 
    
    return Object.values(collection)
}
