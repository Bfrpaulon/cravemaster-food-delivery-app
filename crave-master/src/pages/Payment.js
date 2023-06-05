import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Heading, Text, Button, Alert, AlertIcon } from '@chakra-ui/react';
import Header from '../components/Header';

const Payment = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [paymentError, setPaymentError] = useState(false);

  const handlePayment = () => {
    // Simulação de pagamento
    const paymentSuccess = Math.random() < 0.5; // 50% de chance de sucesso

    if (paymentSuccess) {
      setShowAlert(true);
      setPaymentError(false);
    } else {
      setShowAlert(true);
      setPaymentError(true);
    }
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
          Pagamento
        </Heading>
        <Text fontSize="lg" mb={4}>
          Insira as informações de pagamento abaixo:
        </Text>
        <Box borderWidth="1px" borderRadius="md" p={4}>
          {/* Formulário de pagamento (placeholder) */}
          <form>
            <input type="text" placeholder="Número do cartão" />
            <input type="text" placeholder="Nome do titular do cartão" />
            <input type="text" placeholder="Data de validade" />
            <input type="text" placeholder="CVV" />
          </form>
        </Box>
        <Box mt={4}>
          <Button colorScheme="primary" onClick={handlePayment}>
            Pagar
          </Button>
        </Box>
        {showAlert && (
          <Alert status={paymentError ? 'error' : 'success'} mt={4}>
            <AlertIcon />
            {paymentError ? 'Erro ao processar o pagamento.' : 'Pagamento realizado com sucesso!'}
          </Alert>
        )}
      </Box>
    </motion.div>
  );
};

export default Payment;
