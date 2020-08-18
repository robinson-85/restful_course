Existem 6 necessidades (contraints) para ser RESTFUL:

1° _client-server_ : Separação do cliente e do 
armazenamento de dados (servidor),dessa forma, 
poderemos ter uma portabilidade do nosso sistema,
usando o REACT para WEB e REACT NATIVE para o 
smatphone, por exemplo.

2° _stateless_ : cada requisição que o cliente faz
para o servidor, deverá conter todas as informações
necessárias para o servidor entender e responder
(RESPONSE) a requisição (REQUEST). Exemplo: A 
sessão do usuário deverá ser enviada em todas as
requisições, para saber se aquele usuário está 
autenticado e apto para usar os serviços, e o
servidor não pode lembrar que o cliente foi 
autenticado na requisição anterior. Podendo 
serem utilizados tokens como padrão para as 
comunicações, como exemplo.

3° _cacheable_ : as respostas para uma requisição,
deverão ser explicitas ao dizer se aquela requisição
pode ou não ser cacheada pelo cliente.

4° _layered_system_ : o cliente acessa a um endpoint,
sem precisar saber da complexidade, de quais passos
estão sendo necessários para o servidor responder
a requisição, ou quais outras camadas o servidor
estará lidando, para que a requisição seja respondida.

5° _code_on_demand_ (optional): dá a possibilidade
da nossa aplicação pegar códigos, como o javascript,
por exemplo, e executar no cliente.

6° _uniform_interface_ : é uma padronização das 
resources. Quando usamos o padrão . json como 
formato de escrita, você está seguindo o conceito de 
uniformicidade da interface. Precisamos nesse sentido, 
sempre mantemos nosso resource com informações suficientes
para quem vai consumí-lo. Assim, a utilização dos verbos
HTTP de forma coerente e correta traz informações clara 
e efetiva.

Lembrando que RESTFUL é a:

-aplicação dos padrões REST.

## Boas práticas.

-Utilizar verbos HTTP para nossas requisições;
-Utilizar plural ou singular na criação dos endpoint?
_NÃo IMPORTA! _use apenas um padrão;
-Não deixe barra no final do endpoint!

## Verbos HTTP

- GET: Receber dados de um Resource.
- POST: Enviar dados ou receber informações para serem processadas por um Resource.
- PUT: Atualizar dados de um Resource.
- DELETE: Deletar um Resource.

## STATUS DAS RESPOSTAS

1XX: informação
2xx: sucesso
    -200: ok
    -201: Created
    -204: Não tem conteúdo PUT POST DELETE
3xx: Redirection
4xx: Client Error
    -400: Bad Request
    -404: Not found!
-5xx: Server error
    -500: Internal Server Error