import Commerce from '@chec/commerce.js'

let commerce = null 

const getCommerce = () => {
  if(commerce) {
    return commerce
  }
  else {
    // const publicKey = commercePublicKey || process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY
    const publicKey = process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY

    const devEnviornment = process.env.NODE_ENV == "development"

    if(devEnviornment && !publicKey ) {
        throw Error('Commercew Public key not available')
        console.log('key not available');
    }
    commerce = new Commerce(publicKey, devEnviornment)
    return commerce
  }
}

export default getCommerce