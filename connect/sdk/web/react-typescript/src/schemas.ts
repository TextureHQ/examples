export interface IConnectLink {
  linkToken: string;
  linkUrl: string;
}

export interface IConnectLinkOptions {
  referenceId: string;
  clientName?: string;
}

export interface ICreateSessionResult {
  createSession: (options: IConnectLinkOptions) => Promise<void>;
  link: IConnectLink | null;
  loading: boolean;
  error: Error | null;
}
