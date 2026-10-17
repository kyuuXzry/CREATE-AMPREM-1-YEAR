<div align="center">

<br/>

<img src="assets/alight-motion.svg" width="120" alt="Alight Motion"/>

<h1>AMPREM</h1>

<p><b>WhatsApp Bot Plugin · Alight Motion Premium</b></p>

<a href="https://github.com/kyuuXzry">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&duration=2800&pause=900&color=22C55E&center=true&vCenter=true&width=640&height=45&lines=Kirim+magic+link+ke+email;Verifikasi+link+otomatis;Send+%2B+verify+dalam+satu+command;Berbasis+Baileys+%7C+via+DapjiSync+API" alt="Typing SVG"/>
</a>

<br/>

<img src="https://img.shields.io/badge/Node.js-14532D?style=for-the-badge&logo=nodedotjs&logoColor=white&labelColor=0A0A0A"/>
<img src="https://img.shields.io/badge/JavaScript-166534?style=for-the-badge&logo=javascript&logoColor=white&labelColor=0A0A0A"/>
<a href="https://github.com/WhiskeySockets/Baileys">
  <img src="https://img.shields.io/badge/Baileys-15803D?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0A0A0A"/>
</a>
<img src="https://img.shields.io/badge/Axios-14532D?style=for-the-badge&logo=axios&logoColor=white&labelColor=0A0A0A"/>

<br/>

<img src="https://img.shields.io/badge/ACCESS-OWNER%20%26%20PREMIUM-166534?style=for-the-badge&logo=shield&logoColor=white&labelColor=0A0A0A"/>
<img src="https://img.shields.io/badge/API-DAPJISYNC-15803D?style=for-the-badge&logo=icloud&logoColor=white&labelColor=0A0A0A"/>
<img src="https://img.shields.io/badge/LICENSE-MIT-14532D?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=0A0A0A"/>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

</div>

<br/>

<div align="center">

<h2><img src="https://api.iconify.design/lucide:info.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Tentang</h2>

</div>

Plugin WhatsApp Bot buat kirim & verifikasi **magic link Alight Motion Premium** via DapjiSync API. Berbasis [Baileys](https://github.com/WhiskeySockets/Baileys).

Fungsinya buat handle flow **Alight Motion Premium** (amprem), mulai dari kirim magic link ke email sampai verifikasi link-nya.

Plugin ini standalone, jadi bisa lo taruh di folder `plugins/` tanpa ganggu file utama bot.

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:sparkles.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Fitur</h2>

</div>

<table align="center" width="100%">
<tr>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:zap.svg?color=%2316A34A" width="22" align="center"/>&nbsp;Core

- Kirim magic link ke email
- Verifikasi magic link otomatis
- Flow send + verify dalam satu command
- Auto-extract link dari response API

</td>
<td width="50%" valign="top">

### <img src="https://api.iconify.design/lucide:gift.svg?color=%2316A34A" width="22" align="center"/>&nbsp;Bonus

- Support custom link (dari inbox)
- Cancel session kapan saja
- Info Local ID & Token
- Owner & Premium only

</td>
</tr>
</table>

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:terminal.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Cara Pakai</h2>

</div>

| Command | Fungsi |
| :-- | :-- |
| `.amprem send <email>` | Kirim magic link ke email |
| `.amprem verify <link>` | Verifikasi magic link |
| `.amprem full <email>` | Kirim link + verifikasi otomatis |
| `.amprem cancel` | Batalkan session |

**Kirim magic link**

```bash
.amprem send email@gmail.com
```

**Verifikasi link**

```bash
.amprem verify <link>
```

**Send + auto-verify**

```bash
.amprem full email@gmail.com
```

**Batalkan session**

```bash
.amprem cancel
```

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:message-square.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Contoh</h2>

</div>

<table align="center" width="100%">
<tr>
<td width="50%" valign="top">

**Kirim Link**

```bash
User: .amprem send user@gmail.com
Bot:  Magic link terkirim!

      Gmail  : user@gmail.com
      Status : Link berhasil dikirim
```

</td>
<td width="50%" valign="top">

**Auto-Verify**

```bash
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

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:package.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Cara Pasang</h2>

</div>

### 1. Install Dependency

```bash
npm install axios
```

| Package | Fungsi |
| :-- | :-- |
| `axios` | HTTP client |

### 2. Copy File Plugin

Taruh file `amprem.js` di folder `plugins/` bot lo.

```text
plugins/
└── amprem.js
```

### 3. Pastikan Variabel Ada

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
> Kalau nama instance beda (misal `alip`, `kyuu`, dll), tinggal ganti `conn` ke nama instance bot lo.

### 4. Restart Bot

```bash
node index.js
```

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:folder-tree.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Struktur</h2>

</div>

```text
.
├── README.md
├── LICENSE
├── assets/
│   └── alight-motion.svg
└── plugins/
    └── amprem.js
```

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:life-buoy.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Troubleshooting</h2>

</div>

| Masalah | Solusi |
| :-- | :-- |
| Link tidak muncul di response | Cek inbox/spam email, copy link verifikasi manual, lalu jalankan `.amprem verify <link>`. |
| Gagal verifikasi: link expired | Jalankan `.amprem cancel`, terus ulangi `.amprem send <email>`. |
| Session hilang setelah restart | Session disimpan di `global.ampremSession`. Pakai `.amprem full` kalau gak mau ribet. |
| `Cannot find module 'axios'` | Jalankan `npm install axios`. |

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:wrench.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Tech Stack</h2>

<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="45"/><br>
<b>Node.js</b>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="45"/><br>
<b>JavaScript</b>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg" width="45"/><br>
<b>Baileys</b>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="45"/><br>
<b>Axios</b>
</td>
</tr>
</table>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

<h2><img src="https://api.iconify.design/lucide:heart.svg?color=%2316A34A" width="26" align="center"/>&nbsp;Credit</h2>

**Author** · KyuuAI

<a href="https://wa.me/628567126744">
  <img src="https://img.shields.io/badge/WhatsApp-Hubungi-14532D?style=for-the-badge&logo=whatsapp&logoColor=white&labelColor=0A0A0A"/>
</a>
<a href="https://instagram.com/Rissxzry_">
  <img src="https://img.shields.io/badge/Instagram-Follow-166534?style=for-the-badge&logo=instagram&logoColor=white&labelColor=0A0A0A"/>
</a>

<br/><br/>

**API Provider** · DapjiSync

<a href="https://am.dapjisync.my.id">
  <img src="https://img.shields.io/badge/Website-am.dapjisync.my.id-15803D?style=for-the-badge&logo=googlechrome&logoColor=white&labelColor=0A0A0A"/>
</a>

<br/><br/>

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:000000,50:166534,100:000000&height=2" width="100%"/>

</div>

<br/>

<div align="center">

<h2><img src="https://api.iconify.design/lucide:scale.svg?color=%2316A34A" width="26" align="center"/>&nbsp;License</h2>

</div>

MIT License © 2026 KyuuAI. Teks lengkap lisensi ada di file [`LICENSE`](LICENSE).

<div align="center">

<br/>

<sub>Kalau plugin ini kepake, kasih ⭐ ya.</sub>

</div>
