const bcryptjs = require('bcryptjs');

async function hashPassword (){
const myPassword = 'admin903-su23';
const hash = await bcryptjs.hashSync(myPassword, 10);
console.log(hash);
}

hashPassword();
