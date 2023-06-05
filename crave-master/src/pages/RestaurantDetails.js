import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import Header from '../components/Header';

const RestaurantDetails = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Box p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Nome do Restaurante
        </Heading>
        <Image src="restaurante.jpg" alt="Restaurante" mb={4} />
        <Text fontSize="lg" mb={4}>
          Descrição do restaurante e informações adicionais.
        </Text>
        <Heading as="h3" size="lg" mb={2}>
          Cardápio
        </Heading>
        <Text mb={4}>Listagem dos pratos disponíveis no restaurante:</Text>
        <Box borderWidth="1px" borderRadius="md" p={4}>
          <Text fontSize="lg">Nome do Prato 1</Text>
          <Text color="text.200">Descrição do Prato 1</Text>
          <Text color="text.200">Preço do Prato 1</Text>
        </Box>
        <Box borderWidth="1px" borderRadius="md" p={4} mt={4}>
          <Text fontSize="lg">Nome do Prato 2</Text>
          <Text color="text.200">Descrição do Prato 2</Text>
          <Text color="text.200">Preço do Prato 2</Text>
        </Box>
        {/* Adicione mais pratos conforme necessário */}
      </Box>
    </motion.div>
  );
};

export default RestaurantDetails;
