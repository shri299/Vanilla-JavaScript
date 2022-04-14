//This is the library


class EasyHTTP
{
    //make http get request
    get(url)
    {
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then((res)=>{
                return res.json();
            }).then((data)=>{
                resolve(data);
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }

    //make an http post request
    
    // post(url,data)
    // {
    //     return new Promise((resolve,reject)=>{
    //         fetch(url,{
    //             method:'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then((res)=>{
    //             return res.json();
    //         }).then((data)=>{
    //             resolve(data);
    //         })
    //         .catch((err)=>{
    //             reject(err);
    //         })
    //     })
    // }

    //put or update request

    // put(url,data)
    // {
    //     return new Promise((resolve,reject)=>{
    //         fetch(url,{
    //             method:'PUT',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then((res)=>{
    //             return res.json();
    //         }).then((data)=>{
    //             resolve(data);
    //         })
    //         .catch((err)=>{
    //             reject(err);
    //         })
    //     })
    // }

    //delete request

    delete(url)
    {
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((res)=>{
                return res.json();
            }).then(()=>{
                resolve('DELETED SUCCESFULLY');
            })
            .catch((err)=>{
                reject(err);
            })
        })
    }
}