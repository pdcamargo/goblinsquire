export type DiceContextType = {
  roll: (dice: string, bonus?: number) => Promise<void>;
};
