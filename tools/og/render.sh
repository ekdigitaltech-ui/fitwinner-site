#!/bin/sh
# Renders the link-preview images: sh tools/og/render.sh <suffix>   e.g. "c" -> og-tr-1200x630-c.jpg
# Use a new suffix every time (link-preview caches key on the file name), then update index.html
# (og:image, og:image:secure_url, twitter:image) and the pattern in tools/build-en.mjs.
set -e
cd "$(dirname "$0")"
for l in tr en; do
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=1 --window-size=1200,630 --screenshot="$PWD/.og-$l.png" "file://$PWD/og-$l.html" 2>/dev/null
  sips -s format jpeg -s formatOptions 88 ".og-$l.png" --out "../../assets/img/og-$l-1200x630-$1.jpg" >/dev/null
  rm ".og-$l.png"
done
