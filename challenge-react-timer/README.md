# ⏱️ React Timer - Cronômetro

Um cronômetro funcional desenvolvido em React com controles de play, pause e reset.

## ✨ Funcionalidades

- **Timer Funcional**: Cronômetro com precisão de segundos
- **Controles Intuitivos**: Botões play, pause e reset
- **Interface Responsiva**: Design adaptável para diferentes dispositivos
- **Componentes Modulares**: Estrutura organizada e reutilizável
- **Input Personalizado**: Possibilidade de definir tempo inicial

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca principal
- **JavaScript (ES6+)** - Linguagem de programação
- **CSS** - Estilização
- **Create React App** - Ferramenta de configuração

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── App.js              # Componente principal
│   ├── Header.js           # Cabeçalho da aplicação
│   └── Timer/
│       ├── Timer.js        # Componente principal do timer
│       ├── Display.js      # Exibição do tempo
│       ├── Button.js       # Botões de controle
│       └── InputTimer.js   # Input para definir tempo
├── lib/
│   └── Time.js            # Utilitários de tempo
├── index.js               # Ponto de entrada
└── index.css              # Estilos globais
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/challenges-front-end-react.git
   cd challenges-front-end-react/challenge-react-timer
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto:**
   ```bash
   npm start
   # ou
   yarn start
   ```

4. **Abra no navegador:**
   Acesse [http://localhost:3000](http://localhost:3000)

## 📱 Demonstração Online

🔗 **Link de Produção:** [https://timer-react-app.netlify.app](https://timer-react-app.netlify.app)

## 🎯 Funcionalidades Principais

### Componente Timer
- Gerencia o estado do cronômetro
- Controla play, pause e reset
- Atualiza o display em tempo real

### Componente Display
- Exibe o tempo formatado (MM:SS)
- Estilização responsiva
- Animações suaves

### Componente Button
- Botões de controle (Play/Pause, Reset)
- Estados visuais diferentes
- Feedback tátil

### Componente InputTimer
- Input para definir tempo inicial
- Validação de entrada
- Formatação automática

## 🔧 Scripts Disponíveis

### `npm start`
Executa o app em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Executa os testes em modo interativo.

### `npm run build`
Cria a build de produção na pasta `build`.

### `npm run eject`
**⚠️ Operação irreversível!**
Remove a dependência única de build do projeto.

## 📚 Aprendizados

Este projeto demonstra:
- **Estado React**: Gerenciamento de estado complexo
- **Event Handlers**: Manipulação de eventos
- **setInterval/clearInterval**: Controle de tempo
- **Componentes Filhos**: Comunicação entre componentes
- **Formatação de Tempo**: Conversão de segundos para MM:SS
- **CSS Flexbox**: Layout responsivo

## 🎮 Como Usar

1. **Definir Tempo**: Use o input para definir o tempo inicial
2. **Iniciar**: Clique em "Start" para começar a contagem
3. **Pausar**: Clique em "Pause" para pausar o timer
4. **Resetar**: Clique em "Reset" para zerar o cronômetro

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests
- Melhorar a documentação

## 📄 Licença

Este projeto está sob a licença MIT.

## 👨‍💻 Autor

**Wellington Silva**
- GitHub: [@wellingtonn96](https://github.com/wellingtonn96)

---

⭐ **Se este projeto foi útil, considere dar uma estrela!**
