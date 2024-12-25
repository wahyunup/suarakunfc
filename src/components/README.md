# Direktori Components

Direktori ini berisi komponen dan tipe yang dapat digunakan kembali untuk proyek ini. Berikut adalah penjelasan singkat mengenai struktur dan tujuan dari setiap file dan folder.

## Struktur

### `@types/ui.d.ts`
File ini berisi definisi tipe TypeScript yang digunakan di berbagai komponen. Anda dapat mendefinisikan tipe, interface, dan enum yang dapat digunakan bersama di sini untuk menjaga konsistensi dan mengurangi redundansi kode. Jadi, sebelum membuat sebuah component, pastikan type nya sudah terinisialisasi

### `@types/partials.d.ts`
File ini berisi definisi tipe TypeScript yang digunakan untuk types khusus pada components yang ada pada folder `partials`. Anda dapat mendefinisikan tipe, interface, dan enum yang dapat digunakan bersama untuk menjaga konsistensi dan mengurangi redundansi kode. Jadi, sebelum membuat sebuah partials, pastikan type nya sudah terinisialisasi

### `components/ui/...`
File ini berisi implementasi beberapa komponen yang dapat digunakan kembali. Komponen ini dapat diubah gaya dan fungsinya sesuai kebutuhan proyek.

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

### `index.tsx`
File ini berisi kumpulan dari beberapa components yang di export. Jadi, setelah selesai membuat component, buatkan export di `index.tsx`. Fungsinya supaya kodingan menjadi rapih dan terstruktur.

### Contoh Penggunaan:
```tsx

export { default as Button } from "./Button/Button";
export { default as Input } from "./Input/Input";

```

### Ketika digunakan di parent
```tsx

import { Button, Input } from "@/components";

export default function Home() {
  return (
    <>
      <Button className={"p-4"} background="secondary" size="medium">
        Masuk
      </Button>
      <Input
        name="password"
        type="password"
        placeholder="Password"
      />
    </>
  );
}

```

### `partials/...`
Folder ini peruntukan untuk components yang hampir digunakan di berbagai parent seperti Navbar dan Footer.
Note: Untuk file yang ada didalam folder partials ini dia punya masing masing file `main.tsx` yang isinya adalah kumpulan dari components yang ada didalam partials

