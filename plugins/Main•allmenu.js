import fetch from 'node-fetch';
let handler = async (m, { conn, participants }) => {
    let username = m.pushName || 'User';
    let txt = `Hola 👋🏻 \`${username}\` *¿Como te encuentras hoy?*

✦ *Nombre: ${global.botname}*
✦ *Versión: ${global.vs}*
✦ *Economía: ${global.currency}*
✦ *Prefix: [.]
  
*\`Info\`*

✦ *perfil*
✦ *menu*

*\`ᴀɪ\`*

✦ *remini*
✦ *hd*
✦ *enhance*
✦ *wallpape <txt>*
✦ *gemini / ia*
✦ *pixai*

 *\`ʙᴜꜱQᴜᴇᴅᴀꜱ\`*

✦ *google <busqueda>*
✦ *tiktoksearch <txt>*
✦ *ytsearch*
✦ *imagen <txt>*
✦ *play* <musica
✦ *ytdlmp4* <nombre>
✦ *ytdlmp3* <nombre>

‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌‍‌‍‌‍‌‍‌‍‌‌‍‍‍‍‌
 *\`ᴊᴜᴇɢᴏꜱ\`*

✦ *abrazar <@tag>*
✦ *acertijo*
✦ *sonrojarse <@tag>*
✦ *consejo*
✦ *enamorada <@tag>*
✦ *meme*
✦ *acariciar <@tag>*
✦ *personalidad*
✦ *piropo*
✦ *pokedex <pokemon*
✦ *pregunta*
✦ *dormir <@tag>*
✦ *triste <@tag>*
✦ *top <txt>*

 *\`ᴊᴀᴅɪ / ʙᴏᴛꜱ\`*

✦ *code* 
✦ *serbot*

 *\`ꜱᴛɪᴄᴋᴇʀꜱ\`*

✦ *qc*
✦ *sticker <img>*
✦ *sticker <url>*
✦ *take <ɴᴏᴍʙʀᴇ/ᴀᴜᴛᴏʀ>*

 *\`ɢʀᴜᴘᴏꜱ\`*

✦ *link*
✦ *grupo open / close*
✦ *delete*
✦ *demote*
✦ *promote*
✦ *encuesta <txt / txt>*
✦ *hidetag*
✦ *infogrupo*
✦ *kick*
✦ *listadv*
✦ *tagall <txt>*
✦ *invocar <txt>*

 *\`ᴏɴ/ᴏꜰꜰ\`*

✦ *enable*
✦ *disable*

 *\`ᴅᴇꜱᴄᴀʀɢᴀꜱ\`*

✦ *facebook - fb*
✦ *instagram - ig*
✦ *tiktok*
✦ *ytmp4*
✦ *ytmp3*

 *\`ʜᴇʀʀᴀᴍɪᴇɴᴛᴀꜱ\`*

✦ *ᴛᴏᴀɴɪᴍᴇ*
✦ *remini*
✦ *hd*
✦ *ssweb*
✦ *ss*
✦ *trad*

 *\`ᴄᴏɴᴠᴇʀᴛɪᴅᴏʀᴇꜱ\`*

✦ *togifaud*
✦ *toimg*
✦ *toaudio*`.trim();

 m.react('✅');
  let perfil = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://qu.ax/QGAVS.jpg');
  
  await conn.sendMini(m.chat, botname, dev, txt, image, image, redeshost);
  };
  
  handler.command = ['main', 'menu', 'menucompleto'];
  
  export default handler;
