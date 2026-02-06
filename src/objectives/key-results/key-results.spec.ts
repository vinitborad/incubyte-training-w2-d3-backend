import { KeyResultsService } from './key-results.service';
import { Test } from '@nestjs/testing';
import { PrismaService } from '../../prisma.service';
import { ObjectiveNotFoundException } from '../objective-not-found-exception';

describe('KeyResultsService', () => {
  let keyResultsService: KeyResultsService;

  const mockPrismaService = {
    keyResult: {
      findMany: jest.fn(),
      create: jest.fn(),
      delete: jest.fn(),
    },
    objective: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        KeyResultsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();
    keyResultsService = await module.resolve(KeyResultsService);
    // prismaService = module.get(PrismaService);
  });

  describe('getAll', () => {
    it('should return all key results', async () => {
      const mockKeyResults = [
        {
          id: '1',
          description: 'Nest 1',
          progress: 90,
          objectiveId: '1',
          isCompleted: false,
        },
        {
          id: '2',
          description: 'Nest 2',
          progress: 90,
          objectiveId: '1',
          isCompleted: false,
        },
      ];

      mockPrismaService.keyResult.findMany.mockResolvedValue(mockKeyResults);
      const response = await keyResultsService.getAll();

      expect(response).toEqual(mockKeyResults);
      expect(mockPrismaService.keyResult.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('create', () => {
    it('should reutrn the id of the object if objective is found', async () => {
      const mockObjective = {
        id: '1',
        title: 'Objective 1',
      };

      mockPrismaService.objective.findUnique.mockResolvedValue(mockObjective);

      const mockKeyResult = {
        id: '1',
        description: 'Key Result 1',
        progress: 90,
        objectiveId: '1',
        isCompleted: false,
      };

      mockPrismaService.keyResult.create.mockResolvedValue(mockKeyResult);

      const response = await keyResultsService.create('1', {
        description: 'Key Result 1',
        progress: 90,
      });

      expect(response).toEqual(mockKeyResult);
      expect(mockPrismaService.objective.findUnique).toHaveBeenCalledTimes(1);
      expect(mockPrismaService.keyResult.create).toHaveBeenCalledTimes(1);
    });

    it('should throw ObjectiveNotFoundException if objective is not found', async () => {
      mockPrismaService.objective.findUnique.mockResolvedValue(null);

      await expect(
        keyResultsService.create('wrong-id', {
          description: 'Key Result 1',
          progress: 90,
        }),
      ).rejects.toThrow(ObjectiveNotFoundException);
    });
  });

  describe('delete', () => {
    it('should delete the key result', async () => {
      const mockKeyResult = {
        id: '1',
        description: 'Key Result 1',
        progress: 90,
        objectiveId: '1',
        isCompleted: false,
      };

      mockPrismaService.keyResult.delete.mockResolvedValue(mockKeyResult);

      const response = await keyResultsService.delete('1');

      expect(response).toEqual(mockKeyResult);
      expect(mockPrismaService.keyResult.delete).toHaveBeenCalledTimes(1);
      expect(mockPrismaService.keyResult.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });
});
