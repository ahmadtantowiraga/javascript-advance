/**
 * 
 * @param {string} pesanan 
 * @param {(error, output)=> void} callback 
 * @returns {void}
 */
function pesanMinuman(pesanan, callback){
    console.log(`Menunggu pesanan, ${pesanan} sedang di proses`);
    setTimeout(()=>{
        if (pesanan === 'teh'){
            callback(`Pesanan ${pesanan} tidak ada`, null);
        } else{
            console.log(`Pesanan ${pesanan} sudah dicatat`)
            setTimeout(()=>{
                console.log('Pesanan sampai')
                callback(null, `Kopi ${pesanan}`)
             }, 5000);
        }

    }, 2000);

}

/**
 * 
 * @param {string} error 
 * @param {string} output 
 * @returns {void}
 */
// function sruputKopi(error, output){
//     if (error){
//         console.log(`Kecewa ${error}`);
//     }else{
//         console.log(`Terima Kasih.. Sruput ${output}, ahhhh enak`);
//     }
// }
// pesanMinuman('Americano', sruputKopi);

//callback hell
let minuman=['Americano', 'Latte', 'Es Cendol'];

pesanMinuman(minuman[0], (error, output)=>{
    if (error){
        console.log(`Kecewa ${error}`);
    }else{
        console.log(`Terima Kasih.. Sruput ${output}, ahhhh enak`);
        pesanMinuman(minuman[1], (error, output)=>{
            if (error){
                console.log(`Kecewa ${error}`);
            }else{
                console.log(`Terima Kasih.. Sruput ${output}, ahhhh enak`);
                pesanMinuman(minuman[2], (error, output)=>{
                    if (error){
                        console.log(`Kecewa ${error}`);
                    }else{
                        console.log(`Terima Kasih.. Sruput ${output}, ahhhh enak`);  
                    }
                })
            }
        })
    }
})