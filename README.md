<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=AMPREM&fontSize=80&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=WhatsApp%20Bot%20Plugin&descAlignY=58&descSize=16" width="100%"/>

<br><br>

<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Baileys-25D366?style=flat-square&logo=whatsapp&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>

<br><br>

Plugin WhatsApp Bot buat kirim & verifikasi <b>magic link Alight Motion Premium</b><br>
via DapjiSync API. Berbasis <a href="https://github.com/WhiskeySockets/Baileys">Baileys</a>.

</div>

---

## Tentang

Plugin ini dibuat buat bot WhatsApp berbasis Baileys. Fungsinya buat handle flow **Alight Motion Premium** (amprem) — mulai dari kirim magic link ke email, sampe verifikasi link-nya.

Plugin standalone, jadi bisa lo taruh di folder `plugins/` tanpa ganggu file utama bot.

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

</td>
<td width="50%" valign="top">

**Bonus**

- Support custom link (dari inbox)
- Cancel session kapan saja
- Info Local ID & Token
- Owner & Premium only

</td>
</tr>
</table>

---

## Install

```bash
npm install axios
```

| Package | Fungsi |
|---------|--------|
| `axios` | HTTP client |

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

---

## Cara Pasang

### 1. Install Dependency

```bash
npm install axios
```

### 2. Copy File Plugin

Taruh file `amprem.js` di folder `plugins/` bot lo.

```
plugins/
└── amprem.js
```

### 3. Pastikan Variabel Ada

| Variabel | Deskripsi |
|----------|-----------|
| `conn` | Instance WhatsApp (`makeWASocket`) |
| `m` | Message object |
| `text` | Isi pesan setelah command |
| `prefix` | Prefix bot (biasanya `.`) |
| `command` | Command yang diketik |
| `Reply` | Fungsi reply pesan |
| `isCreator` | Cek user owner |
| `isPremium` | Cek user premium |

> Kalau nama instance beda (misal `alip`, `kyuu`, dll), tinggal ganti `conn` ke nama instance bot lo.

### 4. Restart Bot

```bash
node index.js
```

---

## Struktur

```
.
├── README.md
├── LICENSE
└── plugins/
    └── amprem.js
```

---

## Troubleshooting

**Link tidak muncul di response**
> Cek inbox/spam email, copy link verifikasi manual, lalu jalankan `.amprem verify <link>`

**Gagal verifikasi: link expired**
> Jalankan `.amprem cancel`, terus ulangi `.amprem send <email>`

**Session hilang setelah restart**
> Session disimpan di `global.ampremSession`. Pakai `.amprem full` kalau gak mau ribet.

**Error Cannot find module axios**
> ```bash
> npm install axios
> ```

---

## Tech Stack

<div align="center">

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

</div>

---

## Credit

<div align="center">

**Author** — KyuuAI

<a href="https://wa.me/628567126744">
<img src="https://img.shields.io/badge/WhatsApp-25D366?style=flat-square&logo=whatsapp&logoColor=white"/>
</a>
<a href="https://instagram.com/Rissxzry_">
<img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white"/>
</a>

<br><br>

**API Provider** — DapjiSync

<a href="https://am.dapjisync.my.id">
<img src="https://img.shields.io/badge/Website-58a6ff?style=flat-square&logo=googlechrome&logoColor=white"/>
</a>

</div>

---

## License

MIT License

Copyright (c) 2026 KyuuAI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer&fontSize=30&fontColor=fff&animation=twinkling&fontAlignY=70" width="100%"/>

</div>