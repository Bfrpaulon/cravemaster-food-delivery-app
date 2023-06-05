import React from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Text } from '@chakra-ui/react';

const RestaurantCard = ({ name, image, cuisine }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Box borderWidth="1px" borderRadius="md" overflow="hidden">
        <Image src={image} alt={name} />
        <Box p={4}>
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Text color="text.200">{cuisine}</Text>
        </Box>
      </Box>
    </motion.div>
  );
};

export default RestaurantCard;
