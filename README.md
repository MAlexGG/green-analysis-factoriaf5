:herb: Mejora verde de una web
============

## Table of Contents
1. [Información general](#información-general)
2. [Análisis](#análisis)
3. [Conclusiones](#conclusiones)
4. [Instalación](#instalación)

***
## Información general

Este proyecto se realizó como trabajo final del Certificado Green Digital Skills, el objetivo de este estudio es medir la landing page de la página wed de la organización Factoría F5 https://factoriaf5.org/, generar un plan de mejora y desarrollar una réplica de la página original (a nivel educativo) para comparar la huella de carbono inicial y final, después de seguir algunas recomendaciones, sin comprometer el diseño y la calidad de la misma.
La página original está desarrollada en Wordpress y la réplica en React.js, por lo que se podrá también tener una comparación entre tecnologías, solo se medirá en versión desktop. Esta es la réplica mejorada https://malexgg.github.io/green-analysis-factoriaf5/

## Análisis

La huella de carbono es muy difícil de medir y no sabremos cuál es el impacto real de una web o de un producto, sin embargo, existen herramientas usadas en este análisis que nos permiten calcular dicha huella de una manera rápida y sencilla para tener una visión que nos ayude a mejorar, cada una de ellas toma en cuenta distintos parámetros por lo que el resultado puede variar entre ellas.

El proceso consistió en hacer un análisis de la página actual, realizada en Wordpress, con las cuatro herramientas escogidas: website carbon calculator, digital beacon, pageSpeed insights y globemallow para depués realizar una réplica desarrollada en React.js, basada en una arquitectura de componentes, que sea lo más parecida posible, con las mismas imágenes y llamadas a terceros de la web actual. Se sacó a producción con github-pages cuyo hosting usa energía de fuentes renovables y se realizó una segunda medición, para ver si disminuían o aumentaban los valores. De esta manera, además de ver la diferencia de usar un hosting verde, se puede comparar diferentes tecnologías. Luego se hicieron algunas mejoras a la réplica y se pasó nuevamente por las calculadoras para contabilizar los cambios.

### Mejora

En la rama website-same-weight se encuentra el código sin mejorar que se subió a producción para calcular, después en la rama main se dejó el código de la réplica de la web mejorada, actualmente en producción, con todas las imágenes cambiadas a extensión webp realizadas con la herramienta https://squoosh.app/ cambiando el esfuerzo a 4 y una calidad de 80.
También se cambiaron las imágenes de instagram que antes hacían una llamada al servidor de wordpress, las imágenes se incluyeron en la carpeta "instagram" dentro de "assets". El video se redujo a la mitad del tamaño con la herramienta https://handbrake.fr/ y las fuentes de las letras que hacían peticiones a google fonts ahora se encuentran descargadas en formato woff convertidas con la herramienta https://anyconv.com/es/convertidor-de-ttf-a-woff/ 

### Resultados

Al cambiar de Wordpress a React (un desarrollo más personalizado) se obtiene un aligeramiento del 35% de peso en gramos de CO2, cuando se realiza la mejora se obtiene un 64% respecto a la web actual. Además que aumenta el rendimiento de la página.
Sin embargo, según dos de las calculadoras, la página sigue calificada como mala respecto a la huella de carbono a pesar de las mejoras. En digital bacon muestra como de 16g se reduce a 6g de CO2, pero esta calculadora, clasifica a una página que pese más de 1,5gr de CO2 como mala. 

![tablas](https://user-images.githubusercontent.com/73828751/235345725-eb762e0b-730e-4c45-bc75-1722607ba368.jpg)

## Conclusiones

Todas las mejoras que se han hecho han ayudado a mejorar la web, sin embargo, no es suficiente, por lo que llego a la conclusión de que el diseño importa, se debe rediseñar la página usando estrategias para que el DOM no tenga tanto contenido de carga y así producir un impacto medioambiental más bajo que lo que tiene la web actualmente. Mi propuesta de mejora seguiría estas preguntas:
- ¿Es realmente necesario el video inicial?
- ¿Son necesarias tantas imágenes? ¿Se podría decir lo mismo con gráficos svg o css?
- ¿Se puede ocultar información, para ser requerida solo por el usuario que la necesite?
- ¿Se puede redireccionar los videos de youtube, para que no estén embebidos?
- ¿Se puede repensar tanto la sección de novedades de Instagram, como la de empresas y entidades?
- ¿Se puede cambiar el fondo blanco por uno menos luminoso (pantallas OLED)?

### Informe
El análisis completo se encuentra en la siguiente dirección https://docs.google.com/presentation/d/1Ofdi9F7jCz8dKBSnw0UEpIt-gZ_YAoBSuZ6_t-FdUSM/edit?usp=sharing  

## Instalación
- Se requiere React v.18.2.0
- Se requiere node.js v.18.15.0
- git clone <repository>
- npm start
