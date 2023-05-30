/* eslint-disable no-unused-vars*/

import { MD5 } from "../md5"

let public_key = '7f08732f9ef1a97b664c4e0e7e75e778'
let private_key = '37c38cbfc0c84fc803ac6a81df80ac06df660ff6'
let public_key2 = '6909b931c65ee752f37ecb80328c67c9'
let private_key2 = 'c724e19847a76c88fc7ade84eeca33bf2c7c0cfa'
const ts = Date.now()
let hash = MD5(ts + private_key + public_key)
let hash2 = MD5(ts + private_key2 + public_key2)
let apikey = '7f08732f9ef1a97b664c4e0e7e75e778'
let apiKey2 = '6909b931c65ee752f37ecb80328c67c9'
let methodRequiere = {
    method: 'GET',
}
const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey2}&hash=${hash2}`

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
