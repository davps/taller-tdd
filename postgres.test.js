const { expect, afterAll, test } = require('@jest/globals');
const db = require('./postgres');

afterAll( async ()=>{
    await db.end();
})

test('test database connection', async ()=>{
    const {rows} = await db.query('SELECT 1 as columna');
    expect(rows).toEqual([{"columna": 1}]);
});

test('test usuario table', async()=>{
    const {rows} = await db.query('SELECT * FROM usuario');
    
    expect(rows).toEqual([{"id": 1, "nombre": "david"}]);

})

