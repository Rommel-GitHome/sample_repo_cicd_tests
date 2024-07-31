const x = await entityManager.connection.query('SELECT * FROM planet9.api_trace');
console.log(x); 
complete();