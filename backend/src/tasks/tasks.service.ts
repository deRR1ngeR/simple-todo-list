import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getTasks() {
    return this.prisma.task.findMany();
  }

  async createTask(data: Prisma.TaskCreateInput) {
    return this.prisma.task.create({ data });
  }

  async updateTask(id: number, data: Prisma.TaskUpdateInput) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async deleteTask(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
