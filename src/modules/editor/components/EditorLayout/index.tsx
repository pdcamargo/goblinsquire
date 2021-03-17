import { Grid, GridItem } from '@chakra-ui/react';

export const EditorLayoutItem: React.FC<{
  area: 'content' | 'sidebar';
}> = ({ area, children }) => <GridItem gridArea={area}>{children}</GridItem>;

const EditorLayout: React.FC = ({ children }) => {
  return (
    <Grid
      position="relative"
      width="100vw"
      height="100vh"
      templateAreas={`
        "content sidebar"
      `}
      templateColumns="auto max-content"
    >
      {children}
    </Grid>
  );
};

export default EditorLayout;
