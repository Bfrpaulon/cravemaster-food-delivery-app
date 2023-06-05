import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text } from '@chakra-ui/react';
import Header from '../components/Header';

const UserProfile = () => {
  const user = {
    name: 'Nome do Usuário',
    email: 'usuario@example.com',
    address: 'Endereço do Usuário',
    phone: '123-456-7890',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Box p={4}>
        <Heading as="h2" size="xl" mb={4}>
          Perfil do Usuário
        </Heading>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Nome:
          </Text>
          <Text>{user.name}</Text>
        </Box>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Email:
          </Text>
          <Text>{user.email}</Text>
        </Box>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Endereço:
          </Text>
          <Text>{user.address}</Text>
        </Box>
        <Box mb={4}>
          <Text fontSize="lg" fontWeight="bold">
            Telefone:
          </Text>
          <Text>{user.phone}</Text>
        </Box>
      </Box>
    </motion.div>
  );
};

export default UserProfile;
