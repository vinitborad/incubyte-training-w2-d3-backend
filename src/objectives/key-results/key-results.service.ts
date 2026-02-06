import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { CreateKeyResultDto } from './dto/create-key-result.dto';
import { ObjectiveNotFoundException } from '../objective-not-found-exception';

@Injectable()
export class KeyResultsService {
  constructor(private readonly prismaService: PrismaService) {}

  getAll() {
    return this.prismaService.keyResult.findMany();
  }

  async create(objectiveId: string, createKeyResultDto: CreateKeyResultDto) {
    const objective = await this.prismaService.objective.findUnique({
      where: { id: objectiveId },
    });
    if (objective) {
      const createdKeyResult = this.prismaService.keyResult.create({
        data: {
          ...createKeyResultDto,
          objective: {
            connect: { id: objectiveId },
          },
        },
      });
      return createdKeyResult;
    } else {
      throw new ObjectiveNotFoundException(objectiveId);
    }
  }

  async delete(id: string) {
    return this.prismaService.keyResult.delete({
      where: { id },
    });
  }
}
