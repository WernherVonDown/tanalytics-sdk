import axios from "axios";

type DefaultEvents = 'visit' | 'login' | 'register' | 'message';

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

declare class Tanalytics {
  private headers: any;

  constructor(apiKey: string);

  send(eventType: string, options?: IEventOptions): Promise<any>;

  sendLogin(options?: IEventOptions): Promise<any>;

  sendRegister(options?: IEventOptions): Promise<any>;

  sendVisit(options?: IEventOptions): Promise<any>;

  sendMessage(options?: IEventOptions): Promise<any>;
}

export default Tanalytics;