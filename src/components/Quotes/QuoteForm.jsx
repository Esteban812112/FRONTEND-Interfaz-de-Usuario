import React, { useState, useEffect } from "react";
import "../../styles/QuoteForm.css";

const QuoteForm = ({ onSubmit, loggedInUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cellphone: "",
    requirement: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (loggedInUser) {
      setFormData((prev) => ({
        ...prev,
        name: loggedInUser.name || "",
        email: loggedInUser.email || "",
      }));
    }
  }, [loggedInUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.requirement.trim()) {
      setErrorMessage("Por favor describe tu requerimiento.");
      return;
    }

    const quoteData = {
      details: formData.requirement, // Mapeo correcto
      cellphone: formData.cellphone,
    };

    try {
      await onSubmit(quoteData); // Llama al servicio externo
      setSuccessMessage("Solicitud enviada correctamente ✅");
      setFormData({
        name: loggedInUser ? loggedInUser.name : "",
        email: loggedInUser ? loggedInUser.email : "",
        cellphone: "",
        requirement: "",
      });
    } catch (error) {
      setErrorMessage("Error al enviar la solicitud. Intenta nuevamente.");
      console.error(error);
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      {!loggedInUser && (
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="cellphone">Teléfono</label>
        <input
          type="tel"
          id="cellphone"
          name="cellphone"
          value={formData.cellphone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="requirement">Requerimiento</label>
        <textarea
          id="requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">
        Enviar
      </button>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default QuoteForm;
