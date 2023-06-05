import React from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Header from '../components/Header';
import CartItem from '../components/CartItem';

const cartItems = [
  {
    id: 1,
    name: 'Nome do Prato 1',
    image: 'prato1.jpg',
    price: 12.99,
    quantity: 2,
  },
  {
    id: 2,
    name: 'Nome do Prato 2',
    image: 'prato2.jpg',
    price: 9.99,
    quantity: 1,
  },
  // Adicione mais objetos de itens do carrinho conforme necessário
];

const Cart = () => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId) => {
    // Lógica para remover o item do carrinho
    console.log(`Removendo item ${itemId} do carrinho`);
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
          Carrinho de Compras
        </Heading>
        {cartItems.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                removeItem={() => handleRemoveItem(item.id)}
              />
            ))}
            <Box mt={4}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Total: R${totalPrice.toFixed(2)}
              </Text>
              <Button colorScheme="primary">Finalizar Pedido</Button>
            </Box>
          </motion.div>
        ) : (
          <Text fontSize="lg">O carrinho está vazio.</Text>
        )}
      </Box>
    </motion.div>
  );
};

export default Cart;
