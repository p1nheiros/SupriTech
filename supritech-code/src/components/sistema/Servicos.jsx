import React from 'react'
import "./servicos.css"

const data = [
  {
    id: 1,
    title: "Gestão de Suprimentos",
    description:
      "Cadastro prévio de insumos hospitalares e estabelecimento de margem de segurança quantificada (definida pelo gestor).",
  },
  {
    id: 2,
    title: "Controle de Estoque",
    description:
      "Sistema inteligente automatizado que alerta os gestores sobre período de validade, escassez de estoque e orienta em futuros processos de compra de suprimentos."
  },
  {
    id: 3,
    title: "Fluxo de Insumos",
    description:
      "Monitoramento da entrada e saída dos materiais hospitalares em tempo real e emissão de relatório semanal.",
  },
];

const Servicos = () => {
  return (
    <section className="services container section" id='services'>
      <h2 className="section__title">Sistema SupriTech</h2>

      <div className="services__container grid">
        {data.map(({ id, title, description }) => {
          return (
            <div className="services__card" key={id}>

              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  )
}

export default Servicos