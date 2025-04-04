const { cmd } = require("../command");
const yts = require("yt-search");
const axios = require("axios");

cmd({
  pattern: "video",
  alias: ["video"],
  react: '🎵',
  desc: "Download video from YouTube",
  category: "media",
  use: ".video <video name>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    if (!args.length) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("Please provide a video name. Example: .video2 siththaravi");
    }

    // Add processing react
    await conn.sendMessage(from, { react: { text: '⏳', key: mek.key } });

    // Search for the video on YouTube
    const query = args.join(" ");
    const searchResults = await yts(query);
    if (!searchResults.videos.length) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("❌ No results found.");
    }

    const videoUrl = searchResults.videos[0].url;

    // Fetch video download link using the new API
    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${videoUrl}`;
    const response = await axios.get(apiUrl);

    if (!response.data.status || !response.data.result.url) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("❌ Failed to fetch the video.");
    }

    const videoUrlDownload = response.data.result.url;

    // Send the video as a file
    await conn.sendMessage(from, {
      video: { url: videoUrlDownload },
      mimetype: 'video/mp4',
      caption: response.data.result.title,
      ptt: false
    });

    // Add success react
    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

  } catch (error) {
    console.error("Error:", error);

    // Add failure react
    await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });

    // Send error logs to WhatsApp
    const errorMessage = `
*❌ Video2 Command Error Logs*

*Error Message:* ${error.message}
*Stack Trace:* ${error.stack || "Not available"}
*Timestamp:* ${new Date().toISOString()}
`;

    await conn.sendMessage(from, { text: errorMessage }, { quoted: mek });
  }
});

cmd({
  pattern: "video2",
  alias: ["video2"],
  react: '🎵',
  desc: "Download video from YouTube",
  category: "media",
  use: ".video2 <video name>",
  filename: __filename
}, async (conn, mek, msg, { from, args, reply }) => {
  try {
    if (!args.length) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("Please provide a video name. Example: .video2 siththaravi");
    }

    // Add processing react
    await conn.sendMessage(from, { react: { text: '⏳', key: mek.key } });

    // Search for the video on YouTube
    const query = args.join(" ");
    const searchResults = await yts(query);
    if (!searchResults.videos.length) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("❌ No results found.");
    }

    const videoUrl = searchResults.videos[0].url;

    // Fetch video download link using the new API
    const apiUrl = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${videoUrl}`;
    const response = await axios.get(apiUrl);

    if (!response.data.status || !response.data.result.url) {
      await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
      return reply("❌ Failed to fetch the video.");
    }

    const videoUrlDownload = response.data.result.url;

    // Send the video as a file
    await conn.sendMessage(from, {
      video: { url: videoUrlDownload },
      mimetype: 'video/mp4',
      caption: response.data.result.title,
      ptt: false
    });

    // Add success react
    await conn.sendMessage(from, { react: { text: '✅', key: mek.key } });

  } catch (error) {
    console.error("Error:", error);

    // Add failure react
    await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });

    // Send error logs to WhatsApp
    const errorMessage = `
*❌ Video2 Command Error Logs*

*Error Message:* ${error.message}
*Stack Trace:* ${error.stack || "Not available"}
*Timestamp:* ${new Date().toISOString()}
`;

    await conn.sendMessage(from, { text: errorMessage }, { quoted: mek });
  }
});
