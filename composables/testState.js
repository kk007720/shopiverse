export const useCounter = () =>{
    return useState('counter', ()=>{
        return Math.round(Math.random() * 1000);
    })
}