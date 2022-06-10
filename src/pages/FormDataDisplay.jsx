import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { info } = this.props;
    console.log(info);
    const { nome, email, cpf, endereco, cidade, estado, profissional } = info;
    const { curriculo, cargo, descricao } = profissional;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  info: state.information,
});

FormDataDisplay.propTypes = {
  info: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    profissional: PropTypes.shape({
      curriculo: PropTypes.string.isRequired,
      cargo: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);
