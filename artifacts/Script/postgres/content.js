const queryRunner = p9.manager.connection.createQueryRunner();
await queryRunner.query(`SELECT pg_sleep(70)`);