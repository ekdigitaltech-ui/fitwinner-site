#!/bin/sh
# Renders the link-preview images: sh tools/og/render.sh <suffix>   e.g. "c" -> og-tr-1200x630-c.jpg
# Use a new suffix every time (link-preview caches key on the file name), then update index.html
# (og:image, og:image:secure_url, twitter:image); tools/build-en.mjs picks up any suffix by itself.
# Headless Chrome may write the screenshot and then never exit, so wait for the file and stop it.
set -e
cd "$(dirname "$0")"
for l in tr en; do
  rm -f ".og-$l.png"
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars \
    --force-device-scale-factor=1 --window-size=1200,630 --virtual-time-budget=4000 \
    --screenshot="$PWD/.og-$l.png" "file://$PWD/og-$l.html" >/dev/null 2>&1 &
  pid=$!
  i=0
  while [ ! -s ".og-$l.png" ] && [ $i -lt 40 ]; do sleep 0.5; i=$((i + 1)); done
  sleep 1
  kill $pid 2>/dev/null || true
  [ -s ".og-$l.png" ] || { echo "render failed: $l" >&2; exit 1; }
  sips -s format jpeg -s formatOptions 88 ".og-$l.png" --out "../../assets/img/og-$l-1200x630-$1.jpg" >/dev/null
  rm ".og-$l.png"
done
