const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');

// song download
cmd({ 
    pattern: "song2", 
    alias: ["yta", "play"], 
    react: "🎶", 
    desc: "Download YouTube song", 
    category: "main", 
    use: '.song < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/song?query=${ytsUrl}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.downloadUrl) {
            return reply("Failed to fetch the audio. Please try again later.");
        }
        
        let ytmsg = `*〘〘 𝐀𝐔𝐃𝐈𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 〙〙*

*◈=========================◈*
*╭┈──────────────────┈⊷*
*┃* 🎶 *Title:* *${yts.title}*
*┃* 
*┃* ⏳ *Duration:* *${yts.timestamp}*
*┃* 
*┃* 👀 *Views:* *${yts.views}*
*┃* 
*┃* 👤 *Author:* *${yts.author.name}*
*┃* 
*┃* 🔗 *Link:* *${yts.url}*
*╰────────────────────┈⊷*

*⦁⦂⦁━┉━┉━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁*

*🔢 Reply below number*

*╭┈─────────────────┈⊷*
*┃1 │❯❯◦ AUDIO DOWNLOAD* 🎶
*┃2 │❯❯◦ VOICE DOWNLOAD* 🎤
*┃3 │❯❯◦ DOCUMENT DOWNLOAD* 📁
*╰───────────────────┈⊷*

*Github Repo:* *https://github.com/deviltech567/DEVIL-TECH-MD*

*㊛ Ꮲᴏꪝᴇʀᴅ Вʏ Ꭰᴇᴠɪʟ Ꭲᴇᴄʜ Ꮇᴅ*`;
        
        let contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363395467876104@newsletter',
                newsletterName: '𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇 𝐌𝐃',
                serverMessageId: 143
            }
        };
        
        // Send the thumbnail and capture the sent message
        let sentMsg = await conn.sendMessage(from, { image: { url: yts.thumbnail }, caption: ytmsg, contextInfo }, { quoted: mek });
        const messageID = sentMsg.key.id;

        // React to the thumbnail message
        await conn.sendMessage(from, { react: { text: '🎶', key: sentMsg.key } });

        // Event listener to capture reply
        conn.ev.on('messages.upsert', async (messageUpdate) => {
            const mekInfo = messageUpdate?.messages[0];
            if (!mekInfo?.message) return;

            const messageType = mekInfo?.message?.conversation || mekInfo?.message?.extendedTextMessage?.text;
            const isReplyToSentMsg = mekInfo?.message?.extendedTextMessage?.contextInfo?.stanzaId === messageID;

            if (isReplyToSentMsg) {
                let userReply = messageType.trim();
                let msg;

                if (userReply === "1") {
                    msg = await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg", contextInfo }, { quoted: mek });
                } else if (userReply === "2") {
                    msg = await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg", ptt: true, contextInfo }, { quoted: mek });
                } else if (userReply === "3") {
                    msg = await conn.sendMessage(from, { document: { url: data.result.downloadUrl }, mimetype: "audio/mpeg", fileName: `${yts.title}.mp3`, contextInfo }, { quoted: mek });
                } else {
                    return await reply("❌ Invalid choice! Reply with 1, 2, or 3.");
                }

                await conn.sendMessage(from, {
                    image: { url: yts.thumbnail },
                    caption: `Here's your song, *${yts.title}* 🎶 Enjoy!\n\n> ${yts.title}`
                }, { quoted: mek });

                await conn.sendMessage(from, { text: '✅ Media Upload Successfull ✅', edit: msg.key });
            }
        });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});  
