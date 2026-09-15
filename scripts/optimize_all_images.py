#!/usr/bin/env python3
"""
Script de optimización de imágenes para Mining Investments Chile
- Comprime y redimensiona la imagen hero (pexels-apasaric-1238864.jpg)
- Comprime todas las imágenes de yacimientos a máx 1200px (calidad web óptima)
- Genera miniaturas ultraligeras (máx 300px, ~15KB) para la cuadrícula y lightGallery
"""
import os
import glob
from PIL import Image, ImageOps

def optimize_image(input_path, output_path, max_dim, quality=75, is_thumb=False):
    with Image.open(input_path) as img:
        img = ImageOps.exif_transpose(img)
        if img.mode in ('RGBA', 'LA', 'P'):
            # Convert to RGB if saving as JPEG
            bg = Image.new('RGB', img.size, (15, 23, 42)) # bg-dark color
            if img.mode == 'P':
                img = img.convert('RGBA')
            bg.paste(img, mask=img.split()[3] if len(img.split()) > 3 else None)
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        
        w, h = img.size
        if max(w, h) > max_dim:
            scale = max_dim / max(w, h)
            new_w = int(w * scale)
            new_h = int(h * scale)
            img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        
        # Guardar imagen optimizada
        img.save(
            output_path,
            'JPEG',
            quality=quality,
            optimize=True,
            progressive=not is_thumb
        )

def main():
    root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(root_dir)
    print(f"Directorio de trabajo: {root_dir}")
    
    total_orig = 0
    total_new = 0

    # 1. Optimizar Hero
    hero_path = 'img/pexels-apasaric-1238864.jpg'
    if os.path.exists(hero_path):
        orig_sz = os.path.getsize(hero_path)
        total_orig += orig_sz
        optimize_image(hero_path, hero_path, max_dim=1920, quality=75)
        new_sz = os.path.getsize(hero_path)
        total_new += new_sz
        print(f"[HERO] {hero_path}: {orig_sz/1024:.1f} KB -> {new_sz/1024:.1f} KB ({(1 - new_sz/orig_sz)*100:.1f}% reducción)")

    # 2. Optimizar yacimientos y generar miniaturas
    yacimientos = ['las-carditas', 'pichasca', 'tambillo', 'oropesa']
    for yac in yacimientos:
        yac_dir = os.path.join('img', 'yacimientos', yac)
        thumbs_dir = os.path.join(yac_dir, 'thumbs')
        os.makedirs(thumbs_dir, exist_ok=True)
        
        files = glob.glob(os.path.join(yac_dir, '*.*'))
        for f in files:
            if os.path.isdir(f):
                continue
            ext = os.path.splitext(f)[1].lower()
            if ext in ('.jpg', '.jpeg', '.png'):
                fname = os.path.basename(f)
                orig_sz = os.path.getsize(f)
                total_orig += orig_sz
                
                # Optimizar imagen completa (máx 1200px)
                optimize_image(f, f, max_dim=1200, quality=75)
                full_sz = os.path.getsize(f)
                total_new += full_sz
                
                # Generar miniatura (máx 300px)
                thumb_path = os.path.join(thumbs_dir, fname)
                optimize_image(f, thumb_path, max_dim=300, quality=70, is_thumb=True)
                thumb_sz = os.path.getsize(thumb_path)
                
                print(f"[{yac}] {fname}: {orig_sz/1024:.1f} KB -> {full_sz/1024:.1f} KB (Thumb: {thumb_sz/1024:.1f} KB)")

    print("-" * 50)
    print(f"Resumen total de imágenes principales:")
    print(f"Original: {total_orig / 1024 / 1024:.2f} MB")
    print(f"Optimizado: {total_new / 1024 / 1024:.2f} MB")
    print(f"Ahorro total: {(1 - total_new / total_orig) * 100:.1f}%")

if __name__ == '__main__':
    main()
