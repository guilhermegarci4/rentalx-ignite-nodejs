# Versão do Docker
docker -v

# Buildar a Image manualmente
docker build -t docker_name .

# Executar o terminal do container
docker exec -it docker_name_or_id /bin/bash

# UP Container
docker-compose up -d 

# Eliminar o container
docker-compose down

# Visualizar os container && Visualizar os container inativos 
docker ps && docker ps -a

# Logs:
docker logs rentx

# Visualizar os logs:
docker logs rentx -f

# IP do Host do Docker
docker exec database_ignite cat /etc/hosts

# Excluir todos container inativos
docker rm $(docker ps --filter status=exited -q)

# Exemplo de jest

describe("Criar categoria", () => {
    
    it("Espero que 2 + 2 seja 4", () => {
        const soma = 2 + 2;
        const resultado = 4;

        expect(soma).toBe(resultado);
    });

    it("Espero que 2 + 2 não seja 5", () => {
        const soma = 2+2;
        const resultado = 5;

        expect(soma).not.toBe(resultado);
    })
})

# Exemplos 
**RF** => Requisitos Funcionais
- Funcionalidaes da aplicação
Ex. Usuário poderá cadastrar uma nova categoria

**RNF** => Requisitos Não Funcionais
- Requisitos que não estão ligado diretamente
Ex. Dados deve ser salvo no banco de dados Postgres

**RN** => Regra de negócio
- Regras por trás do requisitos
Ex. Não pode cadastrar usuário duplicado, email igual, tamanho de senha e etc..

# Aula 

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado com disponibilidade como disponivel.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação

**RF**
Deve ser possível cadastrar uma especificação para um carro
Deve ser possível listar todas as espeficiações
Deve ser possível listar todos os carros

**RN**
Não deve ser possível cadastrar uma espeificação para um carro não cadastrado.
Não deve ser possível cadastrar uma espeificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagem do carro

**RF**
Deve ser possível cadastrar a imagem do carro
Dever ser possível listar todos os carros

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O Usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RN**
O aluguel deve ter duração mínima de 24 horas
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.