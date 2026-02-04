import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { ObjectiveDto } from './dto/objective.dto';
import { type ObjectiveType } from './interface/objective.interface';

@Controller()
export class ObjectiveController {
  constructor(private readonly objectiveService: ObjectiveService) {
    this.objectiveService = objectiveService;
  }
  @Get()
  getAll(@Query('title') title: string) {
    return this.objectiveService.getAll(title);
  }

  @Post()
  create(@Body(new ValidationPipe()) objectiveDto: ObjectiveDto) {
    return this.objectiveService.create(objectiveDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ObjectiveType> {
    return this.objectiveService.delete(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() objectiveDto: ObjectiveDto) {
    return this.objectiveService.update(id, objectiveDto);
  }
}
