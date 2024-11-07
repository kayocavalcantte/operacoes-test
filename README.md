# Operações test

Este repositório contém uma coleção de algoritmos fundamentais implementados em JavaScript. Cada algoritmo realiza uma tarefa específica, como calcular o MDC, verificar se um número é primo, ordenar um vetor, trocar valores de variáveis, entre outros. Além disso, foram implementados testes automatizados para garantir o correto funcionamento de cada função.

## Algoritmos Implementados

Os algoritmos incluídos neste repositório são:

1. **Contagem** - Calcula quantos alunos fex uma prova e se foram aprovados.
2. **Fibonacci** - Gera uma sequência de Fibonacci até o número especificado.
3. **MDC** - Calcula o Máximo Divisor Comum entre dois números.
4. **Número Primo** - Verifica se um número é primo.
5. **Ordenação de Vetor** - Ordena um vetor de números em ordem crescente.
6. **Soma de Números** - Calcula a soma de uma lista de números fornecidos pelo usuário.
7. **Troca de Valores** - Troca os valores entre duas variáveis.

Cada função está em seu próprio arquivo na pasta `funcoes`, e os testes estão localizados na pasta `tests`.

## Estrutura do Repositório

- `functions/` - Contém os arquivos de código para cada função.
- `tests/` - Contém os arquivos de teste para cada função.
- `README.md` - Instruções de uso e informações sobre o projeto.
- `package.json` - Configuração do projeto e dependências.

## Como Executar o Código

### Pré-requisitos

Certifique-se de que o [Node.js](https://nodejs.org/) e o gerenciador de pacotes [npm](https://www.npmjs.com/) estão instalados em sua máquina.

### Passo a Passo

1. Clone o repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```

2. Acesse a pasta do projeto:
    ```bash
    cd projeto-algoritmos-js
    ```

3. Instale as dependências (como o Jest para testes):
    ```bash
    npm install
    ```

4. Para executar um código específico, você pode usar o comando `node` seguido do caminho para o arquivo. Por exemplo:
    ```bash
    node functions/fibonacci.js
    ```

## Package.json
O modelo de como deve ficar seu package.json

```JSON
{
  "name": "entregaemjs01-main",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.7.0"
  }
}

```
## Como Executar os Testes

Os testes foram escritos utilizando o framework [Jest](https://jestjs.io/), que facilita a verificação do funcionamento de cada função.

1. Instale o Jest (caso ainda não tenha feito isso):
    ```bash
    npm install jest --save-dev
    ```

2. Execute todos os testes com o comando:
    ```bash
    npx jest
    ```

3. Você verá um resumo dos resultados dos testes no terminal.

### Estrutura dos Testes

Cada teste verifica casos específicos para garantir que a função funcione como esperado. Aqui estão alguns exemplos gerais de testes para as funções:

- **Contagem**: Testa se a função contabiliza corretamente o número de alunos aprovados com base em um array de notas.
- **Fibonacci**: Verifica se a função gera a sequência correta para os primeiros `n` números.
- **MDC**: Testa diferentes pares de números para garantir que o MDC calculado está correto.
- **Número Primo**: Verifica se a função identifica corretamente números primos e não primos.
- **Ordenação de Vetor**: Confirma que a função ordena corretamente uma lista de números.
- **Soma de Números**: Testa a função para somar diferentes listas de números.
- **Troca de Valores**: Verifica se a função troca corretamente dois valores.

### Exemplo de Teste para Fibonacci

```javascript
const fibonacci = require('../funcoes/fibonacci');

test('Os 10 primeiros números da sequência de Fibonacci', () => {
    expect(fibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('Os 2 primeiros números da sequência de Fibonacci', () => {
    expect(fibonacci(2)).toEqual([0, 1]);
});
```

## Exemplo de Saída dos Testes

### Comando para rodar os testes

```npm
npm test
```

Após rodar os testes, você verá uma saída semelhante a esta:

```
 PASS  ./tests/fibonacci.test.js
 PASS  ./tests/mdc.test.js
 PASS  ./tests/numeroPrimo.test.js
 PASS  ./tests/ordenacaoVetor.test.js
 PASS  ./tests/somaNumeros.test.js
 PASS  ./tests/trocaValores.test.js

Test Suites: 6 passed, 6 total
Tests:       12 passed, 12 total
```
