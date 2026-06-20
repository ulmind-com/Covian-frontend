import os
import glob

# Only replacing exact case 'CoreVita' to 'Covian' and 'corevita' in visible strings if necessary, 
# but let's stick to 'CoreVita' to avoid breaking Cloudinary paths which use lowercase 'corevita'.
# Wait, the Cloudinary paths don't break if we create a new folder, but let's keep them as is.

files = glob.glob("src/**/*.tsx", recursive=True) + glob.glob("src/**/*.ts", recursive=True)

for file_path in files:
    with open(file_path, "r") as f:
        content = f.read()
    
    if "CoreVita" in content:
        new_content = content.replace("CoreVita", "Covian")
        with open(file_path, "w") as f:
            f.write(new_content)
        print(f"Updated {file_path}")

