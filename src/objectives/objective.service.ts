import { Injectable } from '@nestjs/common';
import { ObjectiveDto } from './dto/objective.dto';
import { ObjectiveType } from './interface/objective.interface';
import { PrismaService } from '../prisma.service';
import { ObjectiveNotFoundException } from './objective-not-found-exception';

@Injectable()
export class ObjectiveService {
  objectives: ObjectiveType[] = [];
  constructor(private readonly PrismaService: PrismaService) {}

  getAll(title: string) {
    return this.PrismaService.objective.findMany({
      where: {
        title: {
          startsWith: title,
          mode: 'insensitive',
        },
      },
      include: {
        keyResults: true,
      },
    });
  }

  async getById(objectiveId: string) {
    const objective = await this.PrismaService.objective.findUnique({
      where: { id: objectiveId },
    });
    if (objective) {
      return objective;
    } else {
      throw new ObjectiveNotFoundException(objectiveId);
    }
  }

  create(objectiveDto: ObjectiveDto) {
    return this.PrismaService.objective.create({ data: objectiveDto });
  }

  delete(id: string) {
    return this.PrismaService.objective.delete({ where: { id } });
  }

  async update(objectiveId: string, objectiveDto: ObjectiveDto) {
    try {
      return await this.PrismaService.objective.update({
        where: { id: objectiveId },
        data: objectiveDto,
      });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new ObjectiveNotFoundException(objectiveId);
      }
      throw error;
    }
  }
}
