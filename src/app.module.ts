import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { KeyResultsModule } from './objectives/key-results/key-results.module';
import { OkrModule } from './okr/okr.module';
import { ObjectiveModule } from './objectives/objective.module';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { AuthMiddleware } from './app.middleware';

@Module({
  imports: [
    OkrModule,
    ObjectiveModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RouterModule.register([
      {
        path: 'objectives',
        module: ObjectiveModule,
        children: [
          {
            module: KeyResultsModule,
            path: ':objectiveId/key-results',
          },
        ],
      },
    ]),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(AuthMiddleware).forRoutes('objectives/*/key-results');
  }
}
