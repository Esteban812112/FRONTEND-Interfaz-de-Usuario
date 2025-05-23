// src/pages/QuotePage.jsx
import React, { useEffect, useState } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { submitQuote } from "../services/quoteService";
import { getCurrentUser } from "../services/authService"; // Importamos getCurrentUser
import "../styles/QuotePage.css";

const QuotePage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Obtener datos del usuario logueado
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        setLoggedInUser(user);
      } catch (error) {
        console.error("Error al obtener datos del usuario logueado:", error);
      }
    };

    fetchUser();
  }, []);

  const handleQuoteSubmit = async (formData) => {
    try {
      const response = await submitQuote(formData);
      alert(" El pedido se completo.");
    } catch (error) {
      alert("Hubo un error al enviar la solicitud de libro. Inténtalo de nuevo.");
      console.error(error);
    }
  };

  return (
    <div className="quote-page">
      <h1>Solicitud de libro </h1>
      <p>Por favor, llena el siguiente formulario para solicitar un Libro</p>
      <QuoteForm onSubmit={handleQuoteSubmit} loggedInUser={loggedInUser} />
    </div>
  );
};

export default QuotePage;
