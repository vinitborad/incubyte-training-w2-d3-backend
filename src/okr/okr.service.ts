import { Injectable } from '@nestjs/common';
import { OkrType } from './interface/okr.interface';
import { OkrDtoType } from './dto/okr.dto';
import okrData from '../local/db.json';

@Injectable()
export class OkrService {
  private readonly okrs: OkrType[] = okrData;

  fetchAll() {
    return this.okrs;
  }

  createOkr(createOkrDto: OkrDtoType) {
    const newOkr: OkrType = { id: crypto.randomUUID(), ...createOkrDto };
    this.okrs.push(newOkr);
    return newOkr;
  }
}
