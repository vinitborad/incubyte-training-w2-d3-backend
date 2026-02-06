import { KeyResultDto } from './objectives/dto/keyResult.dto';

export class KeyResultService {
  isCompleted(keyResultDto: KeyResultDto) {
    return keyResultDto.progress >= 100;
  }
}
