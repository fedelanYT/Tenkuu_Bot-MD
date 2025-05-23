const arabPrefixes = ['+212', '+213', '+216', '+218', '+20', '+970', '+963', '+966', '+967', '+968', '+971', '+972', '+973', '+974', '+975', '+976', '+977']; 

const handler = async (m, { conn, isOwner }) => {
    const sender = m.sender;

    if (isOwner) return;

    if (arabPrefixes.some(prefix => sender.startsWith(prefix))) {
        if (!m.isGroup) {
            await conn.updateBlockStatus(sender, 'block').catch(() => {});
        }
        return true; 
    }
};

handler.before = async (m, { conn, isOwner }) => {
    await handler(m, { conn, isOwner });
    return false; 
};

export default handler;
