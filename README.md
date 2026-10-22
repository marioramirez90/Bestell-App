# 🍕 Bestell-App (Lieferando-Klon)

Eine responsive Single-Page-Food-Ordering-Webanwendung, entwickelt im Rahmen der Weiterbildung an der **Developer Akademie**. Das Projekt bildet Kernfunktionen bekannter Lieferdienste wie Lieferando nach: dynamisches Rendern von Menüs aus Datenobjekten, interaktive Warenkorblogik mit Preisberechnung sowie ein geräteübergreifendes UI mit sticky Elementen und mobilem Dialog-Warenkorb.

---

## 🚀 Live Demo

Hier geht's direkt zur Online-Version:  
👉 **[Live Demo ansehen](https://marioramirez.de/projekte/bestellapp)**

---

## ✨ Features & Funktionalitäten

* **Restaurant-Header:** Großes Hero-Cover-Bild mit überlappendem Restaurant-Logo, statischen Meta-Informationen (Name, Sterne-Bewertung, Beschreibung, Lieferkosten).
* **Dynamische Speisekarte:** Alle Gerichte werden dynamisch über JavaScript aus einem Daten-Objekt gerendert.
* **Interaktiver Warenkorb (Desktop & Mobil):**
  * Gerichte per Plus-Button direkt in den Warenkorb legen.
  * Mengen einzelner Gerichte inkrementieren (`+`) und dekrementieren (`-`).
  * Gerichte komplett per Klick aus dem Warenkorb entfernen.
  * Automatische Berechnung und Aktualisierung von Gesamtsummen (und ggf. Lieferkosten).
  * Overflow-Handling: Kein Ausbrechen aus dem Container bei vielen Positionen.
* **Sticky Warenkorb (Desktop):** Bleibt beim Scrollen am Rand angeheftet (sticky sidebar).
* **Responsiver Dialog-Warenkorb (Mobil):** 
  * Warenkorb blendet sich auf mobilen Geräten platzsparend aus.
  * Ein fixierter Bottom-Button mit Bestellsumme öffnet den Warenkorb als vollwertigen Dialog/Overlay.
* **Bestellabschluss:** Klick auf „Bestellen“ leert den Warenkorb und zeigt ein modernes In-App-Feedback (kein `alert()`).

---

## 🛠️ Verwendete Technologien

* **HTML5:** Semantischer Aufbau (`<header>`, `<main>`, `<aside>`, `<footer>`), Vorlagen-Templates.
* **CSS3:** Flexbox, CSS Grid, `position: sticky`, Media Queries, Dialog/Modal-Styling.
* **JavaScript (Vanilla):** DOM-Manipulation, Array-Methoden, State-Management für Warenkorb-Items, ausgelagerte Template-Funktionen.

---

## ⚡ Quickstart (Lokal ausführen)

Wer das Projekt lokal auf dem Rechner testen oder inspecten möchte:

### 1. Repository klonen
```bash
git clone [https://github.com/DEIN-GITHUB-NUTZERNAME/DEIN-REPO-NAME.git](https://github.com/DEIN-GITHUB-NUTZERNAME/DEIN-REPO-NAME.git)
