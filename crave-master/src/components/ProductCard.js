import React from 'react';
import { motion } from 'framer-motion';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const ProductCard = ({ name, image, price, addToCart }) => {
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
          <Text color="text.200">R${price.toFixed(2)}</Text>
          <Button mt={4} colorScheme="primary" onClick={addToCart}>
            Adicionar ao carrinho
          </Button>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ProductCard;
