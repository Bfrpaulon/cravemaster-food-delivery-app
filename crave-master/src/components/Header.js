import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading } from '@chakra-ui/react';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box bg="primary.100" p={4}>
        <Heading as="h1" size="lg" color="text.100">
          CraveMaster
        </Heading>
      </Box>
    </motion.header>
  );
};

export default Header;
