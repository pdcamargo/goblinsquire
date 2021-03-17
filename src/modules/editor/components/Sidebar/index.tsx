import dynamic from 'next/dynamic';
import { Box, Tabs, TabList, TabPanel, Tab, TabPanels } from '@chakra-ui/react';

import AbilityBox from '@modules/dnd/components/AbilityBox';

const DynamicSidebarNodes = dynamic(() => import('../SidebarNodes'));

const Sidebar: React.FC = () => {
  return (
    <Box width="xs" boxShadow="2xl" bgColor="white" height="100vh">
      <Tabs isLazy>
        <TabList>
          <Tab>Nodes</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <DynamicSidebarNodes />
          </TabPanel>
          <TabPanel>
            <AbilityBox name="STR" value={16} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Sidebar;
