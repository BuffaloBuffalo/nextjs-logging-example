import { context } from "./context";

export const logger = (msg: string) => {
    const store = context.getStore();
    console.log('retrieved store: ', store);
    const uuid = store?.get('uuid');
    console.log(`[LOG] [${uuid}]: ${msg}`);
};