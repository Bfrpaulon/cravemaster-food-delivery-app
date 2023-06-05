import React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Image, Text, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const CartItem = ({ name, image, price, quantity, removeItem }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Flex align="center" borderWidth="1px" borderRadius="md" overflow="hidden">
        <Image src={image} alt={name} boxSize="100px" objectFit="cover" />
        <Box p={4} flex="1">
          <Text fontSize="lg" fontWeight="bold">
            {name}
          </Text>
          <Text color="text.200">R${price.toFixed(2)}</Text>
          <Flex justify="space-between" align="center" mt={2}>
            <Text>Quantidade: {quantity}</Text>
            <IconButton
              colorScheme="primary"
              variant="ghost"
              icon={<CloseIcon />}
              onClick={removeItem}
              aria-label="Remover item"
            />
          </Flex>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default CartItem;
