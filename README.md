# Lumen

## 1. Descrição geral da aplicação 🌟

O **Lumen** é uma plataforma para ambientes inteligentes, voltada ao gerenciamento de lâmpadas de LED. O sistema permite:

- Gerenciar múltiplas lâmpadas de forma remota;
- Programar horários automáticos de acendimento e apagamento;
- Obter dados sobre a média de horas em que as lâmpadas permanecem acesas;
- Integrar-se com múltiplos clientes conectados;
- Utilizar o protocolo **MQTT** para comunicação de dados em tempo real entre os dispositivos e a interface.

Essa solução é ideal para residências, escritórios e ambientes onde a automação e o monitoramento de iluminação são desejáveis.

---

## 2. Melhorias implementadas na versão 2 (P3)

A versão 2 do Lumen trouxe as seguintes melhorias:

- ✅ Capacidade para gerenciar **múltiplas lâmpadas** simultaneamente;
- ✅ **Automatização do ciclo** de acendimento e apagamento com base em horários programados;
- ✅ Implementação do **protocolo MQTT** para comunicação entre dispositivos e servidor;
- ✅ Registro e análise de dados sobre o **tempo total de operação** (horas acesas) das lâmpadas.

---

## 3. Desenho da arquitetura utilizada na solução

O sistema utiliza uma arquitetura distribuída, onde dispositivos ESP32 (clients) se comunicam com o backend via protocolo MQTT. O backend armazena os dados em um banco PostgreSQL e os disponibiliza por uma API para o frontend.

*Figura: Diagrama de arquitetura do sistema*  
![image](https://github.com/user-attachments/assets/e48a9f9c-bec5-46b0-8536-6a2ce0ced3c9)

---

## 4. Materiais utilizados

### 4.1 Hardware e periféricos

| Componente             | Quantidade | Descrição                      |
|------------------------|------------|--------------------------------|
| Placa ESP32            | 1          | Com módulo Wi-Fi integrado     |
| Cabo jumper            | 6          | Para conexões em protoboard    |
| Protoboard             | 1          | Base de montagem               |
| LED de diodo           | 1          | Representa a lâmpada           |
| Resistor 180 Ohms      | 1          | Proteção do LED                |

### 4.2 Softwares, pacotes e sistemas

- **Node.js** – Ambiente de execução para o backend;
- **MQTT** – Protocolo leve de mensagens para IoT;
- **TypeScript** – Superset de JavaScript usado em toda a stack;
- **PostgreSQL** – Banco de dados relacional;
- **Next.js** – Framework React para o frontend;
- **Express** – Framework para APIs no backend;
- **CORS** – Middleware para controle de acesso HTTP;
- **pg** – Cliente PostgreSQL para Node.js.
- **Pub/Sub Client** – Biblioteca para o envio de dados MQTT.
- **WIFI.H** - Fazer requisições HTTP pela placa.

---

## 5. Desenho de conexão do circuito de hardware

A imagem abaixo representa como o LED é conectado ao ESP32 por meio do protoboard e resistor.

*Figura: Conexões do circuito de hardware*  
![image](https://github.com/user-attachments/assets/295ccd0b-4bb5-4d84-9b2a-e91933506186)

---

## 6. Manual de uso

### 6.1 Pré-requisitos

- ESP32 com suporte Wi-Fi;
- Ambiente Node.js instalado;
- Broker MQTT em execução (ex: Mosquitto);
- Banco de dados PostgreSQL acessível;
- Navegador para acessar o frontend;

### 6.2 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/caiquefrd/lumen.git
   cd lumen
   ```

2. Inicie o backend de persistência:
   ```bash
   cd lumen
   cd persistence
   npm i
   npm run dev
   ```


3. Inicie o frontend:
   ```bash
   cd lumen
   cd front
   npm i
   npm run dev
   ```

3. Execute o código .ino (Arduino IDE):
   ```bash
   cd wifi_led_ino
   ```

## 7. Imagens
  
![image](https://github.com/user-attachments/assets/11db046b-1dcb-46cc-9fb5-972379b103b5)
