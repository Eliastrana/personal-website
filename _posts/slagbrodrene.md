---
title: 'SPILL: Slagbrødrene '
excerpt: 'En litt shitty smash-klone som fungerer overraskende bra!'
coverImage: '/assets/blog/slagbrodrene/slagbrodrene.png'
date: '2026-09-23T05:35:07.322Z'
author:
  name: Elias Trana
  picture: '/assets/blog/authors/logoai.png'
ogImage:
  url: 'assets/blog/svelta/svelta-showcase.png'
tags:
    - Spill

---

## En litt shitty smash-klone

For en stund siden overtok jeg en Trashcan Mac Pro fra 2013. Denne maskinen var i sin tid en kraftig maskin, men i dag er den både for gammel for de nye Mac OS-ene, på utdatert intel x86-arkitektur, og ikke veldig kraftig. På tross av dette har en mye ram (64GB), utrolig stabile deler som aldri streiker, og en helt stillegående profil.

Dette roper jo server, og det tok ikke lang tid før jeg hadde satt opp en liten server for å hoste små prosjekter. Et av disse prosjektene er et lite spill som jeg har laget i Unity, som jeg kaller Slagbrødrene. En vanlig server håndterer naturligvis CRUD-operasjoner ganske greit så lenge det ikke er millioner av brukere, men det jeg var interresert i å teste var hvordan den håndterte WebSockets. Hvis den kunne håndtere umiddelbare oppdateringer på tvers av flere enheter, åpnet det seg en verden av applikasjoner som ikke var aktuelle å hoste på Vercel. 

Her prøvde jeg meg på noen få ulike spill, både 3d og plattform, hvor en av dem var dette. Spillet er en åpenbar Smash-klone, men med tastatur som hovedkontroll. Det har også karakterer som man ikke ville funnet i et vanlig Smash-spill. 

Spillet får videre utivkling basert på hva søskenene mine ønsker seg av nye karakterer, og fungerer som en fin erstatning for mer komplekse spill som Smash, der man kan spille med venner på en enkel måte.


## Sjekk det ut: [Slagbrødrene](https://arcade.eliastrana.no/)