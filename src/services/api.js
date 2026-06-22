// Esqueleto de serviços para o funcionamento do Front-end
export const equipamentoService = {
  listar: async () => ({ data: [] }),
  criar: async (dados) => ({ data: dados }),
  atualizar: async (id, dados) => ({ data: dados }),
  excluir: async (id) => ({ data: true })
};

export const cidadeService = {
  listar: async () => ({ data: [] }),
  criar: async (dados) => ({ data: dados }),
  atualizar: async (id, dados) => ({ data: dados }),
  excluir: async (id) => ({ data: true })
};

export const funcionarioService = {
  listar: async () => ({ data: [] }),
  criar: async (dados) => ({ data: dados }),
  atualizar: async (id, dados) => ({ data: dados }),
  excluir: async (id) => ({ data: true })
};

export const servicoService = {
  listar: async () => ({ data: [] }),
  criar: async (dados) => ({ data: dados }),
  atualizar: async (id, dados) => ({ data: dados }),
  excluir: async (id) => ({ data: true })
};