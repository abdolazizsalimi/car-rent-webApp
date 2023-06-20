import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'aziz6882',
      database: 'yourcar',
      entities: ["dist/**/entities/*{.ts,.js}"],
      migrations: ["dist/migrations/*{.ts,.js}"],
      synchronize: true,
    }

  )],
  exports: [TypeOrmModule]
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) console.log('DB Connected Successfully!');
  }
}
  