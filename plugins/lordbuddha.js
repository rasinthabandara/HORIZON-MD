const fetch = require('node-fetch'); 
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const { translate } = require('@vitalets/google-translate-api');
const axios = require('axios')

cmd({
    pattern: "lordbuddha",
    alias: ["lordbuddh"],
    desc: "menu the bot",
    category: "menu",
    react: "🙏",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body,isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `🙏  ⊷┈ *LORD BUDDHA* ┈⊷  🙏

 *The Life and Teachings of Lord Buddha*
 
Lord Buddha, born as Siddhartha Gautama in 563 BCE in Lumbini (modern-day Nepal), was one of the most influential spiritual leaders in history. His teachings gave rise to Buddhism, a philosophy and religion that continues to inspire millions worldwide. The life and legacy of Lord Buddha exemplify compassion, wisdom, and the pursuit of enlightenment.

*• Early Life and the Search for Truth*

Siddhartha was born into royalty as the son of King Suddhodana and Queen Maya. According to tradition, astrologers predicted that he would become either a great king or a spiritual teacher. Determined to keep Siddhartha on the path of rulership, his father shielded him from the harsh realities of life, confining him to the luxurious palace grounds.

Despite this, Siddhartha's curiosity led him to venture outside the palace as a young man. During these excursions, he encountered the "Four Sights": an old man, a sick man, a dead body, and a wandering ascetic. These sights deeply disturbed him, awakening a profound realization of the impermanence of life and the suffering inherent in human existence.

At the age of 29, Siddhartha renounced his princely life, leaving behind his family and wealth. He embarked on a spiritual quest to understand the nature of suffering and discover a path to liberation. This journey marked the beginning of his transformation into the Buddha, or "The Enlightened One."

*• The Path to Enlightenment*

Siddhartha spent six years seeking enlightenment through rigorous ascetic practices, including fasting and meditation. However, he soon realized that extreme self-deprivation was not the answer. Rejecting both indulgence and severe austerity, he developed the "Middle Way," a balanced approach to spiritual practice.

One fateful night, Siddhartha sat beneath the Bodhi tree in Bodh Gaya, vowing not to rise until he attained enlightenment. After meditating deeply, he overcame the temptations of Mara, the demon of illusion, and attained Nirvana. He gained profound insights into the Four Noble Truths, which became the foundation of his teachings.

*• The Core Teachings of Buddhism*

1. *The Four Noble Truths:*

   - Life involves suffering (dukkha).
   - Suffering is caused by attachment and desire (tanha).
   - There is an end to suffering.
   - The Eightfold Path leads to the cessation of suffering.

2. *The Eightfold Path:*

   The Eightfold Path serves as a guide to ethical conduct, mental discipline, and wisdom. It includes Right View, Right Intention, Right Speech, Right Action, Right Livelihood, Right Effort, Right Mindfulness, and Right Concentration.

3. *The Law of Karma:*

   Buddha taught that actions have consequences, and individuals are responsible for their own fate. Positive actions lead to positive outcomes, while negative actions lead to suffering.

4. *Impermanence and Non-Self:*

   The Buddha emphasized the impermanent nature of all things and the concept of "Anatta" (non-self), which challenges the notion of a permanent, unchanging identity.

*• The Spread of Buddhism*

After attaining enlightenment, Buddha dedicated the rest of his life to teaching and spreading his insights. He gathered a community of followers, known as the Sangha, and taught people from all walks of life, including kings, merchants, and peasants. His teachings were simple yet profound, emphasizing compassion, mindfulness, and inner peace.

Buddhism began to spread beyond India during Buddha's lifetime and gained further momentum after his death. Emperor Ashoka, a devout Buddhist ruler in the 3rd century BCE, played a significant role in promoting Buddhism by sending missionaries to neighboring regions. Over time, Buddhism flourished across Asia, evolving into various schools and traditions, such as Theravāda, Mahāyāna, and Vajrayāna.

*• Lord Buddha's Legacy*

Lord Buddha's teachings continue to resonate with people of all faiths and backgrounds. His message of non-violence, compassion, and self-awareness remains relevant in today's world. Buddhism's influence can be seen in philosophy, art, literature, and culture, contributing to a richer understanding of human experience.

Buddha's life story serves as an inspiration for those seeking a deeper connection with themselves and the world around them. His journey from a sheltered prince to an enlightened teacher embodies the transformative power of self-reflection and the pursuit of truth.

*• Conclusion*

Lord Buddha's wisdom transcends time and space, offering a path to inner peace and spiritual awakening. His teachings encourage individuals to confront the suffering of existence and embrace the possibility of liberation. As a symbol of hope and enlightenment, Lord Buddha's legacy continues to illuminate the lives of millions worldwide.`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cejqkn.jpg` },
                caption: dec,
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
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, {
            audio: { url: '' },
            mimetype: 'audio/mp4',
            ptt: false
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
