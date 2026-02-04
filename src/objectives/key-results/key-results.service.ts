import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateKeyResultDto } from './dto/create-key-result.dto';

@Injectable()
export class KeyResultsService {
  constructor(private readonly prismaService: PrismaService) {}
  getAll() {
    return this.prismaService.keyResult.findMany();
  }

  async create(objectiveId: string, createKeyResultDto: CreateKeyResultDto) {
    return this.prismaService.keyResult.create({
      data: {
        ...createKeyResultDto,
        objective: {
          connect: { id: objectiveId },
        },
      },
    });
  }
}
