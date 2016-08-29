export const ActionTypes = {
  NEXT: 'NEXT',
  RESET: 'RESET',
};

export function next() {
  return { type: ActionTypes.NEXT };
}

export function reset() {
  return { type: ActionTypes.RESET };
}
