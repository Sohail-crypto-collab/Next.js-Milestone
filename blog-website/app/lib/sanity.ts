import {createClient} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


 const Client = createClient({
    apiVersion: '2025-01-03',
    dataset: 'production',
    projectId: 'w9nl323b',
    useCdn: false,
    token:'skNNlLEQptzXKvpGvBVGt1XR8Ek6jQRIBZs2rO7qrJ1fMfOl28AFpXLcZsY1kF3UjKtOQW8xmbnNXODHoMpOplojrOGRfiOQ9uC36gQgDnLvVBN3by6xyub5Jizj2iVT0nxDWwlDzqExVtsXhTHk37KpHCAq4gO4ZwWriFr0A2v8yvTNk3Sp',
})

export { Client };

const builder = imageUrlBuilder(Client) 

 function urlFor(source: string) {
    return builder.image(source)

}

export { urlFor };