# Leadster Landing Page

O projeto consiste na criação de uma landing page utilizando o framework NextJS, utilizando o material fornecido pelo designer para a elaboração da tela e a implementação das funcionalidades.

## Decisões e configuração

Para iniciar o projeto, utilize a versão mais recente (13) do NextJS. Essa versão possui funcionalidades e features interessantes para a melhor escalabilidade do projeto. Uma das features que mais chamam atenção inicialmente e a nova optimização das imagens. Para estilizar o projeto utilizamos o `styled-components`, apesar do NextJS em sua versão mais recente não dá um suporte muito adequado aos `server components`, consegui contornar isso utilizando os estilos apenas em `client` o que se tornou mais do que suficiente para a tarefa. Para centralizar os estilos utilizados, tentei criar ao máximo componentes reutilizáveis que fosse de uso comum no projeto, alinhando isso também com `@src/style/theme.ts` para fornecendo um acesso rápido aos estilos css, juntamente com o `@src/style/device.ts` auxiliando para o uso de `@media` no projeto fornecendo os principais `breakpoints points`. As bibliotecas utilizadas com o `styled-components`, são `AOS` e `framer-mmotion`, são ótimas para realizar efeitos de transição e animações com scroll. Por fim posso dizer que foi uma experiência ótima realizar esse projeto, ao aplicar meus conceitos nesse projeto eu fiz ajustes para melhorar o código e vendo novas maneiras para aprimorar mais o desenvolvimento com NextJS.

## Organização e Instruções de uso

Para organizar o projeto, utilizei algumas ideias de diferentes patterns para gerar uma estrutura de arquivos que fique simples e legível. Dessa maneira acredito que seja mais fácil a escalabilidade do projeto para adicionar novas features.

```
.
└── src/
    ├── app/
    │   ├── api/
    │   │   ├── acessData
    │   │   ├── leads
    │   │   └── og
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── favicon.ico
    │   ├── robots.txt
    │   └── sitemap.xml
    ├── components/
    │   ├── Banner/
    │   │   ├── Banner.style.ts
    │   │   └── index.ts
    │   └── ...
    ├── data/
    │   └── lead.json
    ├── helper/
    │   ├── interface/
    │   │   └── lead.ts
    │   └── ...
    ├── hook/
    │   └── getLeads/
    │       └── index.tsx
    ├── lib/
    │   ├── AOSRegistry.tsx
    │   └── StyledComponentsRegistry.tsx
    ├── module/
    │   └── Leadarea/
    │       ├── index.tsx
    │       └── Leadarea.style.ts
    └── style/
        ├── device.ts
        ├── globalStyle.ts
        └── theme.ts
```

Após clonar o repositório, instale as dependências:

`yarn`

Rode o projeto:

`yarn dev`
