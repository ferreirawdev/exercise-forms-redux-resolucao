import { SAVE_FORM } from '../actions/action';

const INITIAL_STATE = {
  information: {
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    cidade: '',
    estado: '',
    profissional: {
      curriculo: '',
      cargo: '',
      descricao: '',
    },
  },
};

const formsReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
  case SAVE_FORM:
    return {
      ...state,
      information: { ...state.information, ...action.info },
      outraCoisa: {},
    };
  default:
    return state;
  }
};

export default formsReducer;
