import markdown from '../'

export default async () => ({
    title: "Bienvenue sur mon site !",
    text: await markdown(require("./main.md")),
    coord: {
        title: "Coordonnées",
        text: await markdown(require("./coord.md"))
    }
})