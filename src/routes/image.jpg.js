import sharp from 'sharp'

export async function get(req, res, next) {
  res.writeHead(200, {
    'Content-Type': 'image/jpeg',
  })
  res.end(
    await sharp({
      create: {
        width: 300,
        height: 300,
        channels: 3,
        background: { r: 255, g: 0, b: 0 },
      },
    })
      .jpeg()
      .toBuffer()
  )
}
