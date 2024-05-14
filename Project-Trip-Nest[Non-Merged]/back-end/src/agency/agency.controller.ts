import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
  Delete, HttpCode, HttpStatus,  NotFoundException, Request
} from '@nestjs/common';
import { AgencyService } from './agency.service';
import { AddRoomDto, AddFlightDto, AddVehicleDto } from './dto/create-agency.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { OwnUserGuard } from 'src/all-user/own-user.guard';

@Controller('agency')

export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @UseGuards(AuthGuard)
  @Get(':type')
  async getByType(
    @Param('type') type: string,
    @Request() req: any,
  ) {
    const { username } = req.user;
    const resources = await this.agencyService.getResourcesByTypeAndUsername(type, username);
    if (!resources || resources.length === 0) {
      throw new NotFoundException(`No ${type}s found for user ${username}`);
    }
    return resources;
  }

  @UseGuards(AuthGuard)
  @Get(':type/:id')
  async getById(
    @Param('type') type: string,
    @Param('id', ParseIntPipe) id: number,
    @Request() req: any,
  ) {
    const { username } = req.user;
    const resource = await this.agencyService.getResourceByTypeAndId(type, id, username);
    if (!resource) {
      throw new NotFoundException(`Resource ${type} with id ${id} not found for user ${username}`);
    }
    return resource;
  }

  @UseGuards(AuthGuard)
  @Post('add-room')
  @HttpCode(HttpStatus.CREATED)
  async addRoom(@Body(ValidationPipe) addRoomDto: AddRoomDto, @Request() req) {
    const username = req.user.username;
    return await this.agencyService.addRoom(addRoomDto, username);
  }

  @UseGuards(AuthGuard)
  @Post('add-flight')
  @HttpCode(HttpStatus.CREATED)
  async addFlight(@Body(ValidationPipe) addFlightDto: AddFlightDto, @Request() req) {
    const username = req.user.username;
    return await this.agencyService.addFlight(addFlightDto, username);
  }

  @UseGuards(AuthGuard)
  @Post('add-vehicle')
  @HttpCode(HttpStatus.CREATED)
  async addVehicle(@Body(ValidationPipe) addVehicleDto: AddVehicleDto, @Request() req) {
    const username = req.user.username;
    return await this.agencyService.addVehicle(addVehicleDto, username);
  }
}
