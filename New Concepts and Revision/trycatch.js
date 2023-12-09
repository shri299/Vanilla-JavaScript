// try{
//     console.log(x);
// } catch(err){
//     console.log(err);
// }

// function double(num){
//     if(isNaN(num)){
//         throw new Error("not a number")
//     }
//     return num*2;
// }

// try{
//     console.log(double("str"));;
// }catch(err){
//     console.log(err);
// }


const getData = async ()=>{
    try {
        const resObj = await fetch('https://jsonplaceholder.typicode.com/uses');
        if(!resObj.ok){
            throw new Error("request failed");
        }
        else{
            const data = await resObj.json();
            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
}

getData();



const getPost = async ()=>{
    const resObj = await fetch('https://jsonplaceholder.typicode.com/uses');
        if(!resObj.ok){
            throw new Error("request failed");
        }
        else{
            const data = await resObj.json();
            console.log(data);
        }
}

getPost().catch((err)=>{
    console.log(err);
});