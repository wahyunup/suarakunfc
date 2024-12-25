# Direktori Components

Direktori ini berisi komponen dan tipe yang dapat digunakan kembali untuk proyek ini. Berikut adalah penjelasan singkat mengenai struktur dan tujuan dari setiap file dan folder.

## Struktur

### `@types/types.d.ts`
File ini berisi definisi tipe TypeScript yang digunakan di berbagai komponen. Anda dapat mendefinisikan tipe, interface, dan enum yang dapat digunakan bersama di sini untuk menjaga konsistensi dan mengurangi redundansi kode. Jadi, sebelum membuat sebuah component, pastikan type nya sudah terinisialisasi

### `components/......`
File ini berisi implementasi komponen Button yang dapat digunakan kembali. Komponen ini dapat diubah gaya dan fungsinya sesuai kebutuhan proyek.

#### Contoh Penggunaan:
```tsx

import Button from './components/Button/Button';

const App = () => {
  return (
    <Button onClick={() => alert('Tombol diklik!')} variant="primary" size="medium">
      Klik Saya
    </Button>
  );
};

```
