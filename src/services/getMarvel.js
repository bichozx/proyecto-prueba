import { MD5 } from "../md5"

let public_key = '7f08732f9ef1a97b664c4e0e7e75e778',
    private_key = '37c38cbfc0c84fc803ac6a81df80ac06df660ff6'
const ts = Date.now()
let hash = MD5(ts + private_key + public_key)
let apikey = '7f08732f9ef1a97b664c4e0e7e75e778'
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
