# Green Hills

First Mobile App - Green Hills

# Disciplina

AS35A - Programação Móvel (Universidade Tecnológica Federal do Paraná) 

# Especificações do Projeto

Crie um protótipo e um aplicativo para dispositivo móvel compatível com Android e/ou iOS usando React-native para controlar reservas de ambientes de um condomínio (ex.: salão de festas, churrasqueiras, academia, etc.) atendendo os seguintes requisitos:

1. Deverá possuir controle de login (cadastro e autenticação de usuários). Pode-se utilizar o módulo Firebase Authentication para realizar o cadastro/autenticação de usuários;
2. Deverá ter três tabelas no banco de dados: Ambiente (nome espaço, descrição, lotação_máxima), Reserva (data, id_login), Morador (id_login, nome_completo, apartamento). Caso necessário, mais atributos podem ser adicionados às tabelas.
3. Deverá contemplar dois tipos de usuários: administrador e morador.
  a. Usuário administrador: esse perfil deverá estar atribuído a um único login que poderá cadastrar, alterar, visualizar e excluir os ambientes do condomínio, e        poderá visualizar todas as reservas realizadas pelos moradores organizadas por ambiente;
  b. Usuário morador: esse perfil poderá realizar a reserva de um ambiente e, caso em tempo, realizar o cancelamento de uma reserva por ele realizada.
4. Caso necessário, faça o pré-cadastramento de dados que tenham relação com a regra de negócio proposta neste tipo de aplicação;
5. Faça a persistência de dados usando o Firebase considerando a regra de negócio da aplicação;
6. O aplicativo deve apresentar interfaces (telas) que possibilitem a inserção, visualização, edição e exclusão de ambientes do condomínio e a realização e            cancelamento de reservas dos ambientes;
7. Utilize caixa de diálogo (Alert) para confirmar a ação de exclusão de dados persistidos na base de dados;
8. Deve-se criar e utilizar no mínimo 3 (três) componentes de interface (ex.: cards, barras de navegação, etc.) com estilização;
9. A rolagem da lista de ambientes e reservas deve ser realizada utilizando carregamento dinâmico com FlastList;
10. Utilize barra de navegação como, por exemplo, drawer-navigation, BottomNavigation ou TabNavigation para que o usuário possa navegar entre as diferentes telas       da aplicação;
11. Utilize o REDUX para a centralização de estados da aplicação;
12. Aplicação de no mínimo 10 heurísticas de UX (ver vídeos 50 heurísticas de UX no Moodle);
13. Todos os nomes de variáveis, constantes, classes, métodos, atributos e comentários desenvolvidos pelo aluno devem utilizar termos em português (ex.:                 listarMoradores(), lotacaoMaxima, /*Esta classe determina...*/, etc.).

Deve-se utilizar:

• React-native / Expo (versão 0.60.0 ou superior);
• Android SDK 9 - API Level 28 - (Android Pie) ou superior;
• Google Firebase para persistência de dados;
• Redux para centralização de estados da aplicação.

Procedimentos avaliativos:

O projeto deve ser entregue compactado em formato .zip com o seguinte formato: “<nome_completo>.zip”, e entregue via Moodle na data/horário estabelecida. 
O arquivo .zip deve conter todas as pastas e arquivos do projeto, exceto o diretório “node_modules”. No caso do arquivo .zip ocupar mais que 10MB.
Não serão aceitos links de repositório de códigos como, por exemplo, GitHub.
O aluno deverá apresentar o projeto ao professor via vídeo-conferência da disciplina de acordo com a data/horário estabelecido no Planejamento da Disciplina e explicar o código implementado. 
O professor, por sua vez, irá realizar a arguição sobre quaisquer dúvidas sobre o projeto.
Caso o projeto seja parcialmente ou totalmente plagiado, será atribuída nota 0 ao projeto.
Para cada elemento da tabela de pontuação que o aluno não souber explicar a sua implementação com precisão, será atribuída nota 0.
Caso o código-fonte do item avaliativo não siga a especificação 13, será atribuída nota 0 ao item avaliativo.
