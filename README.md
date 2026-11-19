# 🧶 Katalog Zabawek Rękodzielniczych (Pracownia Splotów)

Lekki, w 100% statyczny katalog autorskich zabawek i amigurumi zbudowany w oparciu o **Astro (SSG)** i **Tailwind CSS**, gotowy do bezpłatnego hostingu na **Cloudflare Pages** w domenie `losia3.xyz` (np. jako `zabawki.losia3.xyz`).

---

## 🚀 Jak to najłatwiej i bezkosztowo wdrożyć na Cloudflare?

Darmowy plan **Cloudflare Pages** oferuje nieograniczony transfer, automatyczny certyfikat SSL i globalny CDN. Masz dwie proste drogi:

### Sposób 1: Automatyczny deploy przez GitHub (Zalecany — KISS)
Gdy połączysz Cloudflare Pages z GitHubem, każda zmiana w pliku `toys.json` lub dodanie zdjęcia automatycznie zaktualizuje Twoją stronę w ~30 sekund.

1. **Utwórz repozytorium na GitHubie** (np. `gh repo create katalog-zabawek --public --source=. --push` lub przez stronę github.com).
2. Wejdź na [dash.cloudflare.com](https://dash.cloudflare.com/) ➔ **Workers & Pages** ➔ **Create application** ➔ zakładka **Pages** ➔ **Connect to Git**.
3. Wybierz swoje repozytorium `katalog-zabawek`.
4. Ustawienia budowania (Cloudflare wykryje je automatycznie):
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Kliknij **Save and Deploy**. Gotowe!

### Podpięcie domeny `zabawki.losia3.xyz`:
1. W projekcie na Cloudflare Pages wejdź w zakładkę **Custom domains**.
2. Kliknij **Set up a custom domain**.
3. Wpisz np. `zabawki.losia3.xyz`.
4. Ponieważ domena `losia3.xyz` jest już na Twoim koncie Cloudflare, system sam doda rekord DNS CNAME i wystawi darmowy certyfikat SSL. Wszystko działa bezdotykowo i nie zakłóca Twojego lokalnego HomeLabu.

---

### Sposób 2: Natychmiastowy deploy z terminala (bez GitHuba)
Jeśli chcesz wrzucić stronę na Cloudflare bez łączenia z GitHubem:
```bash
npm run build
npx wrangler pages deploy dist --project-name=katalog-zabawek
```
W terminalu pojawi się link do logowania w przeglądarce, a strona od razu pojawi się w Twoim panelu Cloudflare Pages.

---

## ⏱️ Jak dodać nową zabawkę w 2 minuty?

1. Zapisz zdjęcie zabawki (najlepiej w formacie WebP lub PNG/JPG) w:
   - `public/images/toys/ai/nazwa.webp` (jeśli to koncept AI), **lub**
   - `public/images/toys/real/nazwa.webp` (jeśli to prawdziwe zdjęcie).
2. Otwórz plik `src/data/toys.json` i dopisz na początku:
```json
{
  "slug": "nowa-zabawka",
  "name": "Nowa Zabawka",
  "category": "sci-fi",
  "status": "available",
  "mediaType": "real_photo",
  "shortDescription": "Krótki opis na 1-2 zdania widoczny na kafelku.",
  "fullDescription": "Szczegółowy opis widoczny na podstronie produktu.",
  "pricePln": 150,
  "specs": {
    "heightCm": 18,
    "materials": ["100% bawełna", "filc"],
    "leadTime": "wysyłka w 48h",
    "ageNote": "Figurka dekoracyjna"
  },
  "images": [
    {
      "src": "/images/toys/real/nowa-zabawka.webp",
      "alt": "Opis zdjęcia dla wyszukiwarek"
    }
  ]
}
```
3. Zrób `git commit` i `git push` (lub uruchom `npm run build`).

---

## 🔄 Jak zamienić zdjęcie AI na prawdziwe zdjęcie?

Gdy wydziergasz zabawkę i zrobisz jej zdjęcie telefonem/aparatem:
1. Wrzuć plik do `public/images/toys/real/twoja-zabawka-01.webp`.
2. W `src/data/toys.json` w obiekcie tej zabawki zmień:
   - `"mediaType": "real_photo"`
   - ścieżkę w `"images"` na `/images/toys/real/twoja-zabawka-01.webp`
3. Gotowe! Plakietka „Wizualizacja AI” natychmiast zniknie, a pojawi się „Prawdziwe zdjęcie”. Zabawka będzie też widoczna po zaznaczeniu filtra „Tylko gotowe (prawdziwe zdjęcia)”.

---

## 🛠️ Lokalne uruchomienie (podgląd na żywo)

```bash
cd /Users/mzmudzin/katalog-zabawek
npm run dev
```
Otwórz w przeglądarce: `http://localhost:4321`.
Każda zmiana w plikach odświeża się natychmiast w czasie rzeczywistym.
