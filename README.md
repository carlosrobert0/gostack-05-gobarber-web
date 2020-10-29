# gostack-05-gobarber-web

<h3>Aplicacao GoBarber web com React e Typescript</h3>

<p>Na estrutura das paginas criamos a signIn a pagina de login,

O unform rocketseat para trabalhar com os dados do formulario sem ser da forma criando estado para cada item do formulario

Validamos e exibimos o tooltip de erros no formulario

Utilizamos a Context API para estado e propriedade dos componentes ser acessiveis por componentes fora daquele mesmo escopo

Criamos um hook useAuth para lidar com rotas autenticadas

Um hook useToast para mensagens de toast

Configuramos nossas rotas de acordo com nossa api construida no backend da aplicacao, também as rotas autenticadas

se user está autenticado e está em uma rota autenticada Ok, se não está autenticado e está em uma rota autenticada Retorna para rota '/' inicial


E após user for autenticado, logar na aplicacao, irá para a rota autenticada, dashboard. 
E de extra na pagina dashboard importei o component Button e o metodo signOut do hook de autenticacao, 
usei o Button e ao clicar o metodo signOut exclui o token e user do Storage e retorna para a página inicial de logon signIn
</p>

<i>Extra: Removemos o token e user do storage com o método signOut do hook useAuth e fazemos o logOut da aplicacao</i>

![gobarber](https://user-images.githubusercontent.com/45858897/89723423-53c1ff80-d9cc-11ea-97ec-78b23a2e50ec.gif)

<h3>Parte 2 e Finalização do front end web da aplicacao GoBarber</h3>
<ul>

      GoBarber com algumas alterações e inclusões:


    <li> Ajustes na API </li>

Foram feitos ajustes na API para comportar as novas funcionalidades do frontend


    <li> Recuperacao de senha </li>

Criamos a pagina de recuperacao de senha

o usuario informa seu email para recuperar a senha

Enviamos o formulario a API

Criamos a pagina de redefinicao da senha 

na qual o usuario informa a nova senha e é redirecionado para o SignIn para logar com sua nova senha


    <li> Dashboard </li>

Criamos a pagina de dashboard com Header

agendamento a seguir, listagem de agendamentos

calendario, verificando a disponibilidade do mes

buscamos os agendamentos da API e exibimos

em tela, separando por periodo da manha e tarde


    <li> Perfil do usuario </li>

Criamos a pagina de perfil do usuario

com opcao de trocar de avatar, e alteracao dos dados 
</ul>

![sr](https://user-images.githubusercontent.com/45858897/97576937-8416aa00-19cd-11eb-8ed2-4b923a3ff14a.gif)



