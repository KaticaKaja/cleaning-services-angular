# Cleaning-Services-Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1.

#### Json-server pokretanje
`npm run server`
#### Dodavanje/modifikovanje baze
`npm run generate` ili `direktno u database.json`
#### Menjanje baze
`db.json` ili `generate.json` uz pomoć faker.js-a
>**obavezno komandu `npm run generate` posle izmena**
## General info
---
This is a school project about cleaning services company website

## Technologies
---
Project is created with:

* Javascript (Angular v10 framework)
* Typescript
* Bootstrap 4
* HTML 5
* CSS 3
* JSON Server
* faker.js

## Documentation / Dokumentacija
---
Glavna uloga aplikacije informisanje o uslugama, eventualno kontaktiranje preko `contact forme`. Na sajtu se nalaze ukupno četiri kategorije proizvoda. `Svi podaci se izvlače iz json-a, kao i navigacija`, preko servisa se komunicira sa json-serverom.
Kod rutiranja se koristi `lazy loading`.
#### Home page
    Komunikacija komponenti preko :
        - servisa
        - Input direktive (za parent-child)
    
    Pipe za filtriranje po tipu servisa

    Animacija galerije
#### Pricing page
    Podaci iz json-a preko servisa
#### About page
    Podaci iz json-a preko servisa
#### Contact page
    Template Driven Form sa validacijom i servisom za dodavanje poruke u json
    Footer subscribe forma