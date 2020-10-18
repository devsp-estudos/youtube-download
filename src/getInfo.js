const fs = require("fs")
const ytdl = require("ytdl-core")


async function getInfo(url, finish) {

    const id = url.replace('https://www.youtube.com/watch?v=', '')

    const info = await ytdl.getInfo(id)
    // info.videoDetails.lengthSeconds

    const title = info.videoDetails.title
    const thumbnail = info.videoDetails.thumbnail.thumbnails[3].url

    const obj = { id, title, thumbnail, url }
    finish(obj)

    return obj
}

module.exports = getInfo
