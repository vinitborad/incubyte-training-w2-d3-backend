export interface keyResult {
  id: string;
  isCompleted: boolean;
  description: string;
  progress: number;
}

export interface OkrType {
  id: string;
  objective: string;
  keyResults: keyResult[];
}
