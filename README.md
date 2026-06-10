# QA Website Analysis - Playwright

## 📌 Objetivo

Este projeto tem como objetivo realizar uma análise exploratória e automação de testes em um site institucional, focando nos fluxos mais críticos e na aplicação de boas práticas de QA.

---

## 🧠 Abordagem

Devido ao tempo limitado, foi adotada uma estratégia de testes focada em **valor de negócio e risco**, priorizando:

- Fluxos críticos (formulário de contato)
- Navegação essencial
- Validação de elementos chave da interface

A abordagem buscou equilíbrio entre qualidade, clareza de código e estabilidade dos testes.

---

## 🧪 Escopo de Testes

### ✅ Fluxos automatizados

- Abertura do formulário de contato via header
- Validação de carregamento da página inicial
- Preenchimento completo do formulário (sem envio)
- Validação de visibilidade e interação dos campos

### 🔍 Testes exploratórios

Os testes exploratórios foram realizados de forma **manual**, com foco em:

- Responsividade  
- Navegação  
- Usabilidade  
- Possíveis inconsistências de UI  

---

## 🧠 Abordagem de Testes

Os cenários de teste foram inicialmente estruturados utilizando **Gherkin**, com apoio de IA para geração inicial.

- A IA foi utilizada para sugerir cenários e ampliar cobertura  
- Todos os cenários foram **revisados e ajustados manualmente**  
- A versão final foi refinada com base na análise crítica do QA  

---

## 🏗️ Arquitetura

O projeto foi estruturado utilizando **Page Object Model (POM)** para garantir:

- Separação de responsabilidades  
- Reutilização de código  
- Manutenibilidade  

### 📁 Estrutura

```
pages/        → páginas do sistema
components/   → componentes reutilizáveis (Header, ContactForm)
tests/        → cenários de teste
fixtures/     → setup e injeção de dependências
utils/        → funções auxiliares
```

---

## 🧩 Decisões técnicas

- Uso de **Playwright** para automação E2E  
- Separação entre **pages** e **components**  
- Uso de **fixtures** para injeção de Page Objects  
- Não envio do formulário por se tratar de ambiente real  

---

## 🎯 Estratégia de Locators

Durante a implementação foi identificado que o formulário utiliza **Marketo (renderização dinâmica)**.

Por isso:

- Evitado o uso de `getByLabel` em campos críticos
- Preferência por atributos como `name` e `role`
- Redução de dependência de texto estático
- Aumento da estabilidade dos testes

---

## 🌍 Tratamento de idioma

O site realiza redirecionamento automático de idioma com base em região.

Para garantir estabilidade dos testes:

- Utilização da rota `/pt-br`
- Evitada dependência de conteúdo dinâmico de idioma
- Foco em consistência dos locators

---

## 🤖 Uso de IA

IA foi utilizada como apoio para:

- Geração inicial de cenários de teste (incluindo Gherkin)
- Estruturação de Page Objects
- Sugestões de automação

Importante:

> A IA foi utilizada como ferramenta de apoio. Todo o conteúdo foi validado, ajustado e refinado manualmente, mantendo controle sobre a qualidade e aderência ao contexto do sistema.

---

## 🚀 Como executar

```bash
npm install
npx playwright test
```

---

## 🚧 Melhorias futuras

Caso o projeto evolua, os próximos passos planejados incluem:

- 📈 Expansão da cobertura de testes:
  - Inclusão de novos fluxos críticos do site (ex: navegação completa, busca, links estratégicos)
  
- 🧪 Aumento da robustez dos testes:
  - Utilização de atributos específicos como `data-testid` para tornar os locators mais estáveis e menos dependentes de layout ou texto

- 🔄 Testes mais dinâmicos:
  - Uso da biblioteca **Faker** para geração de dados dinâmicos (emails, nomes, empresas), garantindo maior diversidade nos testes e evitando dados estáticos

- 🌐 Cobertura adicional:
  - Testes específicos para troca de idioma
  - Testes de responsividade em diferentes dispositivos

- ⚡ Melhoria de organização:
  - Refinamento das fixtures conforme aumento da escala do projeto
  - Possível separação por fluxo (ex: contact/, navigation/)

- 🤖 Uso contínuo de IA:
  - Continuidade no uso de IA como apoio na geração de cenários
  - Refinamento manual para garantir qualidade e aderência ao contexto

---

## ✅ Considerações finais

Este projeto foi desenvolvido com foco em:

- Qualidade ao invés de quantidade de testes
- Código limpo e organizado
- Boas práticas de automação
- Uso estratégico de ferramentas (incluindo IA)

