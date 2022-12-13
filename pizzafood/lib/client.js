import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "yscasyb6",
    dataset: "production",
    apiVersion: "2022-12-16",
    useCdn: true,
    token: "skq47gG32K26wB6SCKCJXKMaCTJz7c8i0H6kUi692NeOSRWKfGKjODeOMQSY1Bph0JOJsERsECqGoTSuSIv5mgnS4MMEfECHDwwjOpNLy8kGuVpPknpXuSO0aWdX0JTHqYUgm4cxT3FRD44ZEh5tlZdYJyoPGG0bAuiPASDmoZliqycZSmMm"
})

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)