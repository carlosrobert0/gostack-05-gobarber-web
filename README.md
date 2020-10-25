# gostack-05-gobarber-web

Aplicacao GoBarber web com React e Typescript

Na estrutura das paginas criamos a signIn a pagina de login,

O unform rocketseat, biblioteca da rocketseat para trabalhar com os dados do formulario sem ser da forma criando estado para cada item do formulario

Validamos e exibimos o tooltip de erros no formulario

Utilizamos a Context API para estado e propriedade dos componentes ser acessiveis por componentes fora daquele mesmo escopo

Criamos um hook useAuth para lidar com rotas autenticadas

Um hook useToast para mensagens de toast

Rotas autenticadas, 

Configuramos nossas rotas de acordo com nossa api construida no backend da aplicacao, também as rotas autenticadas

se user está autenticado e está em uma rota autenticada Ok, se não está autenticado e está em uma rota autenticada Retorna para rota '/' inicial


E após user for autenticado, logar na aplicacao, irá para a rota autenticada, dashboard. E de extra na pagina dashboard importei o component Button e o metodo signOut do hook de autenticacao, usei o Button e ao clicar o metodo signOut exclui o token e user do Storage e retorna para a página inicial de logon signIn


Extra: Removemos o token e user do storage com o método signOut do hook useAuth e fazemos o logOut da aplicacao

![gobarber](https://user-images.githubusercontent.com/45858897/89723423-53c1ff80-d9cc-11ea-97ec-78b23a2e50ec.gif)
