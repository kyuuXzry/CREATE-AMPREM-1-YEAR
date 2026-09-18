/*
 * © KyuuAI
 * WhatsApp : 628567126744
 * Instagram : Rissxzry_
 * Jangan hapus credit, hargai creator
 *
 * Install:
 * npm install axios
 * Kemudian restart bot.
 */

const axios = require('axios');

const API_BASE = 'https://am.dapjisync.my.id';
const API_KEY = 'FREE';
const TIMEOUT = 20000;

const api = axios.create({
    baseURL: API_BASE,
    timeout: TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY,
        'Accept': '*/*',
        'Origin': API_BASE,
        'Referer': `${API_BASE}/`,
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Mobile Safari/537.36'
    }
});

const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

function extractLink(data) {
    if (!data) return null;
    if (typeof data === 'string') {
        const m = data.match(/https?:\/\/[^\s"'<>]+/);
        return m ? m[0] : null;
    }
    return (
        data.link ||
        data.magicLink ||
        data.magic_link ||
        data.url ||
        data.verifyLink ||
        data.data?.link ||
        data.data?.url ||
        data.data?.magicLink ||
        null
    );
}

async function sendMagicLink(gmail) {
    const res = await api.post('/api/send', { gmail });
    const data = res.data || {};
    const link = extractLink(data);
    const msg = data.message || data.status || (typeof data === 'string' ? data : 'Link berhasil dikirim');
    return { data, link, msg };
}

async function verifyLink(gmail, link) {
    const res = await api.post('/api/verif', { gmail, link });
    return res.data || {};
}

module.exports = async (m, alipdev) => {
    const { conn, Reply, text, command, prefix, isCreator, isPremium } = alipdev;

    if (command !== 'amprem') return;

    if (!isCreator && !isPremium) return Reply('Fitur ini hanya untuk Owner & User Premium.');

    const sender = m.sender;
    if (!global.ampremSession) global.ampremSession = {};

    const args = text.trim().split(/\s+/);
    const action = args[0]?.toLowerCase();

    if (!action) {
        return Reply(
            `AMPREM - DapjiSync\n\n` +
            `Format:\n` +
            `${prefix}amprem send <email>\n` +
            `${prefix}amprem verify <link>\n` +
            `${prefix}amprem full <email>\n` +
            `${prefix}amprem cancel\n\n` +
            `Contoh:\n` +
            `${prefix}amprem send email@gmail.com`
        );
    }

    if (action === 'cancel') {
        delete global.ampremSession[sender];
        return Reply('Session dibatalkan.');
    }

    if (action === 'send') {
        const email = args[1];
        if (!email) return Reply(`Format: ${prefix}amprem send <email>`);
        if (!isValidEmail(email)) return Reply('Email tidak valid.');

        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        await Reply('Mengirim magic link ke ' + email + '...');

        try {
            const { link, msg } = await sendMagicLink(email);

            global.ampremSession[sender] = {
                email,
                link,
                timestamp: Date.now()
            };

            await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

            let reply = `Magic link terkirim!\n\n`;
            reply += `Gmail  : ${email}\n`;
            reply += `Status : ${msg}\n`;

            if (link) {
                reply += `\nMagic Link:\n${link}\n`;
                reply += `\nAuto-verifikasi? Ketik:\n${prefix}amprem verify ${link}`;
            } else {
                reply += `\nCek inbox/spam email, copy link verifikasi, lalu ketik:\n${prefix}amprem verify <link>`;
            }

            Reply(reply);

        } catch (e) {
            await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
            const errMsg = e.response?.data?.message || e.response?.data || e.message;
            Reply(`Gagal kirim link: ${errMsg}`);
        }
        return;
    }

    if (action === 'verify') {
        const link = args.slice(1).join(' ').trim();
        if (!link) return Reply(`Format: ${prefix}amprem verify <link>`);

        const session = global.ampremSession[sender];
        const email = session?.email;

        if (!email) return Reply(`Belum ada session. Mulai dengan:\n${prefix}amprem send <email>`);

        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        await Reply('Memverifikasi link...');

        try {
            const data = await verifyLink(email, link);

            delete global.ampremSession[sender];

            await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

            let reply = `Verifikasi berhasil!\n\n`;
            reply += `Gmail    : ${email}\n`;
            reply += `Status   : ${data.message || data.status || 'Success'}\n`;
            reply += `Local ID : ${data.user?.localId || data.localId || data.id || '-'}\n`;
            if (data.token || data.idToken) {
                reply += `Token    : ${data.token || data.idToken}\n`;
            }

            Reply(reply);

        } catch (e) {
            await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
            const errMsg = e.response?.data?.message || e.response?.data || e.message;
            Reply(`Gagal verifikasi: ${errMsg}`);
        }
        return;
    }

    if (action === 'full') {
        const email = args[1];
        if (!email) return Reply(`Format: ${prefix}amprem full <email>`);
        if (!isValidEmail(email)) return Reply('Email tidak valid.');

        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        await Reply('Mengirim magic link ke ' + email + '...');

        try {
            const { link, msg } = await sendMagicLink(email);

            if (!link) {
                global.ampremSession[sender] = {
                    email,
                    link: null,
                    timestamp: Date.now()
                };
                await conn.sendMessage(m.chat, { react: { text: "⚠️", key: m.key } });
                return Reply(
                    `Link tidak ada di response.\n\n` +
                    `Cek inbox/spam: ${email}\n\n` +
                    `Copy link verifikasi, lalu ketik:\n${prefix}amprem verify <link>`
                );
            }

            await Reply(`Link didapat, auto-verifikasi...`);

            const data = await verifyLink(email, link);

            delete global.ampremSession[sender];
            await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

            let reply = `Verifikasi berhasil!\n\n`;
            reply += `Gmail    : ${email}\n`;
            reply += `Status   : ${data.message || data.status || 'Success'}\n`;
            reply += `Local ID : ${data.user?.localId || data.localId || data.id || '-'}\n`;
            if (data.token || data.idToken) {
                reply += `Token    : ${data.token || data.idToken}\n`;
            }

            Reply(reply);

        } catch (e) {
            await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
            const errMsg = e.response?.data?.message || e.response?.data || e.message;
            Reply(`Gagal: ${errMsg}`);
        }
        return;
    }

    return Reply(
        `Aksi tidak dikenal: ${action}\n\n` +
        `Format:\n` +
        `${prefix}amprem send <email>\n` +
        `${prefix}amprem verify <link>\n` +
        `${prefix}amprem full <email>\n` +
        `${prefix}amprem cancel`
    );
};

module.exports.command = ['amprem'];
module.exports.tags = ['tools'];
module.exports.help = [
    'amprem send <email> - Kirim magic link',
    'amprem verify <link> - Verifikasi link',
    'amprem full <email> - Send + auto-verify',
    'amprem cancel - Batalkan session'
];