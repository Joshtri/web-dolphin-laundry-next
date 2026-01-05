# Internationalization (i18n) Setup

Website ini menggunakan `next-intl` untuk mendukung multi-bahasa.

## Bahasa yang Didukung

- **Indonesia (id)** - Bahasa default
- **English (en)**

## Struktur File

```
├── i18n/
│   ├── request.ts         # Konfigurasi request untuk next-intl
│   └── routing.ts         # Konfigurasi routing dan navigasi
├── messages/
│   ├── id.json           # Translation Indonesia
│   └── en.json           # Translation English
├── middleware.ts         # Middleware untuk routing i18n
└── app/
    ├── [locale]/        # Semua page dengan dynamic locale
    │   ├── layout.tsx
    │   └── page.tsx
    └── layout.tsx       # Root layout
```

## Cara Menggunakan Translations di Komponen

### 1. Client Component

```tsx
'use client';

import {useTranslations} from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('common');

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 2. Server Component

```tsx
import {getTranslations} from 'next-intl/server';

export default async function MyPage() {
  const t = await getTranslations('common');

  return (
    <div>
      <h1>{t('home')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}
```

### 3. Menggunakan Link dengan i18n

```tsx
import {Link} from '@/i18n/routing';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

### 4. Programmatic Navigation

```tsx
'use client';

import {useRouter} from '@/i18n/routing';

export default function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return <button onClick={handleClick}>Navigate</button>;
}
```

## Menambahkan Translation Baru

1. Buka file `messages/id.json` dan `messages/en.json`
2. Tambahkan key dan value translation:

```json
// messages/id.json
{
  "mySection": {
    "title": "Judul Saya",
    "description": "Deskripsi dalam bahasa Indonesia"
  }
}

// messages/en.json
{
  "mySection": {
    "title": "My Title",
    "description": "Description in English"
  }
}
```

3. Gunakan di komponen:

```tsx
const t = useTranslations('mySection');
return <h1>{t('title')}</h1>;
```

## Language Switcher

Component `LanguageSwitcher` sudah tersedia di Header untuk mengubah bahasa.

```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Sudah diimplementasikan di Header.tsx
```

## URL Structure

Website akan otomatis prefix dengan locale:
- Indonesia: `https://domain.com/id/`
- English: `https://domain.com/en/`

Default locale (id) bisa diakses tanpa prefix:
- `https://domain.com/` → redirect ke `https://domain.com/id/`

## Tips

1. **Selalu gunakan Link dari i18n routing**: Import dari `@/i18n/routing` bukan dari `next/link`
2. **Konsisten dengan key naming**: Gunakan camelCase atau snake_case secara konsisten
3. **Group related translations**: Gunakan nested objects untuk grouping
4. **Test di kedua bahasa**: Pastikan semua teks sudah ditranslate

## Menambahkan Bahasa Baru

1. Update `i18n/routing.ts`:
```ts
export const routing = defineRouting({
  locales: ['id', 'en', 'zh'], // tambahkan bahasa baru
  defaultLocale: 'id'
});
```

2. Buat file translation baru `messages/zh.json`
3. Update middleware matcher jika diperlukan
