import fs from 'fs';
import path from 'path';

async function download() {
  const url = 'https://scontent-sof1-1.xx.fbcdn.net/v/t39.30808-1/279878143_542820540567024_1201964875680456727_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=f907e8&_nc_ohc=9zTt4O0W_BEQ7kNvwFRJI1v&_nc_oc=AdozNO2GakL3tG7fBQb5ZY6az3sbvS7Tztpjgrd2YJlF7309oD4WRpZbwvz0JGOVZdbjvbG3wx6tRSOd70nxPmQG&_nc_zt=24&_nc_ht=scontent-sof1-1.xx&edm=AKsJ254EAAAA&_nc_gid=r4_eWiul_QS3jqnO-se0dw&oh=00_Af7d866ufKwVuQaiMA2xSj9piCxfp1ZA51v_MWgekCq4fw&oe=6A1369A3';
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
