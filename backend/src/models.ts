/**
 * Here's all the model definitions which are used inside module.
 */
export interface ServerModel {
  url: string;
  priority: number;
}

export interface ServerModelWithStatus extends ServerModel {
  healthy: boolean;
  serverIndex: number;
}
