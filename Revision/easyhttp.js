//This is the library


class EasyHTTP
{
    //make http get request
    // async get(url)
    // {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await response.json();
    //     return data;
    // }

    //make an http post request
    
    // async post(url,data)
    // {
        
    //         const response = await fetch(url,{
    //             method:'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         });
    //         const resdata = await response.json();
    //         return resdata;
            
    // }

    //put or update request

    // async put(url,data)
    // {
        
    //         const response = await fetch(url,{
    //             method:'PUT',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })

    //         const resdata = await response.json();
    //         return resdata;
            

    // }

    //delete request

    async delete(url)
    {
        
            const response = await fetch(url,{
                method:'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })

            const resdata = await response.json();
            return resdata;
            
    }
}