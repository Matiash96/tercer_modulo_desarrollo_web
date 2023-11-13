import {stockReeles} from '../data/stockReeles';

export const pedirReeles = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(stockReeles)
            reject(('Error'))
        }, 500) 
    })
}