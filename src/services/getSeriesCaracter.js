import { MD5 } from '../md5'

let public_key = '6909b931c65ee752f37ecb80328c67c9',
    private_key = 'c724e19847a76c88fc7ade84eeca33bf2c7c0cfa'
const ts = Date.now()
let hash = MD5(ts + private_key + public_key)
let apikey = '6909b931c65ee752f37ecb80328c67c9'
let methodRequiere = {
    method: 'GET',
}

export const getSeriesCaracter = (id) => {
    return new Promise((resolve) => {

        fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/series?ts=${ts}&apikey=${apikey}&hash=${hash}`, methodRequiere)
            .then(async (resApiMarvel) => {
                const responseMarvel = await resApiMarvel.json()

                resolve(responseMarvel.data);

            })
            .catch((error) => {
                console.log(error)
                return false;

            });

    })

}
