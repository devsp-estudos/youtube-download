const fs = require("fs")
const ytdl = require("ytdl-core")


async function getInfo(URL, finish) {

    const info = await ytdl.getInfo(URL.replace('https://www.youtube.com/watch?v=', ''))
    // info.videoDetails.lengthSeconds

    const title = info.videoDetails.title
    const thumbnail = info.videoDetails.thumbnail.thumbnails[3].url

    const obj = { title, thumbnail }
    finish(obj)

    return obj
}

module.exports = getInfo
