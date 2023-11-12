import {stockCanias} from '../data/stockCanias';

export const pedirCanias = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(stockCanias)
            reject(('Error'))
        }, 500) //1 segundo es == 1000 milésimas
    })
}