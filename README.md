<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=AMPREM%20Plugin&fontSize=70&fontColor=fff&animation=twinkling&fontAlignY=35&desc=WhatsApp%20Bot%20%7C%20Baileys%20%7C%20Magic%20Link&descAlignY=55&descSize=18" width="100%"/>

<br>

<a href="https://github.com/username/amprem-plugin/stargazers">
    <img src="https://img.shields.io/github/stars/username/amprem-plugin?style=for-the-badge&logo=github&color=f4c542&labelColor=0d1117" alt="Stars"/>
</a>
<a href="https://github.com/username/amprem-plugin/network/members">
    <img src="https://img.shields.io/github/forks/username/amprem-plugin?style=for-the-badge&logo=github&color=58a6ff&labelColor=0d1117" alt="Forks"/>
</a>
<a href="https://github.com/username/amprem-plugin/issues">
    <img src="https://img.shields.io/github/issues/username/amprem-plugin?style=for-the-badge&logo=github&color=f85149&labelColor=0d1117" alt="Issues"/>
</a>
<a href="https://github.com/username/amprem-plugin/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/username/amprem-plugin?style=for-the-badge&logo=opensourceinitiative&color=3fb950&labelColor=0d1117" alt="License"/>
</a>

<br><br>

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Baileys-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/>

<br><br>

<b>AMPREM Plugin</b> untuk bot WhatsApp berbasis <a href="https://github.com/WhiskeySockets/Baileys">Baileys</a>.<br>
Kirim & verifikasi magic link Alight Motion Premium via <b>DapjiSync API</b>.

<br>

<a href="#fitur">Fitur</a> •
<a href="#install">Install</a> •
<a href="#cara-pakai">Cara Pakai</a> •
<a href="#contoh">Contoh</a> •
<a href="#struktur">Struktur</a> •
<a href="#troubleshooting">Troubleshooting</a> •
<a href="#credit">Credit</a>

<br>

</div>

---

## Fitur

<table>
<tr>
<td width="50%" valign="top">

**Core**

- Kirim magic link ke email
- Verifikasi magic link otomatis
- Flow send + verify dalam satu command
- Auto-extract link dari response API
- Session per user

</td>
<td width="50%" valign="top">

**Bonus**

- Support custom link (dari inbox)
- Cancel session kapan saja
- Info Local ID & Token
- Owner & Premium only
- Plugin standalone (gak numpuk di file utama)

</td>
</tr>
</table>

---

## Install

### Dependency

```bash
npm install axios
```

<table>
<thead>
<tr>
<th align="left">Package</th>
<th align="left">Fungsi</th>
<th align="left">Versi</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>axios</code></td>
<td>HTTP client</td>
<td><img src="https://img.shields.io/npm/v/axios?style=flat-square&color=cb3837"/></td>
</tr>
</tbody>
</table>

---

## Cara Pakai

### Kirim Magic Link

```bash
.amprem send email@gmail.com
```

### Verifikasi Link

```bash
.amprem verify <link>
```

### Send + Auto-Verify

```bash
.amprem full email@gmail.com
```

### Batalkan Session

```bash
.amprem cancel
```

---

## Contoh

<table>
<tr>
<td align="center" width="50%">

**Kirim Link**

```bash
User: .amprem send user@gmail.com
Bot:  Magic link terkirim!
      Gmail  : user@gmail.com
      Status : Link berhasil dikirim
```

</td>
<td align="center" width="50%">

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

---

## Cara Pasang

### 1. Install Dependency

```bash
npm install axios
```

### 2. Copy File Plugin

Copy file `amprem.js` ke folder `plugins/` di bot lo.

```
plugins/
└── amprem.js
```

### 3. Pastikan Variabel Ada

<table>
<thead>
<tr>
<th align="left">Variabel</th>
<th align="left">Deskripsi</th>
</tr>
</thead>
<tbody>
<tr><td><code>conn</code></td><td>Instance WhatsApp (<code>makeWASocket</code>)</td></tr>
<tr><td><code>m</code></td><td>Message object</td></tr>
<tr><td><code>text</code></td><td>Isi pesan setelah command</td></tr>
<tr><td><code>prefix</code></td><td>Prefix bot (biasanya <code>.</code>)</td></tr>
<tr><td><code>command</code></td><td>Command yang diketik</td></tr>
<tr><td><code>Reply</code></td><td>Fungsi reply pesan</td></tr>
<tr><td><code>isCreator</code></td><td>Cek user owner</td></tr>
<tr><td><code>isPremium</code></td><td>Cek user premium</td></tr>
</tbody>
</table>

> Kalau nama instance beda (misal `alip`, `kyuu`, dll), tinggal ganti `conn` ke nama instance bot lo.

### 4. Restart Bot

```bash
node index.js
```

---

## Struktur

```
amprem-plugin/
├── README.md
├── LICENSE
└── plugins/
    └── amprem.js
```

---

## Troubleshooting

<details>
<summary><b>Link tidak muncul di response</b></summary>

<br>

API kadang gak balikin link secara langsung. Solusinya:
1. Cek inbox/spam email
2. Copy link verifikasi manual
3. Jalankan: `.amprem verify <link>`

</details>

<details>
<summary><b>Gagal verifikasi: link expired</b></summary>

<br>

Magic link punya masa berlaku. Kalau expired:
1. Jalankan `.amprem cancel`
2. Ulangi `.amprem send <email>`

</details>

<details>
<summary><b>Session hilang setelah restart</b></summary>

<br>

Session disimpan di `global.ampremSession`. Restart bot = session hilang.

Solusi: pakai `.amprem full` yang langsung verify tanpa simpan session.

</details>

<details>
<summary><b>Error Cannot find module axios</b></summary>

<br>

```bash
npm install axios
```

Pastikan install di folder bot.

</details>

---

## Tech Stack

<div align="center">

<table>
<tr>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width="50"/><br>
<b>Node.js</b><br>
<sub>Runtime</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="50"/><br>
<b>JavaScript</b><br>
<sub>Language</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/whatsapp/whatsapp-original.svg" width="50"/><br>
<b>Baileys</b><br>
<sub>WhatsApp API</sub>
</td>
<td align="center" width="25%">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="50"/><br>
<b>Axios</b><br>
<sub>HTTP Client</sub>
</td>
</tr>
</table>

</div>

---

## Credit

<div align="center">

<table>
<tr>
<td align="center" width="50%">

**Author**

**KyuuAI**

<a href="https://wa.me/628567126744">
    <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>
<a href="https://instagram.com/Rissxzry_">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/>
</a>

</td>
<td align="center" width="50%">

**API Provider**

**DapjiSync**

<a href="https://am.dapjisync.my.id">
    <img src="https://img.shields.io/badge/Website-58a6ff?style=for-the-badge&logo=googlechrome&logoColor=white"/>
</a>

</td>
</tr>
</table>

</div>

---

## License

<div align="center">

<a href="https://github.com/username/amprem-plugin/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-3fb950?style=for-the-badge&logo=opensourceinitiative&logoColor=white"/>
</a>

<br><br>

**MIT License** - Bebas dipakai, modif, dan share.

**Jangan hapus credit, hargai creator.**

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&text=Made%20with%20Love&fontSize=30&fontColor=fff&animation=twinkling&fontAlignY=70" width="100%"/>

</div>