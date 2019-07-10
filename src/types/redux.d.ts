export interface ActionType<T> {
  type: T;
}

export type Action = ActionType<string>;
