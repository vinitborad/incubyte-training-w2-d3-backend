export interface keyResult {
  id: string;
  isCompleted: boolean;
  description: string;
  progress: number;
}
export interface OkrDtoType {
  objective: string;
  keyResults: keyResult[];
}
