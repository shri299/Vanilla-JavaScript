const socials = ['twitter','facebook','instagram'];

console.log(socials.__proto__);

socials.forEach((social,index,arr)=>{
    console.log(social);
    console.log(index);
    console.log(arr);
})


const num = [1,2,3,4,5,6,7];

const res = num.filter((n)=>{
    return n>3;
})

const resmap = num.map((n)=>{
    return n*2;
})

console.log(res);

console.log(resmap);
