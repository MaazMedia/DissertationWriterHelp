import os
from xml.etree.ElementTree import Element, SubElement, tostring, ElementTree
from urllib.parse import urljoin

BASE_URL = "https://dissertationwriterhelp.co.uk"
EXCLUDE_DIRS = [".git", "node_modules", ".vercel", "public/fonts", "public/favicon.ico"]
FILE_EXTENSIONS = [".html", ".tsx", ".mdx"]  # Specify relevant file extensions

def generate_sitemap(directory: str, base_url: str) -> Element:
    urlset = Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    for root, dirs, files in os.walk(directory):
        # Exclude specified directories from the sitemap
        dirs[:] = [d for d in dirs if os.path.join(root, d) not in EXCLUDE_DIRS]
        
        for file in files:
            if any(file.endswith(ext) for ext in FILE_EXTENSIONS):
                file_path = os.path.relpath(os.path.join(root, file), directory)
                
                # Convert file paths to URL paths
                url_path = file_path.replace(os.sep, "/")
                url_path = url_path.replace("src/app", "")  # Adjust this as necessary
                url_path = url_path.replace("public", "")  # Adjust this for public files
                url_path = url_path.replace("/page.tsx", "")  # Remove page.tsx in Next.js routes
                
                # Construct full URL
                full_url = urljoin(base_url, url_path)
                
                url = SubElement(urlset, "url")
                loc = SubElement(url, "loc")
                loc.text = full_url
                
    return urlset

def save_sitemap(directory: str, base_url: str, output_file: str = "sitemap.xml") -> None:
    sitemap = generate_sitemap(directory, base_url)
    ElementTree(sitemap).write(output_file, encoding="utf-8", xml_declaration=True)
    print(f"Sitemap generated and saved to {output_file}")

if __name__ == "__main__":
    save_sitemap(".", BASE_URL)
