# Web App for AR_ATUA

Haere Mai! Welcome to the Github home for AR_ATUA's Web App division.

This is part of an EDA final project by Ben, Zach, Anthony, Maddy and Laura.

## Our Kaupapa / Vision
- Remind people of spiritual realms present in the everyday, by creating a new way of seeing the world.
- Our app displays and embodies our values from the bottom to the top.  A holistic approach to web development.
- We do everything meaningfully and with purpose.
- Our project helps people, and we can be proud of it.
- Te Ao Māori through visualization.
- We make life more magical.
- Make New Zealand less racist through shared cultural experience.
- combine maori culture with tech
- Always aim for inclusivity.


# User Stories

### Project-Wide

#### MVP:
* I want this web app deployed to heroku
* I want this to be open source
* I want this to be accessible
* I want this site to be mobile responsive

#### Stretch:
* I want to include original artwork in the site

### Home/Landing Page

#### MVP:
* I want to see a landing page with a visualisation that changes depending on data received from a local weather API.
* I want the visualisation to live update
* I want a title at the top of the landing page that reads the name of the project
* I want to have a hidden nav bar that appears on mouse over.
* I want to use the nav bar to explore more about the project: I can click on nav items and have those items render on the page.
* I want to see all the text in Te Reo Maori and English (hereafter referred to as bilingual)

#### Stretch:
* I want to have Maori language learning features related to the weather data
* I want to see a sentence related to Tawhirimatea's current mood / the associated weather

### About/Kaupapa Page

#### MVP:
* I want an About page that explains what the ATUA_AR project is
* I want the scope of the project outlined here
* I want this page to be bilingual

### Translatable Text

* As a visitor, when I view any of our information pages I see the text in Maori first.
* As a reader of this text, when I hover my mouse over any paragraph it transforms into translated english.
* As a reader of this text, when I hover over the next paragraph, the previous paragraph translates back into Maori.

* As a writer for the site, I have an ability to submit the Maori and English together, and know the translatable hover action will happen on the rendered page.
* As a writer, I have a clear understanding of which body of text will translate into which other body of text, so I have control of the translation.  In other words, the translation is not being done word by word but selected text by selected text with that selected text decided by the author.

#### Stretch:
* As a writer, I have a simple web interface to add new content and can decide it's title, the Maori, and the English.
* As a writer, I can decide the exact lines of text that are translated--so I can do sentence by sentence instead of paragraph by paragraph.
 
### The Story of Tawhirimatea

#### MVP:
* I want a page which tells the story of Tawhirimatea
* I want this page to be bilingual


### Contributions

#### MVP:
* I want a page where I can see how I can contribute to this project
* I want to see ways to contact the people involved
* I want a link to the source code/github repo
* I want this page to be bilingual  

### Process

#### MVP:
* I want a page that documents the story of the project itself
* I want to see images as well as text
* I want this page to be bilingual

## Our Data Model

Each text listed above is held in a database, and we can write new texts to push to that Db for a new page in the future.  

A text is structured as so:

### Option 1
_I will just use lorum ipsum, as we are not ready for actual text._

```
{"id": 1,
 "name": "Contributions", //this would be our internal name for the text.
 "te_reo":{
   "title": 'lorum ipsum',
   "paragraphs": [
     {"sentences": [
       "te_reo sentence 1",
       "te_reo sentence 2",
       "te_reo sentence 3"
       ]
     },
     {"sentences": [
       "te_reo sentence 1b",,
       "te_reo sentence 2b",
       "te_reo sentence 3b"
       ]
     }
   ]
 }
 "english":{
   "title": 'english lorum ipsum',
   "paragraphs": [
     {"sentences": [
       "english sentence 1",
       "english sentence 2",
       "english sentence 3"
       ]
     },
     {"sentences": [
       "english sentence 1b",,
       "english sentence 2b",
       "english sentence 3b"
       ]
     }
   ]
 }
       
     
 
