import { Module } from '@nestjs/common';
import { ObjectiveController } from './objective.controller';
import { ObjectiveService } from './objective.service';
import { PrismaService } from '../prisma.service';
import { KeyResultsModule } from './key-results/key-results.module';

@Module({
  controllers: [ObjectiveController],
  providers: [ObjectiveService, PrismaService],
  imports: [KeyResultsModule],
})
export class ObjectiveModule {}
