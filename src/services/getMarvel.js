import { MD5 } from "../md5"

let public_key = '6909b931c65ee752f37ecb80328c67c9',
    private_key = 'c724e19847a76c88fc7ade84eeca33bf2c7c0cfa'
const ts = Date.now()
let hash = MD5(ts + private_key + public_key)
let apikey = '6909b931c65ee752f37ecb80328c67c9'
let methodRequiere = {
    method: 'GET',
}
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`

const marvelApi = () =>
    fetch(url, methodRequiere)
        .then(async (resApiMarvel) => {
            const responseMarvel = await resApiMarvel.json()
            return responseMarvel;
        })
        .catch((error) => {
            console.log(error)
            return false;
        });


export default marvelApi
