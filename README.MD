# Progressive Web Apps - Aktuelle Trends der IKT 2022

Dieses Projekt enthält die Semesteraufgabe aus - aktuelle Trends der IKT 2022. 
Im Laufe des Semesters ist eine *Progressive Web Application* entstanden. Diese readME soll einen Einblick in die Funktionalitäten 
geben und Aufschluss über die lokale Nutzung. Ich habe mich dafür entschieden einen food Blog zu implementieren.
Die Idee kam mir als ich überlegte wie man am besten die Kamera Funktion sowie die Geolocation nutzen könnte. Außerdem bin ich selbst
oft auf solchen Blogs unterwegs auf der Suche nach neuen Restaurants & Cafés. 


## Installation

- Zum Ausführen des Projektes wird [Node.js](https://nodejs.org) verwendet. Sie müssen es auf Ihren Rechner installieren. 

- Zum Starten des Projektes wechseln Sie im Terminal in den Projektordner (`IKT-PWA`) und führen dort 

    `npm install` 

    aus (es genügt auch `npm i`). Damit werden alle erforderlichen Abhängigkeiten installiert.

- Nach erfolgreicher Installation der Abhängigkeiten, geben Sie  

    `npm start` 

    ein, um Ihr Projekt auszuführen. Klicken Sie danach auf [localhost:8080](http://localhost:8080) oder geben Sie die URL direkt in Ihren Browser ein.

- Um das Backend zu starten müssen Sie aus dem Projektordner (`IKT-PWA`) in den Backend Ordner wechseln mit `cd backend` und dann mit `npm run watch` starten

## Was die *Progressive Web Application - foodie* alles kann:

- ein responsives Frontend 

- ein Backend welches über die MongoDB Cloud verbunden ist 
  
- eine Datenbank MongoDB Atlas Cluster 

- ist installierbar  

- ist offline nutzbar  

- verwendet die IndexedDB

- verwendet Hintergrundsynchronisation 

- verwendet Push-Nachrichten

- verwendet die Gelocation API 

- verwendet die Kamera

Über den `+` Button können neue Blogeinträge verfasst werden. Hierbei kann man einen Titel festlegen, 
einen Text und die Location, sowohl selbst eingeben als auch über Geolocation bestimmen lassen.
Außerdem kann ein Foto gemacht werden. Die Anwendung kann installiert werden und ist auch offline verfügbar.
Nach dem speichern des neuen Blog Eintrags erscheint unten eine Benachrichtigung welche vermittelt das 
der Eintrag in der Datenbank angekommen ist. Als Datenbank wurde die MongoDB Atlas gewählt, dies ist eine 
Cloud Datenbank, in einem Cluster befinden sich drei collections in denen die Daten gespeichert werden.
Die Anwendung kann auf verschiedenen Geräten verwendet werden. 

