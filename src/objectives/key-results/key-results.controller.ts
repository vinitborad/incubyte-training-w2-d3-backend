import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { KeyResultsService } from './key-results.service';
import { CreateKeyResultDto } from './dto/create-key-result.dto';

@Controller('key-results')
export class KeyResultsController {
  constructor(private readonly keyResultsService: KeyResultsService) {
    this.keyResultsService = keyResultsService;
  }

  @Get()
  getAll() {
    return this.keyResultsService.getAll();
  }

  @Post()
  create(
    @Param('objectiveId') objectiveId: string,
    @Body() createKeyResultDto: CreateKeyResultDto,
  ) {
    return this.keyResultsService.create(objectiveId, createKeyResultDto);
  }
}
