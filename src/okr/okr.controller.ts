import { Body, Controller, Get, Post } from '@nestjs/common';
import { OkrService } from './okr.service';
import type { OkrDtoType } from './dto/okr.dto';
import type { OkrType } from './interface/okr.interface';

@Controller('okrs')
export class OkrController {
  constructor(private readonly okrService: OkrService) {}

  @Get()
  fetchAll() {
    return this.okrService.fetchAll();
  }

  @Post()
  createOkr(@Body() createOkrDto: OkrDtoType): OkrType {
    return this.okrService.createOkr(createOkrDto);
  }
}
