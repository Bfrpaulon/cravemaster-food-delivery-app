import React from 'react';
import { motion } from 'framer-motion';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box bg="primary.100" p={4}>
        <Text color="text.100">© 2023 CraveMaster. Todos os direitos reservados.</Text>
      </Box>
    </motion.footer>
  );
};

export default Footer;
