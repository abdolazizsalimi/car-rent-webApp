import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(

    {
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "aziz6882",
      "database": "yourcar",
      "entities": ["dist/**/entities/*{.ts,.js}"],
      "synchronize": true,
      "migrations": ["dist/migrations/*{.ts,.js}"]

    }

  )
  //   {
    // useFactory: async () =>
    // Object.assign(
    //   await getConnectionOptions(
    //     process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
    //   ),
    // ),
  // }
    
  // )
],
  exports: [TypeOrmModule]
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) console.log('DB Connected Successfully!');
  }
}
  