let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 👋🏻, 𝚃𝙴 𝙸𝙽𝚅𝙸𝚃𝙾 𝙰 𝚄𝙽𝙸𝚁𝚃𝙴 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴 𝙻𝙰 𝙲𝙾𝙼𝚄𝙽𝙸𝙳𝙰𝙳 :D*

*➤ 𝙶𝚛𝚞𝚙𝚘𝚜 𝚘𝚏𝚒𝚌𝚒𝚊𝚕𝚎𝚜 𝚍𝚎𝚕 𝙱𝚘𝚝:*
*1.-* https://chat.whatsapp.com/JlomZPEgo3bLmjGUYPyJ

*2.-* https://chat.whatsapp.com/DbXBmsydWBE1ZNEoY0Rs

*3.-* https://chat.whatsapp.com/BW0P22xx7GBTH5IM51F

*4.-* https://chat.whatsapp.com/CjexkGV37JGuSdDVAHC

*5.-* https://chat.whatsapp.com/H7NUXdrGFg20e3bqglb

*6.-* https://chat.whatsapp.com/GvrLSUSVuT917CKfdxDa

*7.-* https://chat.whatsapp.com/EpzuymK6l08k6J2Dwx7F

*8.-* https://chat.whatsapp.com/IW12dLVyGHreGpX7rQIw

*9.-* https://chat.whatsapp.com/Ef89aIuLe3Fa2YmKwp7

*10.-* https://chat.whatsapp.com/C2WY1hiijCI3QUZLM9
`.trim(), wm, media, [['💟 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 💟', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
