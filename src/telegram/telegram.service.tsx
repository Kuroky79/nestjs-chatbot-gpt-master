import { ConfigService } from '@nestjs/config';
import { ChatgptService } from '@/chatgpt/chatgpt.service';
import { Start, Update, Ctx, On, Message } from 'nestjs-telegraf';
import { Scenes, Telegraf } from 'telegraf';


type Context = Scenes.SceneContext;

@Update()
export class TelegramService extends Telegraf<Context> {
    constructor(private readonly configService: ConfigService, private readonly gpt: ChatgptService) {
        super(configService.get('6960805814:AAGFGifRp4jDeBIX9qE9iSZY62XUD-941fQ'));
    }
    @Start()
    onStart(@Ctx() ctx: Context) {
        ctx.replyWithHTML(`<b>Привет, ${ctx.from.username}</b>
Это чат бот с ChatGPT!
Введите любую фразу и получите ответ!
        `);
    }

    @On('text')
    onMessage(@Message('text') message: string) {
        return this.gpt.generateResponse(message);
    }
}


