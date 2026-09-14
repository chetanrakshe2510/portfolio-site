import os
from PIL import Image

def convert_to_webp(directory):
    print(f"Scanning {directory}...")
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                file_name, _ = os.path.splitext(file)
                webp_path = os.path.join(root, file_name + '.webp')
                
                # Skip if webp already exists
                if os.path.exists(webp_path):
                    continue
                    
                print(f"Converting {file} to WebP...")
                try:
                    with Image.open(file_path) as image:
                        image.save(webp_path, 'WEBP', quality=85)
                except Exception as e:
                    print(f"Error converting {file}: {e}")

if __name__ == "__main__":
    images_dir = os.path.join(os.getcwd(), "images")
    if os.path.exists(images_dir):
        convert_to_webp(images_dir)
        print("Conversion complete.")
    else:
        print(f"Directory not found: {images_dir}")
