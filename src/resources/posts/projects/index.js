import markdown from '../'

export default async () => ({
    projects: [
        {
            title: "Xorn: The Fallen God",
            type: "game",
            img: "https://img.itch.zone/aW1nLzE0NTk2ODYucG5n/original/2jvC%2Bg.png",
            youtube: "12cMKGWWdwI",
            resume: await markdown(require('./xorn/resume.md')),
            text: await markdown(require('./xorn/text.md'))
        },
        {
            title: "Minecraft Hardcore - modding",
            type: "game",
            youtube: "LhwsNXeCMJk",
            resume: await markdown(require('./mho/resume.md')),
            text: await markdown(require('./mho/text.md'))
        },
        {
            title: "Beneath the surface - LDJAM 29",
            type: "game",
            img: "http://ludumdare.com/compo/wp-content/compo2//342546/15933-shot0.png-crop-180-140.jpg",
            resume: await markdown(require('./ldjam29/resume.md')),
            text: await markdown(require('./ldjam29/text.md'))
        }
    ]
})