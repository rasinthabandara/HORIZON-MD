const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HORIZON-MD~6o5AgLxD#rdfFZbmKf0FZFsLVCAOkT4cfTm4ElV7SRePmWlvYe28",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY HORIZON-MD 🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "HORIZON-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "HORIZON-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94783390181",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "TECH SHAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴩᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ-ʜᴏʀɪᴢᴏɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/jm9h5j.jpg",
// add img for alive msg
ALIVE_MSG: process.env.ALIVE_MSG || "🌟 *Welcome to Horizon MD!* 🌟\nWe’re excited to have you here! 😊 Whether you’re seeking assistance, looking for information, or just need a quick chat, Horizon MD is always ready to help. 🚀\n\nAt Horizon MD, we believe in providing a personalized experience, so feel free to ask about anything! From answering your questions to providing tailored solutions, our goal is to make your experience seamless and efficient. 💬\n\nWe understand that your time is valuable, and we’re here to make things easier, faster, and more convenient for you. Whether it’s solving a problem, exploring new opportunities, or simply getting guidance, Horizon MD is here to guide you every step of the way.\n\n💡 *What can you do with Horizon MD?*\n- Get instant responses to your queries\n- Access helpful resources and support\n- Stay updated with the latest news and updates\n- Get personalized solutions designed just for you\n\nOur mission is simple: to make your journey smoother and more enjoyable. With Horizon MD, you have a reliable assistant at your fingertips 24/7. 🌍\n\nSo, go ahead and ask away! Don’t hesitate to interact with us—whether it’s for help or just to learn more. We're here to make your life easier and help you reach new horizons! ✨\n\n> © ᴩᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴇᴄʜ-ʜᴏʀɪᴢᴏɴ",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94783390181",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
