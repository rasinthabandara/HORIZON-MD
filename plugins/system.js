const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "🖥️",
    alias: ["uptime" ,"runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `╭━━〔 *HORIZON-MD UPTIME LIST* 〕
┃✦╭──────────────
┃✦│ *Owner ➠* *TECH SHAN*
┃✦│ *Uptime ➠*  ${runtime(process.uptime())}
┃✦│ *Hostname ➠* ${os.hostname()}
┃✦│ *Ram usage ➠* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷✪`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:`${status}`,

contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363401051383340@newsletter',
          newsletterName: '𝚃𝙴𝙲𝙷-𝙷𝙾𝚁𝙸𝚉𝙾𝙽',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
    
    await conn.sendMessage(from, {
            audio: { url: '' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

}catch(e){
console.log(e)
reply(`${e}`)
}
})
