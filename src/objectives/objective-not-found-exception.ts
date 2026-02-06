export class ObjectiveNotFoundException extends Error {
  constructor(objectiveId: string) {
    super(`Objective with ${objectiveId} not found!`);
  }
}
