// Variáveis globais
        let Hotel
        let user

        function inicio(){

            Hotel = prompt("digite o nome do hotel: ")
            alert("O nome do hotel é " + Hotel)

            user = prompt("Digite seu user: ")
            let senha = prompt("Digite sua senha: ")

            if(senha == '2678'){//Valida se a senha esta correta
                alert("Bem vindo ao Hotel " + Hotel + " " + user + ". É um imenso prazer ter você por aqui!")
            }else{
                alert("Senha incorreta. Acesso negado.")
                return
            }

                // Menu de opções
            var opcao = prompt(
                'Escolha uma opção:\n' +
                '1. Cadastrar Hospedes\n' +
                '2. Fazer reserva\n' +
                '3. Verificar reservas\n' +
                '4. Gerenciar Hospedes\n' +
                '5. Eventos\n'+
                '6. Buffet\n'+
                '7. Verificar auditorio\n'+
                '8. Verificar disponibilidade do restaurante\n'+
                '9. Abastecer o Carro\n'+
                '10. Ar Condicionado\n' +
                '11. Sair do sistema'
            )

            // Escolha/caso (switch/case) para cada opção
            switch (opcao) {
                case '1':
                    cadastrarHospedes();
                    break;
                case '2':
                    fazerReserva();
                    break;
                case '3':
                    verificarReservas();
                    break;
                case '4':
                    gerenciarHospedes();
                    break;
                case '5':
                    calcularCustoGarcons();
                    break;
                case '6':
                    calcularCustoBuffet();
                    break;                    
                case '7':
                    verificarAuditório();
                    break;
                case '8':
                    reservarRestaurante();
                    break;
                case '9':
                    abastecerCarro()
                    break
                case '10':
                    arCondicionado();
                    break;
                case '11':
                    sairSistema();
                    break;
                default:
                    erro();
            }
        }
        // Função para verificar disponibilidade de quartos
        function cadastrarHospedes() {
            alert('Cadastrando Hospedes...');
            // Implemente a lógica para verificar a disponibilidade de quartos aqui

            let valorDiaria = parseFloat(prompt('Qual o valor padrão da diária?'));
    
            if (isNaN(valorDiaria) || valorDiaria <= 0) {
                alert('Valor Inválido. Por favor, insira um valor válido para a diária.');
                cadastrarHospedes(); // Retorna ao menu inicial
                return; // Encerra a função aqui para evitar a execução das próximas etapas
            }
        
            let gratuidades = 0;
            let meias = 0;
            let total = 0;
        
            while (true) {
                let nomeHospede = prompt('Qual o nome do Hóspede? (Digite "PARE" para encerrar)')
                if (nomeHospede.toUpperCase() === 'PARE') {
                    break
                }
        
                let idadeHospede = parseInt(prompt('Qual a idade do Hóspede?'))
                if (isNaN(idadeHospede) || idadeHospede <= 0) {
                    alert('Idade Inválida. Por favor, insira uma idade válida.')
                    continue
                }
        
                if (idadeHospede < 6) {
                    alert(nomeHospede + ' possui gratuidade')
                    gratuidades++
                } else if (idadeHospede > 60) {
                    alert(nomeHospede + ' paga meia')
                    meias++
                    total += valorDiaria / 2;
                } else {
                    alert(nomeHospede + ' cadastrado(a) com sucesso.')
                    total += valorDiaria
                }
                alert(nomeUsuario + ', o valor total das hospedagens é: R$' + total.toFixed(2) + '; ' + gratuidades + ' gratuidade(s); ' + meias + ' meia(s)')
            }
            inicio()   
        }
        // Função para gerenciar hospedes
        function gerenciarHospedes() {
            var hospedes = []; // Array para armazenar os hóspedes
            var maximoCadastros = 15; // Limite máximo de cadastros
        
            while (true) {
                var opcao = parseInt(prompt('Selecione uma opção:\n1. Cadastrar\n2. Pesquisar\n3. Sair'));
        
                switch (opcao) {
                    case 1:
                        if (hospedes.length >= maximoCadastros) {
                            alert('Máximo de cadastros atingido.');
                        } else {
                            var nomeHospede = prompt('Qual o nome do Hóspede?');
                            hospedes.push(nomeHospede);
                            alert('Hóspede ' + nomeHospede + ' foi cadastrado(a) com sucesso!');
                        }
                        break;
                    case 2:
                        var nomePesquisa = prompt('Qual o nome do Hóspede que deseja pesquisar?');
                        if (hospedes.includes(nomePesquisa)) {
                            alert('Hóspede ' + nomePesquisa + ' foi encontrado(a)!');
                        } else {
                            alert('Hóspede ' + nomePesquisa + ' não foi encontrado(a)!');
                        }
                        break;
                    case 3:
                        return
                    default:
                        alert('Opção inválida. Por favor, selecione uma opção válida.');
                }
            }
        }

        // Função para fazer reserva
        function fazerReserva() {
            alert('Fazendo reserva...');

            // Implemente a lógica para fazer a reserva aqui
            let diaria = parseFloat(prompt("Qual o valor padrão da diária?"))
            let qtd_dias = parseInt(prompt("Quantas diárias serão necessárias?"))

            if (isNaN(diaria) || diaria < 0 || qtd_dias < 0 || qtd_dias > 30){
                alert("Valor Inválido")
                inicio()
                return
            }
            
            let valorDiaria = diaria * qtd_dias
            
            let hospede = prompt('Digite o nome do hóspede:')
            let confirmacao = confirm('Confirma a reserva?\nValor da diária: R$' + valorDiaria.toFixed(2) + '\nNome do hóspede: ' + hospede)

           if (!confirmacao) { // verifica se a variável confirmacao é falsa
                alert('Reserva cancelada. Voltando ao menu inicial.');
                inicio(); // Retorna ao menu inicial
                return; // Encerra a função aqui
            }

            alert('Reserva confirmada! Detalhes:\nValor da diária: R$' + valorDiaria.toFixed(2) +'\nNome do hóspede: ' + hospede)

            // Ao finalizar, retorne ao menu inicial
            inicio();
    }

        // Função para verificar reservas
        function verificarReservas() {
            alert('Verificando suas reservas...');
            // Implemente a lógica para verificar as reservas do usuário aqui

            // Ao finalizar, retorne ao menu inicial
            inicio();
        }
        function calcularCustoGarcons() {
            let custoPorHoraGarcom = 10.5;
            
            let duracaoEvento = parseInt(prompt('Qual a duração do evento em horas?'));
            let numGarcons = parseInt(prompt('Quantos garçons serão necessários?'));
        
            let custoTotal = custoPorHoraGarcom * duracaoEvento * numGarcons;
            alert('Custo total: R$ ' + custoTotal.toFixed(2));
        
            let confirmacao = prompt('Gostaria de efetuar a reserva? S/N');
            
            if (confirmacao) {
                alert('Reserva efetuada com sucesso.');
            } else {
                alert('Reserva não efetuada.');
            }
        }
        function calcularCustoBuffet() {
            let capacidadeMaxima = 350; // Capacidade máxima de convidados
            let precoCafeLitro = 0.8; // Preço por litro de café
            let precoAguaLitro = 0.4; // Preço por litro de água
            let precoSalgadosCento = 34; // Preço por cento de salgados
            let cafePorConvidado = 0.2; // Litros de café por convidado
            let aguaPorConvidado = 0.5; // Litros de água por convidado
            let salgadosPorConvidado = 7; // Salgados por convidado
        
            let numConvidados = parseInt(prompt('Qual o número de convidados para o evento?'));
        
            if (numConvidados > capacidadeMaxima) {
                alert('Quantidade de convidados superior à capacidade máxima.');
                inicio()
                return;
            }
        
            let cafeTotal = cafePorConvidado * numConvidados;
            let aguaTotal = aguaPorConvidado * numConvidados;
            let salgadosTotal = salgadosPorConvidado * numConvidados;
        
            let custoCafe = cafeTotal * precoCafeLitro;
            let custoAgua = aguaTotal * precoAguaLitro;
            let custoSalgados = (salgadosTotal / 100) * precoSalgadosCento;
        
            let custoTotal = custoCafe + custoAgua + custoSalgados;
        
            alert('O evento precisará de ' + cafeTotal.toFixed(1) + ' litros de café, ' + aguaTotal.toFixed(1) + ' litros de água, ' + salgadosTotal + ' salgados. O custo total do evento será de R$ ' + custoTotal.toFixed(2));
        
            let confirmacao = prompt('Gostaria de efetuar a reserva? S/N');
        
            if (confirmacao.toUpperCase() === 'S') {
                alert('Reserva efetuada com sucesso.');
                inicio()
            } else {
                alert('Reserva não efetuada.');
                inicio()
            }
        }

        function verificarAuditório() {
            let capacidadeAuditórioLaranja = 150;
            let cadeirasAdicionaisLaranja = 70;
            let capacidadeAuditórioColorado = 350;
        
            let numConvidados = parseInt(prompt('Qual o número de convidados para o seu evento?'));
        
            if (numConvidados > capacidadeAuditórioColorado || numConvidados < 0) {
                alert('Número de convidados inválido.');
                return;
            }
        
            if (numConvidados > capacidadeAuditórioLaranja) {
                alert('Use o auditório Colorado.');
            } else {
                let cadeirasNecessarias = Math.max(0, numConvidados - capacidadeAuditórioLaranja);
                alert('Use o auditório Laranja (inclua mais ' + cadeirasNecessarias + ' cadeiras).');
            }
        
            let confirmacao = prompt('Gostaria de efetuar a reserva? S/N');
        
            if (confirmacao.toUpperCase() === 'S') {
                alert('Reserva efetuada com sucesso.');
            } else {
                alert('Reserva não efetuada.');
            }
        }
        function verificarDisponibilidadeRestaurante(diaSemana, hora) {
            var disponibilidade = '';
        
            if (diaSemana === 'segunda' || diaSemana === 'terça' || diaSemana === 'quarta' || diaSemana === 'quinta' || diaSemana === 'sexta') {
                if (hora >= 7 && hora <= 23) {
                    disponibilidade = 'Restaurante disponível';
                } else {
                    disponibilidade = 'Restaurante indisponível';
                }
            } else if (diaSemana === 'sabado' || diaSemana === 'domingo') {
                if (hora >= 7 && hora <= 15) {
                    disponibilidade = 'Restaurante disponível';
                } else {
                    disponibilidade = 'Restaurante indisponível';
                }
            } else {
                disponibilidade = 'Dia da semana inválido';
            }
        
            return disponibilidade;
        }
        
        function reservarRestaurante() {
            var diaSemana = prompt('Qual dia de semana do seu evento?');
            var hora = parseInt(prompt('Qual a hora do seu evento?'));
        
            var disponibilidade = verificarDisponibilidadeRestaurante(diaSemana, hora);
        
            if (disponibilidade === 'Restaurante disponível') {
                var nomeEmpresa = prompt('Qual o nome da empresa?');
                alert('Restaurante reservado para ' + nomeEmpresa + ': ' + diaSemana + ' às ' + hora + 'hs.');
            } else {
                alert(disponibilidade);
            }
            inicio()
        }

        function abastecerCarro() {
            const precoAlcool = 4.2;
            const precoGasolina = 5.82;
          
            const combustivel = prompt(
              "Informe o tipo de combustível (Álcool ou Gasolina):"
            );
            const litros = parseFloat(
              prompt("Informe a quantidade de litros abastecidos:")
            );
          
            let valorTotal = 0;
          
            if (combustivel.toLowerCase() === "álcool") {
              valorTotal = precoAlcool * litros;
            } else if (combustivel.toLowerCase() === "gasolina") {
              valorTotal = precoGasolina * litros;
            } else {
              alert("Tipo de combustível inválido.");
              return;
            }
          
            alert(
              `Você abasteceu ${litros.toFixed(2)} litros de ${combustivel} por R$ ${valorTotal.toFixed(2)}`
            );
            inicio();
          }
          function arCondicionado() {
            let local = prompt("Em qual local você gostaria de verificar a qualidade do ar?");
            
            // Simulação da verificação da qualidade do ar
            let qualidadeAr = Math.random(); // Gerando um valor aleatório para simular a qualidade do ar
        
            let mensagem = `${user}, a qualidade do ar em ${local} é `;
        
            if (qualidadeAr < 0.3) {
                mensagem += "ótima! O ar está fresco e limpo.";
            } else if (qualidadeAr >= 0.3 && qualidadeAr < 0.7) {
                mensagem += "razoável. Pode haver alguma poluição no ar.";
            } else {
                mensagem += "ruim. Recomendamos evitar permanecer muito tempo nessa área.";
            }
        
            alert(mensagem);
            inicio()
        }
        // Função para sair do sistema
        function sairSistema() {
            let nome = prompt('Digite o seu nome:');
            if (nome !== null && nome.trim() !== '') {
                alert('Muito obrigado e até logo, ' + nome + '.');
            } else {
                alert('Muito obrigado e até logo!');
            }
        }
        // Função para erro
        function erro() {
            alert('Opção inválida. Por favor, escolha uma opção válida.');
            inicio();
        }
        // Chamada da função de início ao carregar a página
            inicio()