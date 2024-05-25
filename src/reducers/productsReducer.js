const initialState = []; // Estado inicial para productos

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Manejar acciones relacionadas con productos aquí
    default:
      return state;
  }
};

export default productsReducer;