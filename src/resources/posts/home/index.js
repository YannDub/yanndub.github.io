import markdown from '../'

export default async () => ({
    title: "Yann Dubois, développeur",
    text: await markdown(require("./main.md")),
    coord: {
        title: "Coordonnées",
        text: await markdown(require("./coord.md"))
    }
})