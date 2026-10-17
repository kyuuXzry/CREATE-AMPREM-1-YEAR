<div align="center">

<table>
<tr>
<td valign="middle" align="center" width="170">
<img src="assets/alight-motion.svg" width="130" alt="Alight Motion"/>
</td>
<td valign="middle" align="left">

<h1>CREATE AMPREM</h1>

<b>Plugin WhatsApp Bot untuk magic link Alight Motion Premium</b>
<br/>
<sub>Kirim, verifikasi, dan selesai dalam satu command. Berbasis Baileys, via DapjiSync API.</sub>

</td>
</tr>
</table>

<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=17&duration=2800&pause=900&color=22C55E&center=true&vCenter=true&width=640&height=40&lines=.amprem+send+email%40gmail.com;.amprem+verify+%3Clink%3E;.amprem+full+email%40gmail.com;.amprem+cancel" alt="Typing SVG"/>
</a>

<br/>

<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR/stargazers"><img src="https://img.shields.io/github/stars/kyuuXzry/CREATE-AMPREM-1-YEAR?style=flat-square&logo=github&color=10B981&labelColor=0A0A0A" alt="Stars"/></a>
<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR/network/members"><img src="https://img.shields.io/github/forks/kyuuXzry/CREATE-AMPREM-1-YEAR?style=flat-square&logo=github&color=059669&labelColor=0A0A0A" alt="Forks"/></a>
<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR/issues"><img src="https://img.shields.io/github/issues/kyuuXzry/CREATE-AMPREM-1-YEAR?style=flat-square&logo=github&color=047857&labelColor=0A0A0A" alt="Issues"/></a>
<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR/commits"><img src="https://img.shields.io/github/last-commit/kyuuXzry/CREATE-AMPREM-1-YEAR?style=flat-square&logo=git&color=10B981&labelColor=0A0A0A" alt="Last commit"/></a>
<img src="https://img.shields.io/github/repo-size/kyuuXzry/CREATE-AMPREM-1-YEAR?style=flat-square&logo=files&color=059669&labelColor=0A0A0A" alt="Repo size"/>

<br/>

<img src="https://img.shields.io/badge/Node.js-v18+-0A0A0A?style=flat-square&logo=nodedotjs&logoColor=34D399" alt="Node.js"/>
<img src="https://img.shields.io/badge/JavaScript-CommonJS-0A0A0A?style=flat-square&logo=javascript&logoColor=34D399" alt="JavaScript"/>
<a href="https://github.com/WhiskeySockets/Baileys"><img src="https://img.shields.io/badge/Baileys-WhatsApp-0A0A0A?style=flat-square&logo=whatsapp&logoColor=34D399" alt="Baileys"/></a>
<img src="https://img.shields.io/badge/Axios-HTTP-0A0A0A?style=flat-square&logo=axios&logoColor=34D399" alt="Axios"/>
<img src="https://img.shields.io/badge/Plan-1%20Year-10B981?style=flat-square&logo=clockify&logoColor=0A0A0A" alt="1 Year"/>
<img src="https://img.shields.io/badge/Akses-Owner%20%26%20Premium-0A0A0A?style=flat-square&logo=shield&logoColor=34D399" alt="Akses"/>
<img src="https://img.shields.io/badge/License-MIT-0A0A0A?style=flat-square&logo=opensourceinitiative&logoColor=34D399" alt="License"/>

</div>

<br/>

<table align="center" width="100%">
<tr>
<td align="center" width="25%">
<h2>4</h2>
<sub>COMMAND</sub>
</td>
<td align="center" width="25%">
<h2>1</h2>
<sub>FILE PLUGIN</sub>
</td>
<td align="center" width="25%">
<h2>1</h2>
<sub>DEPENDENCY</sub>
</td>
<td align="center" width="25%">
<h2>2</h2>
<sub>ROLE AKSES</sub>
</td>
</tr>
</table>

<br/>

## <img src="https://api.iconify.design/lucide:rocket.svg?color=%2310B981" width="24" align="center"/>&nbsp;01 / Quick Start

Plugin ini standalone. Cukup taruh di folder `plugins/` tanpa mengganggu file utama bot.

```bash
# 1. install dependency
npm install axios

# 2. salin plugin ke folder plugins/ bot kamu
cp amprem.js plugins/amprem.js

# 3. restart bot
node index.js
```

Setelah bot hidup, kirim `.amprem full email@gmail.com` untuk mencoba.

<br/>

## <img src="https://api.iconify.design/lucide:terminal-square.svg?color=%2310B981" width="24" align="center"/>&nbsp;02 / Command

<table width="100%">
<tr>
<td width="50%" valign="top">

**<img src="https://api.iconify.design/lucide:send.svg?color=%2310B981" width="16" align="center"/>&nbsp;send**

Kirim magic link ke email.

```bash
.amprem send email@gmail.com
```

</td>
<td width="50%" valign="top">

**<img src="https://api.iconify.design/lucide:badge-check.svg?color=%2310B981" width="16" align="center"/>&nbsp;verify**

Verifikasi magic link. Mendukung link manual dari inbox.

```bash
.amprem verify <link>
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

**<img src="https://api.iconify.design/lucide:zap.svg?color=%2310B981" width="16" align="center"/>&nbsp;full**

Kirim link lalu verifikasi otomatis. Link diambil langsung dari response API.

```bash
.amprem full email@gmail.com
```

</td>
<td width="50%" valign="top">

**<img src="https://api.iconify.design/lucide:circle-x.svg?color=%2310B981" width="16" align="center"/>&nbsp;cancel**

Batalkan session kapan saja.

```bash
.amprem cancel
```

</td>
</tr>
</table>

<br/>

## <img src="https://api.iconify.design/lucide:git-compare-arrows.svg?color=%2310B981" width="24" align="center"/>&nbsp;03 / Alur Kerja

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

### Contoh hasil di chat

<table width="100%">
<tr>
<td width="50%" valign="top">

**send**

```text
User: .amprem send user@gmail.com
Bot:  Magic link terkirim!

      Gmail  : user@gmail.com
      Status : Link berhasil dikirim
```

</td>
<td width="50%" valign="top">

**full**

```text
User: .amprem full user@gmail.com
Bot:  Verifikasi berhasil!

      Gmail    : user@gmail.com
      Status   : Success
      Local ID : xxxxx
```

</td>
</tr>
</table>

<br/>

## <img src="https://api.iconify.design/lucide:sliders-horizontal.svg?color=%2310B981" width="24" align="center"/>&nbsp;04 / Variabel yang Dibutuhkan

Pastikan struktur bot kamu menyediakan variabel berikut ke plugin.

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

<br/>

## <img src="https://api.iconify.design/lucide:life-buoy.svg?color=%2310B981" width="24" align="center"/>&nbsp;05 / FAQ & Troubleshooting

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
<summary><b>Error <code>Cannot find module 'axios'</code></b></summary>
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

<br/>

## <img src="https://api.iconify.design/lucide:folder-tree.svg?color=%2310B981" width="24" align="center"/>&nbsp;06 / Struktur Repositori

```text
CREATE-AMPREM-1-YEAR
├── assets
│   └── alight-motion.svg
├── plugins
│   └── amprem.js
├── LICENSE
└── README.md
```

<br/>

## <img src="https://api.iconify.design/lucide:users.svg?color=%2310B981" width="24" align="center"/>&nbsp;07 / Credit

<table width="100%">
<tr>
<td width="50%" valign="top" align="center">

<sub><b>AUTHOR</b></sub>

**KyuuAI**

<a href="https://wa.me/628567126744"><img src="https://img.shields.io/badge/WhatsApp-Hubungi-0A0A0A?style=for-the-badge&logo=whatsapp&logoColor=34D399" alt="WhatsApp"/></a>
<a href="https://instagram.com/Rissxzry_"><img src="https://img.shields.io/badge/Instagram-Follow-0A0A0A?style=for-the-badge&logo=instagram&logoColor=34D399" alt="Instagram"/></a>
<a href="https://github.com/kyuuXzry"><img src="https://img.shields.io/badge/GitHub-kyuuXzry-0A0A0A?style=for-the-badge&logo=github&logoColor=34D399" alt="GitHub"/></a>

</td>
<td width="50%" valign="top" align="center">

<sub><b>API PROVIDER</b></sub>

**DapjiSync**

<a href="https://am.dapjisync.my.id"><img src="https://img.shields.io/badge/Website-am.dapjisync.my.id-0A0A0A?style=for-the-badge&logo=googlechrome&logoColor=34D399" alt="DapjiSync"/></a>

</td>
</tr>
</table>

<div align="center">

<br/>

<a href="https://github.com/kyuuXzry/CREATE-AMPREM-1-YEAR/stargazers"><img src="https://img.shields.io/badge/%E2%AD%90%20Beri%20bintang%20kalau%20bermanfaat-10B981?style=for-the-badge&labelColor=0A0A0A" alt="Star"/></a>

<br/><br/>

<sub>MIT License © 2026 KyuuAI · teks lengkap di <a href="LICENSE"><code>LICENSE</code></a></sub>

</div>
