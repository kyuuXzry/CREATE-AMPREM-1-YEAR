<div align="center">

<img src="assets/alight-motion.svg" width="120" height="120" alt="Alight Motion"/>

# CREATE AMPREM

**Plugin WhatsApp Bot untuk magic link Alight Motion Premium**

Kirim dan verifikasi magic link lewat DapjiSync API. Berbasis Baileys.

<br/>

<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR/stargazers"><img src="https://img.shields.io/github/stars/kyuuXzry/CREATE-AMPREM-1-YEAR?style=flat-square&logo=github&color=10B981&labelColor=0A0A0A" alt="Stars"/></a>
<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR/network/members"><img src="https://img.shields.io/github/forks/kyuuXzry/CREATE-AMPREM-1-YEAR?style=flat-square&logo=github&color=059669&labelColor=0A0A0A" alt="Forks"/></a>
<img src="https://img.shields.io/badge/Node.js-v18+-0A0A0A?style=flat-square&logo=nodedotjs&logoColor=34D399" alt="Node.js"/>
<a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-WhatsApp-0A0A0A?style=flat-square&logo=whatsapp&logoColor=34D399" alt="Baileys"/></a>
<img src="https://img.shields.io/badge/Akses-Owner%20%26%20Premium-10B981?style=flat-square&labelColor=0A0A0A" alt="Akses"/>

</div>

<br/>

## Fitur

<table width="100%">
<tr>
<td width="33%" valign="top" align="center">
<img src="https://api.iconify.design/lucide:mail.svg?color=%2310B981" width="28"/><br/>
<b>Kirim Magic Link</b><br/>
<sub>Langsung ke email tujuan</sub>
</td>
<td width="33%" valign="top" align="center">
<img src="https://api.iconify.design/lucide:badge-check.svg?color=%2310B981" width="28"/><br/>
<b>Verifikasi Otomatis</b><br/>
<sub>Link diambil dari response API</sub>
</td>
<td width="33%" valign="top" align="center">
<img src="https://api.iconify.design/lucide:zap.svg?color=%2310B981" width="28"/><br/>
<b>Satu Command</b><br/>
<sub>Send + verify lewat <code>full</code></sub>
</td>
</tr>
<tr>
<td width="33%" valign="top" align="center">
<img src="https://api.iconify.design/lucide:link.svg?color=%2310B981" width="28"/><br/>
<b>Custom Link</b><br/>
<sub>Mendukung link dari inbox</sub>
</td>
<td width="33%" valign="top" align="center">
<img src="https://api.iconify.design/lucide:circle-x.svg?color=%2310B981" width="28"/><br/>
<b>Cancel Session</b><br/>
<sub>Batalkan kapan saja</sub>
</td>
<td width="33%" valign="top" align="center">
<img src="https://api.iconify.design/lucide:key-round.svg?color=%2310B981" width="28"/><br/>
<b>Local ID & Token</b><br/>
<sub>Tampil setelah verifikasi</sub>
</td>
</tr>
</table>

## Cara Pasang

**1. Install dependency**

```bash
npm install axios
```

**2. Salin plugin**

Taruh file `amprem.js` di folder `plugins/` bot kamu.

```text
plugins/
└── amprem.js
```

**3. Restart bot**

```bash
node index.js
```

Plugin ini standalone, jadi tidak mengganggu file utama bot.

## Cara Pakai

| Command | Fungsi |
| :-- | :-- |
| `.amprem send <email>` | Kirim magic link ke email |
| `.amprem verify <link>` | Verifikasi magic link |
| `.amprem full <email>` | Kirim link, lalu verifikasi otomatis |
| `.amprem cancel` | Batalkan session |

**Contoh: kirim link**

```text
User: .amprem send user@gmail.com
Bot:  Magic link terkirim!

      Gmail  : user@gmail.com
      Status : Link berhasil dikirim
```

**Contoh: send + verify**

```text
User: .amprem full user@gmail.com
Bot:  Verifikasi berhasil!

      Gmail    : user@gmail.com
      Status   : Success
      Local ID : xxxxx
```

## Alur Kerja

```mermaid
sequenceDiagram
    actor U as User
    participant B as Bot (amprem.js)
    participant A as DapjiSync API
    U->>B: .amprem full email@gmail.com
    B->>B: Cek akses Owner / Premium
    B->>A: Kirim magic link
    A-->>B: Response berisi link
    B->>A: Verifikasi link
    A-->>B: Local ID & Token
    B-->>U: Hasil verifikasi
```

## Variabel yang Dibutuhkan

Pastikan bot kamu menyediakan variabel berikut ke plugin.

| Variabel | Deskripsi |
| :-- | :-- |
| `conn` | Instance WhatsApp (`makeWASocket`) |
| `m` | Message object |
| `text` | Isi pesan setelah command |
| `prefix` | Prefix bot (biasanya `.`) |
| `command` | Command yang diketik |
| `Reply` | Fungsi reply pesan |
| `isCreator` | Cek user owner |
| `isPremium` | Cek user premium |

> [!NOTE]
> Kalau nama instance di bot kamu berbeda, ganti `conn` dengan nama instance bot kamu.

## Troubleshooting

<details>
<summary><b>Link tidak muncul di response</b></summary>
<br/>
Cek inbox atau spam email, salin link verifikasi secara manual, lalu jalankan <code>.amprem verify &lt;link&gt;</code>.
</details>

<details>
<summary><b>Gagal verifikasi: link expired</b></summary>
<br/>
Jalankan <code>.amprem cancel</code>, lalu ulangi <code>.amprem send &lt;email&gt;</code>.
</details>

<details>
<summary><b>Session hilang setelah restart</b></summary>
<br/>
Session disimpan di <code>global.ampremSession</code>, jadi hilang saat bot restart. Gunakan <code>.amprem full</code> supaya tidak bergantung pada session.
</details>

<details>
<summary><b>Error Cannot find module 'axios'</b></summary>
<br/>

```bash
npm install axios
```

</details>

<details>
<summary><b>Perintah tidak merespons</b></summary>
<br/>
Pastikan pengirim adalah Owner atau Premium, dan nama variabel di bot kamu sudah sesuai dengan tabel di atas.
</details>

## Struktur

```text
CREATE-AMPREM-1-YEAR
├── assets
│   └── alight-motion.svg
├── plugins
│   └── amprem.js
├── LICENSE
└── README.md
```

## Credit

<div align="center">

**Author** · KyuuAI

<a href="https://wa.me/628567126744"><img src="https://img.shields.io/badge/WhatsApp-Hubungi-0A0A0A?style=flat-square&logo=whatsapp&logoColor=34D399" alt="WhatsApp"/></a>
<a href="https://instagram.com/Rissxzry_"><img src="https://img.shields.io/badge/Instagram-Follow-0A0A0A?style=flat-square&logo=instagram&logoColor=34D399" alt="Instagram"/></a>
<a href="https://github.com/kyuuXzry"><img src="https://img.shields.io/badge/GitHub-kyuuXzry-0A0A0A?style=flat-square&logo=github&logoColor=34D399" alt="GitHub"/></a>

**API Provider** · DapjiSync

<a href="https://am.dapjisync.my.id"><img src="https://img.shields.io/badge/Website-am.dapjisync.my.id-0A0A0A?style=flat-square&logo=googlechrome&logoColor=34D399" alt="DapjiSync"/></a>

<br/>

<sub>MIT License © 2026 KyuuAI · teks lengkap di <a href="LICENSE"><code>LICENSE</code></a></sub>

</div>
