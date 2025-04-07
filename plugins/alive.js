const config = require('../config');
const { cmd, commands } = require('../command');
 // Import ButtonsMessage

cmd(
    {
        pattern: "alive",
        react: "🌐",
        desc: "Check bot online or no.",
        category: "main",
        filename: __filename
    },
    async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
        try {
            const buttons = [
                { buttonId: 'menu', buttonText: { displayText: 'මෙනුව' }, type: 1 }, // Button to menu.js (assuming 'menu' is the command in menu.js)
                { buttonId: 'ping', buttonText: { displayText: 'පිං' }, type: 1 },   // Button to ping.js (assuming 'ping' is the command in ping.js)
            ];

            const buttonMessage = {
                image: { url: config.ALIVE_IMG },
                caption: config.ALIVE_MSG,
                buttons: buttons,
                footer: 'තෝරා ගැනීමට බොත්තමක් ක්ලික් කරන්න' // Optional footer
            };

            return await conn.sendMessage(from, buttonMessage, { quoted: mek });
        } catch (e) {
            console.log(e);
            reply(`${e}`);
        }
    }
);
