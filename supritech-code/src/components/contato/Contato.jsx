import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contato.css";

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init("lbDfNnWNAdisd9BU4");

    const templateParams = {
      from_name: nome,
      from_email: email,
      subject: assunto,
      message: mensagem,
    };

    emailjs.send("service_0kniszv", "template_0uy5f6n", templateParams)
      .then(function (response) {
        alert("E-mail enviado com sucesso!");

        setNome('');
        setEmail('');
        setAssunto('');
        setMensagem('');
      }, function (error) {
        alert("Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.");
        console.log("Erro:", error);
      });
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Contato</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Entre em contato conosco!</h3>
          <p className="contact__details">Não gosta de formulários? <br /> Envie-nos um e-mail.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder='Insira seu nome'
                value={nome}
                required
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder='Insira seu email'
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder='Insira o assunto'
              value={assunto}
              required
              onChange={(e) => setAssunto(e.target.value)}
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className='contact__form-input'
              placeholder='Escreva sua mensagem'
              value={mensagem}
              required
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className='btn'>Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
