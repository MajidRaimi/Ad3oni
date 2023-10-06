import { event, Events } from '../utils';

export default event(Events.MessageCreate , ({log}, message) => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
})