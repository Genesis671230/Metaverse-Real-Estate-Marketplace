import sanityClient from "@sanity/client"
import  imageUrlBuilder  from "@sanity/image-url";


export const client = sanityClient({
  projectId:"8gcedtj0",
  dataset:"production",
  apiVersion:"2022-03-25",
  useCdn:true,
  token:"skx6VyenobYHDOZ51IP3YvhL5jRHtcyWiNuPVYVbczc87NYFdHZf4BAqmowY61G2lobbKdEHMIWAwit2mxDmModTkQF2TnIXGsgzxbvEnJTaqD6LmrsMpWmpMUFZR2JwRGroShPGk34rwHGNWeISOwfkBi8lwdlw1sSICydCV8Guer4VD77C",  
})


const builder = imageUrlBuilder(client);
export const urlFor = (source)=>builder.image(source);