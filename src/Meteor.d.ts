declare module '@meteorrn/core' {
  function connect(endpoint: string, options?: any): void;
  function disconnect(): void;
  function reconnect(): void;

  type Status =
    | 'change'
    | 'connected'
    | 'disconnected'
    | 'loggingIn'
    | 'loggingOut';

  function call(...args: any[]): void;
  function status(): {
    connected: boolean;
    status: Status;
  };

  function logout(callback: (error: any) => void): void;
  function loggingOut(): boolean;
  function loggingIn(): boolean;

  interface Data {
    getUrl(): string;
    waitDdpReady(cb: (...args: any[]) => void): void;
    onChange(cb: (...args: any[]) => void): void;
    offChange(cb: (...args: any[]) => void): void;
    on(eventName: string, cb: (...args: any[]) => void): void;
    off(eventName: string, cb: (...args: any[]) => void): void;
    waitDdpConnected(cb: (...args: any[]) => void): void;
  }
  function getData(): Data;
}
