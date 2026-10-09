# Gabriel Personal

Landing page responsiva para os serviços de personal presencial e consultoria
online do Gabriel Personal. O projeto usa React, vinext e Cloudflare Sites.

## Requisitos

- Node.js `>=22.13.0`

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Estrutura

- `app/page.tsx`: conteúdo e componentes da landing page.
- `app/globals.css`: estilos, responsividade e animações.
- `public/`: imagens e marcas carregadas pela interface.
- `worker/index.ts`: entrada do Cloudflare Worker.
- `.openai/hosting.json`: configuração de publicação do Sites.

## Comandos

- `npm run dev`: inicia o ambiente local.
- `npm run build`: gera e valida a versão de produção.
- `npm run lint`: verifica a qualidade do código.
