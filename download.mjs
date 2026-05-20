import fs from 'fs';
import path from 'path';

async function download() {
  const url = 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=100063537642065';
  const dest = path.join(process.cwd(), 'public', 'gro-logo.jpg');
  
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(dest, Buffer.from(buffer));
    console.log('Download completed');
  } catch (e) {
    console.error('Download failed', e);
  }
}

download();
