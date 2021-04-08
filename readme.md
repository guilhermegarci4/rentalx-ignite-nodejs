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