import os
import glob
import re

admin_dir = "src/app/(dashboard)/admin"
pages = glob.glob(f"{admin_dir}/**/page.tsx", recursive=True)

import_loader_re = re.compile(r'import\s+\{\s*PageLoader\s*\}\s+from\s+["\']@/components/ui/PageLoader["\'];?\n')
import_lottie_re = re.compile(r'import\s+\{\s*triggerLottie\s*\}\s+from\s+["\']@/components/ui/GlobalLottie["\'];?\n')

for page in pages:
    with open(page, "r") as f:
        content = f.read()
        
    modified = False

    # 1. Add imports if not present
    if "PageLoader" not in content and "Loader2" in content:
        content = content.replace('import {', 'import { PageLoader } from "@/components/ui/PageLoader";\nimport { triggerLottie } from "@/components/ui/GlobalLottie";\nimport {', 1)
        modified = True
    elif "triggerLottie" not in content and ("handleDelete" in content or "handleSave" in content):
        content = content.replace('import {', 'import { triggerLottie } from "@/components/ui/GlobalLottie";\nimport {', 1)
        modified = True

    # 2. Replace <Loader2 ... animate-spin ... /> with <PageLoader />
    # We look for Loader2 inside a conditional like `loading ? (...) :`
    # It's tricky to regex perfectly, but most look like:
    # {loading ? ( <div...><Loader2 className="...animate-spin..." /></div> ) :
    # We will just replace `<Loader2 className="w-6 h-6 animate-spin text-blue-500" />` with `<PageLoader />`
    # and maybe remove its wrapper div if it's there.
    
    loader_pattern = r'<div[^>]*>\s*<Loader2[^>]*animate-spin[^>]*>\s*</div>'
    new_content, count = re.subn(loader_pattern, '<PageLoader />', content)
    if count > 0:
        content = new_content
        modified = True
        
    # Also catch `fallback={<div...><Loader2.../></div>}` in Suspense
    fallback_pattern = r'fallback=\{<div[^>]*>\s*<Loader2[^>]*animate-spin[^>]*>\s*</div>\}'
    new_content, count = re.subn(fallback_pattern, 'fallback={<PageLoader />}', content)
    if count > 0:
        content = new_content
        modified = True

    # 3. Inject triggerLottie("success") into handleSave / create / update
    # Typical pattern: setModal(null); load();
    if "setModal(null);" in content and "load();" in content:
        if "triggerLottie(" not in content:
            content = content.replace("setModal(null);\n      load();", "setModal(null);\n      load();\n      triggerLottie('success');")
            modified = True
            
    # For handleDelete: Typical pattern: load(); inside handleDelete
    # We'll just look for handleDelete block and inject before load();
    if "handleDelete" in content and "load();" in content:
        # Find the load(); that is inside handleDelete.
        # Simple string replace might hit the wrong load(), so we'll be careful.
        # Actually, let's just do a regex for the delete function.
        # `await delete...(id).catch...;\n    load();`
        delete_call_re = re.compile(r'(await\s+delete[a-zA-Z]+\(.*?\).*?;\s*\n\s*)load\(\);')
        new_content, count = delete_call_re.subn(r"\1triggerLottie('error');\n    load();", content)
        if count > 0:
            content = new_content
            modified = True

    if modified:
        with open(page, "w") as f:
            f.write(content)
        print(f"Updated {page}")

