export interface JwtModuleOptions {
  privateKey: string;
  tokenType: string;
}

export interface JwtPayload {
  id: number;
}
