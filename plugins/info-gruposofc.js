let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*π·πΎπ»π° ππππ°ππΈπΎ ππ», ππ΄ πΈπ½ππΈππΎ π° ππ½πΈπππ΄ π° π»πΎπ πΆπππΏπΎπ πΎπ΅πΈπ²πΈπ°π»π΄π π³π΄ π»π° π²πΎπΌππ½πΈπ³π°π³ :D*

*β€ πΆπππππ πππππππππ πππ π±ππ:*
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
`.trim(), wm, media, [['π πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π» π', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
