import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule} from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { GraphQLModule} from '@nestjs/graphql';
import { ComponentsModule } from './components/component.module';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers/apollo.driver';

@Module({
  imports: [ConfigModule.forRoot(),
     DatabaseModule,
    GraphQLModule.forRoot({
    playground : true, 
    debug : true,
    driver: ApolloDriver,
    autoSchemaFile : true
  }),
    ComponentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
