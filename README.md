:herb: Mejora verde de una web
============

## Table of Contents
1. [Información general](#información-general)
2. [Análisis](#análisis)
3. [Instalación](#instalación)

***
## Información general

Este proyecto se realizó como trabajo final del Certificado Green Digital Skills, el objetivo de este estudio es medir la landing page de la página wed de la organización Factoría F5 https://factoriaf5.org/, generar un plan de mejora y desarrollar una réplica de la página original (a nivel educativo) para comparar la huella de carbono inicial y final después de seguir algunas recomendaciones, sin comprometer el diseño y la calidad de la misma.
La página original está desarrollada en Wordpress y la réplica en React.js, por lo que se podrá también tener una comparación entre tecnologías, solo se medirá en versión desktop.

## Análisis
En esta rama se encuentra el código de la réplica de la web con todas las imágenes cambiadas a extensión webp realizadas con la herramienta https://squoosh.app/ cambiando el esfuerzo a 4 y una calidad de 80.
También se cambiaron las imágenes de instagram que antes hacían una llamada http a la base de datos de wordpress, las imágenes se incluyeron en la carpeta "instagram" dentro de "assets"

## Instalación
- Se requiere React v.18.2.0
- Se requiere node.js v.18.15.0
- git clone <repository>
- npm start
