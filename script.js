# Grandio International Co., Ltd. Website

Static bilingual website for Grandio International Co., Ltd. / 大有国際株式会社.

## Project Type

This project is a pure static website.

- HTML: `index.html`
- CSS: `styles.css`
- JavaScript: `script.js`
- Images: `assets/`
- No React, Vite, Next.js or build framework is required.
- No `package.json` is required for deployment.

## Local Preview

Open the project folder:

```powershell
cd C:\Users\iptec\Documents\smart-warehouse-site
```

Start a simple local static server:

```powershell
python -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/
```

You can also open `index.html` directly in a browser, but a local server is recommended for checking paths consistently.

## Build

No build step is required.

The deployable output is the project root:

```text
.
```

Required files for deployment:

```text
index.html
styles.css
script.js
assets/
README.md
```

## Vercel Deployment

This project can be deployed to Vercel as a static site.

Recommended Vercel settings:

```text
Framework Preset: Other
Install Command: leave empty
Build Command: leave empty
Output Directory: .
```

Deployment steps:

1. Upload or push this folder to a Git repository.
2. Import the repository in Vercel.
3. Select `Other` as the framework preset.
4. Leave install and build commands empty.
5. Set output directory to `.` if Vercel asks for one.
6. Deploy.

## SEO

Japanese title:

```text
大有国際株式会社｜スマート物流・自動倉庫ソリューション
```

English title:

```text
Grandio International Co., Ltd. | Smart Logistics & Intelligent Warehousing Solutions
```

Japanese description:

```text
物流現場調査、物量分析、設備方式比較、投資回収試算を通じて、スマート倉庫・自動倉庫・WMS/WCS導入を支援します。
```

English description:

```text
Supporting smart warehousing implementation through logistics site surveys, volume analysis, technology comparison and ROI planning.
```

## Notes

- The site is positioned as smart warehousing implementation support, not equipment manufacturing.
- The language switch is handled by `script.js`.
- All image references are relative paths under `assets/`.
