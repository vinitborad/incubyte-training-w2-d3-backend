import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseFilters,
} from '@nestjs/common';
import { ObjectiveService } from './objective.service';
import { ObjectiveDto } from './dto/objective.dto';
import { type ObjectiveType } from './interface/objective.interface';
import { ValidatePipe } from './pipes/validate.pipe';
import { ObjectiveNotFoundExceptionFilter } from './objective-exception-filter';

@Controller()
@UseFilters(ObjectiveNotFoundExceptionFilter)
export class ObjectiveController {
  constructor(private readonly objectiveService: ObjectiveService) {
    this.objectiveService = objectiveService;
  }
  @Get()
  getAll(@Query('title') title: string) {
    return this.objectiveService.getAll(title);
  }

  @Get(":objectiveId")
  getById(@Param("objectiveId") objectiveId: string) {
    return this.objectiveService.getById(objectiveId);
  }

  @Post()
  create(@Body(new ValidatePipe()) objectiveDto: ObjectiveDto, @Body("title", new ValidatePipe()) title: string) {
    return this.objectiveService.create(objectiveDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ObjectiveType> {
    return this.objectiveService.delete(id);
  }

  @Patch(':id')
  update(
    @Param('id', new ValidatePipe()) id: string,
    @Body() objectiveDto: ObjectiveDto
  ) {
    return this.objectiveService.update(id, objectiveDto);
  }


}
