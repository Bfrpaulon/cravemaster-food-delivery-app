import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text, Progress } from '@chakra-ui/react';
import Header from '../components/Header';

const OrderTracking = () => {
  const progressValue = 50; // Valor de progresso atual (0-100)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Box p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Rastreamento do Pedido
        </Heading>
        <Text fontSize="lg" mb={4}>
          Seu pedido está em andamento.
        </Text>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Status do Pedido:
          </Text>
          <Text>Status atual do pedido</Text>
        </Box>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Progresso do Pedido:
          </Text>
          <Progress value={progressValue} colorScheme="primary" />
        </Box>
      </Box>
    </motion.div>
  );
};

export default OrderTracking;
