import axios from "axios";
import { generateRandomString } from "./utils/string/generateRandomString";


enum DefaultEvents {
    visit = 'visit',
    login = 'login',
    register = 'register',
    message = 'message',
}



const API_ENDPOINT = "https://tanalytics.ru/api/v1/events";

interface IMessageEventOptions {
    message: string;
}

interface IEventOptions extends IMessageEventOptions {
    userId?: string;
}

interface IEvent {
    type: string;
    userId: string;
    message?: string;
}

class Tanalytics {
    private headers: any = {};

    constructor(apiKey: string) {
        if (!apiKey) throw Error('requires an apikey');
        this.headers = {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            "Api-Key": apiKey,
        };
    }

    public send(eventType: string, options?: IEventOptions) {
        const event: IEvent = {
            type: eventType,
            userId: options?.userId ?? generateRandomString(),
            message: options?.message,
        }
        const config = {
            headers: this.headers,
            body: event,
        }
        return axios.post(API_ENDPOINT, config)
    }

    public sendLogin(options?: IEventOptions) {
        return this.send(DefaultEvents.login, options)
    }

    public sendRegister(options?: IEventOptions) {
        return this.send(DefaultEvents.register, options)
    }

    public sendVisit(options?: IEventOptions) {
        return this.send(DefaultEvents.visit, options)
    }

    public sendMessage(options?: IEventOptions) {
        return this.send(DefaultEvents.message, options);
    }
}

export default Tanalytics;
