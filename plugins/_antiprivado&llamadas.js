let handler = m => m
handler.before = async function (m, { conn, isOwner, isROwner}) 
if (m.chat.endsWith('broadcast') || m.key.remoteJid.endsWith('broadcast')) return
if (m.fromMe) return
if (m.isGroup) return
if (isOwner, isROwner) return !1 
let user = global.db.data.users[m.sender]
let { banned } = db.data.users[m.chat]
let username = conn.getName(m.sender) 
if (new Date - user.pc < 30000) return
await conn.reply(m.chat, `⚠️ Esta completamente restringido escribir o llamar al bot por privado, por lo cuál tendre que bloquearte. Si es algo importante contacta a mi creador wa.me/5218333659697`, fakemsg)
conn.updateBlockStatus(m.sender, 'block')
user.pc = new Date * 1
}
export default handler

