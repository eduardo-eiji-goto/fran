# Fran Polydoro - Landing Page

O objetivo deste repositório/projeto é trazer uma proposta de Landing Page utilizando
apenas as tecnologias básicas de desenvolvimento Web (HTML, CSS e Javascript) com
publicação no Github Pages de forma gratuita.

O projeto foi desenvolvido seguindo a filosofia de tentar não se preparar para um
cenário que pode nunca acontecer.
Na área de desenvolvimento fala-se muito sobre *overengineering*, aumentar muito
a complexidade de um projeto que deveria ser simples.

Os prós e contras do formato de projeto proposto são:

- Prós
    1. Baixa complexidade de desenvolvimento e manutenção
    2. Publicação gratuita direto na plataforma onde está o código fonte
- Contras:
    1. Difícil inserção de demandas complexas

Caso haja a necessidade de implementar algo mais complexo, precisa-se discutir
se é necessário, ou recomendado, o refatoramento do projeto ou migração para
outra plataforma.
Os tópicos a seguir servem como exemplos de possíveis mudanças que me vêm à mente.

## Domínio

O **domínio** é o endereço/link/url que conecta até o seu projeto.
Caso seja interessante mudar o projeto para o endereço *meusite.com.br*,
deve-se registrar este domínio no provedor associado a ele.
No caso dos domínios .br o provedor seria a [Registro BR](https://registro.br/).

Isso pode ser interessante para dar uma cara mais oficial para o link.
ONGs utilizam .ong.br, entidades de ensino usam .edu.br.
Existe a possibilidade de usar .eng.br, por exemplo.

| Provedor   | Preço       |
| :--------- | ----------: |
| RegistroBR | R$40,00/ano |

Nota-se que a utilização de um domínio próprio exige a manutenção de
certificado SSL.
Este certificado é um comprovante de que sua página e legítima.

Se parecer interessante ter um endereço assim, devemos fazer uma pesquisa
de como facilitar/automatizar a renovação deste certificado.

## Frameworks e Componentes

Para páginas mais complexas, com interações mais complexas, é comum utilizar frameworks
ou bibliotecas que facilitem o desenvolvimento.
Pense por exemplo, uma plataforma tem uma tabela com itens com os quais você pode
interagir.
Você pode mudar os valores das colunas, filtrar e ordenar os itens, adicionar novos
registros ou deletar aqueles que não precisa mais.
Não é fácil implementar este tipo de elemento do zero.
Neste caso seria interessante "instalar" uma tabela desenvolvida por terceiros
no seu projeto.

Esse tipo de necessidade não tem custo monetário, apenas o custo de refatorar
o projeto e instalar estas frameworks ou componentes dentro dele.

Dependendo do que for instalado, pode ser preciso especificar quais tecnologias estão
presentes no website a quem for trabalhar nele no futuro.
Um desenvolvedor [React](https://react.dev/) pode ter dificuldades caso precise
desenvolver algo para um projeto construído com [Angular](https://angular.dev/).

## Provedores de Host Cloud

Além do Github Pages, também é possível utilizar outros provedores Cloud para ter
onde publicar a página.
Normalmente uma página estática como a proposta não gera custos, mas os provedores
a seguir vão exigir a configuração de um cartão de crédito para a sua conta/projeto.

Estes outros provedores podem disponibilizar ferramentas ou dashboards de análise
de tráfego ou outros recursos de administração que possam ser interessantes.

Sei que AWS e Azure oferecem serviços para facilitar a publicação direto do Github,
mas admito que acho essas plataformas um tanto mais difíceis de lidar.
Tanto pela falta de transparência quanto à preçagem dos serviços quanto por oferecem
tantos serviços semelhantes que fica difícil diferenciar-los.

| Provedor | Preço |
| :------- | ----: |
| Google   | N/A   |
| AWS      | N/A   |
| Azure    | N/A   |

## Wordpress

[WordPress](https://wordpress.org/) é uma entidade/instuição que oferece muitos
serviços que podem facilitar o desenvolvimento e publição de um website.
O objetivo é tornar o processo mais "drag and drop".
Eles oferecem templates, temas, plugins, etc.

O WordPress é uma opção que te possibilita montar um portal bem completo, com serviço
de pagamento, agendamento de calendário, emails, etc.
No momento não acho que seja tão interessante já que a ideia é experimentar e validar
se ter um website é viável, mas pode ser uma ideia interessante para o futuro.

Para desenvolvimento e publicação de uma página WordPress recomendo utilizar
[Hostinger](https://www.hostinger.com/br).
O custo da Hostinger é de **R$29,99 por mês**, podendo ser menor caso seja feita
uma assinatura por múltiplos meses ou anos.
