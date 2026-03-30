# Kingdom Management Game (CDA Project)

Ce projet est une **simulation de gestion de royaume** développée en **TypeScript / JavaScript**.  
Le joueur incarne un souverain confronté à différents visiteurs, dont les demandes influencent directement la **survie** et la **prospérité** du royaume.

---

## Table des matières

- [📝 Présentation du projet](#-présentation-du-projet)
- [🎮 Gameplay](#-gameplay)
- [🛠️ Architecture technique](#️-architecture-technique)
- [📊 Diagramme de classes (UML)](#-diagramme-de-classes-uml)
- [🏗️ Design Patterns implémentés](#️-design-patterns-implémentés)
- [⚙️ Détails des classes](#️-détails-des-classes)
- [🚀 Installation](#-installation)
- [▶️ Lancement du projet](#️-lancement-du-projet)
- [🧰 Technologies utilisées](#-technologies-utilisées)
- [📁 Structure du projet](#-structure-du-projet)
- [📜 Licence](#-licence)

---

## Présentation du projet

L’objectif principal du jeu est de maintenir l’équilibre entre deux ressources essentielles du royaume :

- **👥 Population**
- **💰 Or**

À chaque tour, un personnage vient présenter une requête au joueur.  
Le joueur doit alors prendre une décision simple :

- **Oui**
- **Non**

Chaque décision entraîne des conséquences pouvant :

- modifier les ressources du royaume ;
- déclencher des événements spécifiques ;
- ajouter des **tags / flags** influençant les futures interactions.

Le jeu repose donc sur un système de **choix narratifs à conséquences**.

---

## Gameplay

Le joueur incarne le dirigeant du royaume et doit prendre des décisions face à plusieurs types de visiteurs :

- 🛡️ Chevalier
- 💼 Marchand
- 🧙 Sorcière
- 🪙 Collecteur d’impôts
- 🤲 Mendiant

Chaque visiteur possède :

- un nom ;
- une description ;
- une image ;
- des boutons de réponse personnalisés ;
- un effet propre appliqué au royaume selon le choix du joueur.

Le but est de **survivre le plus longtemps possible** en évitant :

- la ruine financière ;
- l’effondrement démographique ;
- des événements bloquants liés à certains choix passés.

---

## Architecture technique

Le projet repose sur une **architecture orientée objet** afin de garantir :

- la **modularité** ;
- la **maintenabilité** ;
- la **réutilisabilité** du code.

L’ensemble du système s’articule autour de plusieurs classes centrales, notamment :

- `Kingdom`
- `Visitor`
- `VisitorBuilder`
- `VisitorFactory`

Cette structure permet d’ajouter facilement de nouveaux visiteurs, de nouvelles règles et de nouveaux scénarios.

---

## Diagramme de classes (UML)

Le système est détaillé dans le document UML du projet.

### Ressource
Le diagramme de classes complet est disponible dans :
[jeu.drawio (2).pdf](https://github.com/user-attachments/files/26361113/jeu.drawio.2.pdf)


