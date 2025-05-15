import React, { useState, useEffect } from "react";
import {
  fetchQuotes,
  submitQuote,
  updateQuote,
  deleteQuote,
} from "../../services/quoteService";
import { getProjects } from "../../services/projectService";
import "../../styles/QuoteManagement.css";

const QuoteManagement = () => {
  const [quotes, setQuotes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newQuote, setNewQuote] = useState({
    serviceId: "",
    details: "",
    estimatedPrice: "",
    status: "Pendiente",
  });
  const [editingQuote, setEditingQuote] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchData = async () => {
    try {
      setLoading(true);
      const [quotesData, projectsData] = await Promise.all([
        fetchQuotes(),
        getProjects(),
      ]);
      setQuotes(quotesData || []);
      setProjects(projectsData || []);
    } catch (error) {
      console.error("Error al cargar datos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreate = async () => {
    if (!newQuote.serviceId || !newQuote.details.trim()) {
      setMessage("Por favor completa los campos obligatorios.");
      return;
    }

    try {
      await submitQuote(newQuote);
      setNewQuote({
        serviceId: "",
        details: "",
        estimatedPrice: "",
        status: "Pendiente",
      });
      setMessage("Cotización creada exitosamente ✅");
      fetchData();
    } catch (error) {
      console.error("Error al crear la cotización:", error);
      setMessage("Ocurrió un error al enviar la cotización.");
    }
  };

  const handleUpdate = async () => {
    try {
      await updateQuote(editingQuote._id, editingQuote);
      setEditingQuote(null);
      setMessage("Cotización actualizada correctamente ✅");
      fetchData();
    } catch (error) {
      console.error("Error al actualizar la cotización:", error);
      setMessage("Ocurrió un error al actualizar la cotización.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteQuote(id);
      setMessage("Cotización eliminada correctamente.");
      fetchData();
    } catch (error) {
      console.error("Error al eliminar la cotización:", error);
      setMessage("Ocurrió un error al eliminar la cotización.");
    }
  };

  return (
    <div className="quote-management">
      <h3>Gestión de Cotizaciones</h3>

      <div className="quote-container">
        <div className="quote-form">
          <h4>Agregar Nueva Cotización</h4>

          <select
            value={newQuote.serviceId}
            onChange={(e) =>
              setNewQuote({ ...newQuote, serviceId: e.target.value })
            }
          >
            <option value="" disabled>
              Selecciona un servicio
            </option>
            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.type}
              </option>
            ))}
          </select>

          <textarea
            placeholder="Detalles"
            value={newQuote.details}
            onChange={(e) =>
              setNewQuote({ ...newQuote, details: e.target.value })
            }
          ></textarea>

          <input
            type="number"
            placeholder="Precio estimado"
            value={newQuote.estimatedPrice}
            onChange={(e) =>
              setNewQuote({ ...newQuote, estimatedPrice: e.target.value })
            }
          />

          <select
            value={newQuote.status}
            onChange={(e) =>
              setNewQuote({ ...newQuote, status: e.target.value })
            }
          >
            <option value="Pendiente">Pendiente</option>
            <option value="Aprobada">Aprobada</option>
            <option value="Rechazada">Rechazada</option>
          </select>

          <button
            className="primary"
            onClick={handleCreate}
            disabled={!newQuote.serviceId || !newQuote.details.trim()}
          >
            Crear Cotización
          </button>

          {message && <p className="form-message">{message}</p>}
        </div>

        <div className="quote-list">
          {loading ? (
            <p>Cargando cotizaciones...</p>
          ) : quotes.length > 0 ? (
            <ul>
              {quotes.map((quote) => (
                <li className="quote-item" key={quote._id}>
                  {editingQuote?._id === quote._id ? (
                    <div>
                      <select
                        value={editingQuote.serviceId}
                        onChange={(e) =>
                          setEditingQuote({
                            ...editingQuote,
                            serviceId: e.target.value,
                          })
                        }
                      >
                        <option value="" disabled>
                          Selecciona un servicio
                        </option>
                        {projects.map((project) => (
                          <option key={project._id} value={project._id}>
                            {project.type}
                          </option>
                        ))}
                      </select>

                      <textarea
                        value={editingQuote.details}
                        onChange={(e) =>
                          setEditingQuote({
                            ...editingQuote,
                            details: e.target.value,
                          })
                        }
                      ></textarea>

                      <input
                        type="number"
                        value={editingQuote.estimatedPrice}
                        onChange={(e) =>
                          setEditingQuote({
                            ...editingQuote,
                            estimatedPrice: e.target.value,
                          })
                        }
                      />

                      <select
                        value={editingQuote.status}
                        onChange={(e) =>
                          setEditingQuote({
                            ...editingQuote,
                            status: e.target.value,
                          })
                        }
                      >
                        <option value="Pendiente">Pendiente</option>
                        <option value="Aprobada">Aprobada</option>
                        <option value="Rechazada">Rechazada</option>
                      </select>

                      <button className="secondary" onClick={handleUpdate}>
                        Guardar
                      </button>
                      <button
                        className="secondary"
                        onClick={() => setEditingQuote(null)}
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <div>
                      <span>
                        {quote.serviceId?.type || "Servicio no definido"} -{" "}
                        {quote.details} - ${quote.estimatedPrice} -{" "}
                        {quote.status}
                      </span>
                      <button
                        className="secondary"
                        onClick={() => setEditingQuote(quote)}
                      >
                        Editar
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(quote._id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay cotizaciones disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteManagement;
