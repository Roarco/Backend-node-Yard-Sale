
const bcryptjs = require('bcryptjs');

async function verifyPassword (){
const myPassword = 'admin903-su23';
const hash = '$2a$10$Sz1trf/lZ3WL3u18DV5dS.f5b8wEHGeb/7U5vYWo7qYoFRoJ./Sda'
if (await bcryptjs.compareSync(myPassword, hash)) {
    console.log('Password correcto');
}
else {
    console.log('Password incorrecto');
}
}

verifyPassword();
