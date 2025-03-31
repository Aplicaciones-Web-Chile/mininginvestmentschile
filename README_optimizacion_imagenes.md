# Optimización de Imágenes para Mining Investments Chile

Este proyecto incluye un script para optimizar automáticamente las imágenes de yacimientos mineros, haciéndolas más adecuadas para web y asignándoles nombres SEO friendly.

## Características

- Optimiza el tamaño de las imágenes para web (máximo 1200px de ancho)
- Reduce el peso de las imágenes manteniendo buena calidad
- Renombra las imágenes con nombres SEO friendly basados en el yacimiento y características
- Genera informes detallados de la optimización realizada
- Preserva las imágenes originales

## Requisitos

- Python 3.6 o superior
- Pillow (para procesamiento de imágenes)
- python-slugify (para generar nombres SEO friendly)

## Instalación

1. Asegúrate de tener Python instalado en tu sistema
2. Instala las dependencias necesarias:

```bash
pip install -r requirements.txt
```

## Uso

Para ejecutar el script de optimización:

```bash
python optimizar_imagenes.py
```

El script procesará automáticamente todas las imágenes en las carpetas de yacimientos:
- /img/yacimientos/tambillo
- /img/yacimientos/las-carditas
- /img/yacimientos/pichasca

Las imágenes optimizadas se guardarán en subcarpetas llamadas "tinified" dentro de cada carpeta de yacimiento.

## Estructura de nombres SEO

El script genera nombres SEO friendly siguiendo este patrón:

`[nombre-yacimiento]-[tipo-imagen]-[número]`

Ejemplos:
- yacimiento-minero-tambillo-chile-panoramica-01.jpg
- mina-las-carditas-cobre-chile-vista-03.jpg
- proyecto-minero-pichasca-chile-geologica-02.jpg

## Informe de optimización

Después de procesar las imágenes, el script genera un informe detallado en la carpeta "informes" con:
- Estadísticas generales (total de imágenes, reducción de tamaño)
- Detalles por imagen (nombres, tamaños, dimensiones)

## Notas importantes

- Las imágenes originales no se modifican
- La calidad de compresión está configurada al 80% para un buen equilibrio entre calidad y tamaño
- El ancho máximo está configurado a 1200px, adecuado para la mayoría de sitios web
