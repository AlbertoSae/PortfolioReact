import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

const LegalContent = ({ content }) => {
  const { i18n } = useTranslation();
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (content) {
      setLoading(true);
      // Obtenemos el idioma (es, en o ru)
      const lang = i18n.language.split('-')[0];
      
      // La ruta usa el valor de 'content' que viene del JSON
      const filePath = `/legal/${lang}_${content}.md`;

      fetch(filePath)
        .then((res) => {
          if (!res.ok) throw new Error('No encontrado');
          return res.text();
        })
        .then((text) => {
          const processedText = text
            .replace(/{{NAME}}/g, "Alberto Sáez Cañada")
            .replace(/{{EMAIL}}/g, "Alberto.saez.canada@gmail.com");

          setMarkdown(processedText);
          setLoading(false);
        })
        .catch(() => {
          setMarkdown("Error: Documento no disponible.");
          setLoading(false);
        });
    }
  }, [content, i18n.language]);

  if (loading) return <p>Cargando...</p>;

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default LegalContent;