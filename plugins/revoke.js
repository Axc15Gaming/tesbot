let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  //m.reply('Link Group Berhasil Direset!\n\nLink Baru:\nhttps://chat.whatsapp.com/' + res.code)
m.reply('Link Group Berhasil Direset!')
}
handler.help = ['revoke']
handler.tags = ['group']
handler.tags = ['admin']
handler.command = /^re(voke|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler