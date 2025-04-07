const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');

// video download
cmd({ 
    pattern: "video2", 
    alias: ["video2"], 
    react: "🎥", 
    desc: "Download YouTube video", 
    category: "main", 
    use: '.video < Yt url or Video Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or song name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }

        let ytmsg = `╭━━〔 *VIDEO DOWNLODER* 〕
┃✦╭──────────────
┃✦│ *Title:* *${yts.title}*
┃✦│ *Duration:* *${yts.timestamp}*
┃✦│ *Views:* *${yts.views}*
┃✦│ *Author:* *${yts.author.name}*
┃✦│ *Link:* *${yts.url}*
┃✦╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
✪⦁⦂⦁━━━━━━━━━━━━━━━━━⦁⦂⦁✪
╭━━〔 *REPLAY BELOW NUMBER* 〕
┃✰╭──────────────
┃✰│ 1┃ VIDEO DOWNLOAD
┃✰│ 2┃ DOCUMENT DOWNLOAD
┃✰╰──────────────
╰━━━━━━━━━━━━━━━┈⊷

> *© ᴩᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ-ʜᴏʀɪᴢᴏɴ*`;
        
        let contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363395467876104@newsletter',
                newsletterName: '𝐃𝐄𝐕𝐈𝐋 𝐓𝐄𝐂𝐇',
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
                    msg = await conn.sendMessage(from, { 
            video: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`,
         }, { quoted: mek });
      } else if (userReply === "2") {
                    msg =  await conn.sendMessage(from, { 
            document: { url: data.result.download_url }, 
            mimetype: "video/mp4", 
            fileName: `${data.result.title}.mp4`, 
            
        }, { quoted: mek });
                } else {
                    return await reply("❌ Invalid choice! Reply with 1 or 2.");
                }

                await conn.sendMessage(from, {
                    image: { url: yts.thumbnail },
                    caption: `Here's your Video, *${yts.title}* 🎶 Enjoy!\n\n> ${yts.title}\n\n> © ᴩᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ-ʜᴏʀɪᴢᴏɴ`
                }, { quoted: mek });

                await conn.sendMessage(from, { text: '✅ Media Upload Successfull ✅', edit: msg.key });
            }
        });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
})