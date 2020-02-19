# Data Album Kenangan
Aplikasi yang memudahkan pengisian form data siswa untuk album kenangan

### Apa tujuan dibuatnya aplikasi ini?
Karena biasanya para siswa dituntut untuk menulis data diri mereka masing - masing lalu menyerahkan nya ke pengurus data album kenangan, kini mereka cukup membuka aplikasi ini melalui browser mereka lalu memilih foto masing - masing dan mengirim langsung dimanapun mereka berada (area sekolah).

### Apa yang dibutuhkan?
- [node.js](https://nodejs.org/)
- [enmap](https://enmap.evie.dev/)

### Pemasangan
1. [Clone](https://github.com/SMK-Krian-1/data-album-kenangan/archive/master.zip) repository ini
2. Extract
3. Buka folder hasil extract melalui terminal pilihan kalian
4. Install package yang diperlukan dengan menjalankan `npm i` atau `yarn install`
5. Buka aplikasi dengan membuka IP Address di browser yang tersambung dengan jaringan lokal yang sama dengan dimana kalian menjalankan aplikasi ini

### <u>Cara penggunaan</u>
#### A. Pengisian form
1. Masukkan foto ke dalam folder `data-album-kenangan/foto`
2. Jalankan aplikasi
3. Buka melalui browser
4. Klik salah satu foto
5. Isi data
6. Klik submit

Nama file foto akan berubah sesuai dengan data yang sudah diisi. File `{nama siswa}.txt` juga akan otomatis dibuat dengan isi data diri siswa.

#### `What's currently working`
1. `{localhost}/form` -> Form pengisian data siswa

#### `TO DO`
1. Config file
2. Homepage
3. Register & Login feature
4. Login token feature
5. Merging all `.txt` files into one (probably) `.docx` file in order to make it easier to use
6. Much more to expect!
