import { KeyResultService } from './keyResult.service';
import { Test } from '@nestjs/testing';

describe('keyResultService', () => {
  let keyResultService: KeyResultService;

  beforeEach(async () => {
    keyResultService = new KeyResultService();
    const moduleRef = await Test.createTestingModule({
      providers: [KeyResultService],
    }).compile();
    keyResultService = moduleRef.get<KeyResultService>(KeyResultService);
  });

  it('it should return true if the progress is 100', () => {
    const keyResultDto = {
      description: 'test',
      progress: 100,
    };
    const result = keyResultService.isCompleted(keyResultDto);
    expect(result).toBe(true);
  });

  it('it should return false if the progress is less than 100', () => {
    const keyResultDto = {
      description: 'test',
      progress: 10,
    };
    const result = keyResultService.isCompleted(keyResultDto);
    expect(result).toBe(false);
  });
});
