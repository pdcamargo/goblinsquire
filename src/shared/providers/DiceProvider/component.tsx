import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Box } from '@chakra-ui/react';

import DiceContext from './context';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let $t: any;

const DiceProvider: React.FC = ({ children }) => {
  const [ref, setRef] = useState<HTMLElement>();

  const [box, setBox] = useState(null);

  useEffect(() => {
    if (ref) {
      const canvas = ref;

      setBox(
        // eslint-disable-next-line new-cap
        new $t.dice.dice_box(canvas, {
          w: window.innerWidth - 270,
          h: window.innerHeight,
        }),
      );
      $t.dice.use_true_random = false;
    }
  }, [ref]);

  const roll = useCallback(
    async (dice: string, bonus = 0) => {
      function notationGetter() {
        return $t.dice.parse_notation(dice);
      }

      function beforeRoll(vectors, notation, callback) {
        callback();

        return { vectors, notation };
      }

      function afterRoll(notation, result: number[]) {
        const sum = result.reduce((a, b) => a + b, 0) + bonus;

        return { sum, notation };
      }

      box.rolling = false;

      box.start_throw(notationGetter, beforeRoll, afterRoll);
    },
    [box],
  );

  return (
    <>
      <Box
        ref={setRef}
        id="canvas"
        position="absolute"
        left="0"
        top="0"
        w="100%"
        h="100%"
        onClick={() => {
          roll('1d6 + 2d20 @ 5 10 3');
        }}
      />
      <DiceContext.Provider value={null}>{children}</DiceContext.Provider>
    </>
  );
};

export function useDice() {
  return useContext(DiceContext);
}

export default DiceProvider;
