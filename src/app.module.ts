import { Module } from '@nestjs/common';
import { SwapModule } from './swap/swap.module';
import { SwapController } from './swap/swap.controller';
import { SwapService } from './swap/swap.service';

@Module({
  imports: [SwapModule],
})
export class AppModule {}
