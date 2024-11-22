import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

  @Post()
  createTask(@Body() data: { text: string }) {
    return this.tasksService.createTask({ text: data.text });
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() data: { completed: boolean }) {
    return this.tasksService.updateTask(+id, data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(+id);
  }
}
