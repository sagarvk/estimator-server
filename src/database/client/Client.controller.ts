import { Body, Controller, Get, Post } from '@nestjs/common';
import { Client } from './Client.schema';
import { ClientsService } from './Client.service';
import { ClientDto } from './Client.model';

@Controller('client')
export class ClientController {
  constructor(private clientsService: ClientsService) {}

  @Get()
  getClients(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Post()
  createClient(@Body() createClientDto: ClientDto): Promise<Client> {
    return this.clientsService.create(createClientDto);
  }
}
