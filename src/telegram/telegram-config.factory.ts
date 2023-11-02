import { ConfigService } from '@nestjs/config';
import { TelegrafModuleAsyncOptions, TelegrafModuleOptions } from 'nestjs-telegraf';

const telegrafModuleOptions = (config: ConfigService): TelegrafModuleOptions => {
    return {
        token: config.get('6960805814:AAGFGifRp4jDeBIX9qE9iSZY62XUD-941fQ'),
    };
};

export const options = (): TelegrafModuleAsyncOptions => {
    return {
        inject: [ConfigService],
        useFactory: (config: ConfigService) => telegrafModuleOptions(config)
    };
};
