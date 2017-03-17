const path = require('path')
const {db, config} = require('sqlectron-core');

const serverInfo = {
  database: path.join(__dirname, 'sqlectron.sqlite'),
  client: 'sqlite'
};

async function main() {
    const serverSession = db.createServer(serverInfo);
    const connection = await serverSession.createConnection('sqlectron.sqlite');
    await connection.connect(serverInfo)
    console.log(await connection.listTables())
    console.log(await connection.listDatabases())
}

main();

