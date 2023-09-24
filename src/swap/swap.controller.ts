import { Controller, Get, Post } from '@nestjs/common';
import { SwapService } from './swap.service';
import { get } from 'http';

@Controller('advertise')
export class SwapController {
    constructor(private swapservice:SwapService) {}
    
    @Get("/request")
    swapRequest() {
        return this.swapservice.swapRequest();
    }

    @Get('/stake')
    stake() {
        return this.swapservice.stake();
    }
}
