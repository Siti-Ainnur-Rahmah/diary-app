# Diary App - Praktikum Mobile Programming (Props & State)

* **Nama:** Siti Ainnur Rahmah
* **NIM:** 2430511050
* **Mata Kuliah:** 
* **Program Studi:** Teknik Informatika, Universitas Muhammadiyah Sukabumi
* **Kelas:** 5B

## Penjelasan Konsep Props dan State

### 1. Props
**Props** merupakan data atau fungsi *callback* yang dikirim dari komponen *parent* (`DiaryListScreen`) ke komponen *child*, seperti `DiaryCard`, `SearchBar`, dan `EntryForm`. Props digunakan untuk mengirimkan data atau fungsi sebagai masukan tanpa mengubah nilainya secara langsung dari komponen *child*.

### 2. State Utama (`useState`)
State digunakan untuk menyimpan dan mengelola data yang dapat berubah selama aplikasi berjalan. State utama yang digunakan meliputi:

- **`entries`**: Menyimpan seluruh daftar data buku harian.
- **`query`**: Menyimpan kata kunci pencarian yang dimasukkan pengguna melalui `SearchBar`.
- **`likedIds`**: Menyimpan kumpulan ID entri yang disukai (*liked*) menggunakan struktur data `Set`, sehingga status suka dapat diperbarui secara dinamis.
- **`selected`**: Menyimpan data entri yang sedang dipilih untuk ditampilkan pada `DiaryDetailModal`.

### 3. Derived State (`useMemo`)
**Derived state** merupakan nilai yang diperoleh dari pengolahan data yang sudah ada, bukan disimpan sebagai state terpisah. Pada aplikasi ini, `filtered` menggunakan `useMemo` untuk menghasilkan daftar catatan berdasarkan pencocokan data `entries` dengan kata kunci `query`. Dengan demikian, daftar yang ditampilkan dapat menyesuaikan pencarian pengguna tanpa memerlukan state tambahan.


---

