# 🕸️ Grafo Social Web

Um sistema web que permite a visualização de um **Grafo Social** gerado a partir de um arquivo `.txt`. Ele também exibe um **gráfico de barras** mostrando o grau (número de conexões) de cada nó.  

## 📝 Estrutura do Projeto
    /project
        /css
            style.css          # Estilo da página
        /js
            script.js          # Lógica principal (grafo + gráfico)
        index.html             # Página HTML principal
        dados.txt              # Arquivo de entrada exemplo

## 🚀 Como Usar
1. Clone o repositório:

        git clone https://github.com/MariaEduardaMorais/SADGrafo.git
        cd SADGrafo
    
2. Abra o arquivo index.html diretamente no navegador ou utilize uma extensão como Live Server para executar localmente.

3. Faça o upload de um arquivo .txt com a estrutura:

        Nome1 - Nome2
        Nome2 - Nome3
        Nome3 - Nome4

4. Visualize:
* O grafo social no canvas.
* O gráfico de barras mostrando o número de conexões.

## 🎨 Tecnologias Utilizadas
* HTML5: Estrutura da página.
* CSS3: Estilização com bordas arredondadas, tons pastéis e layout centralizado.
* JavaScript: Lógica para geração do grafo e integração com Google Charts.
* Google Charts: Biblioteca para gráficos interativos.
* FileReader API: Para leitura do arquivo .txt.
  
## 📂 Arquivo dados.txt
Exemplo de arquivo de entrada:

    Bob Esponja - Luffy
    Luffy - Zoro
    Luffy - Naruto
    Zoro - Wandinha
    Naruto - Harry Potter
    Harry Potter - Hermione
    Hermione - Yoda
    Yoda - Merlin
    Merlin - Bob Esponja
    Hermione - Luffy
    Yoda - Naruto
    Harry Potter - Merlin
    Merlin - Wandinha

## 🖥️ Funcionalidades
Grafo Social:
* Cada pessoa é representada por um nó único (sem repetições).
* As conexões (arestas) mostram os relacionamentos entre as pessoas.
* Layout circular para uma visualização limpa.
  
Gráfico de Barras:
* Mostra o número de conexões de cada pessoa.
* Tooltip interativo: Exibe o nome e o número de conexões ao passar o mouse.
* Maior largura e nomes inclinados para melhor visibilidade.
  
## 📷 Capturas de Tela
Grafo Social

![image](https://github.com/user-attachments/assets/c46df04d-6ae3-426a-85d5-fff85d337ac5)

Gráfico de Barras

![image](https://github.com/user-attachments/assets/111a41c8-88b4-4b59-ac44-9bcfc3a88035)

## 🛠️ Melhorias Futuras

🔄 Permitir a exclusão de nós ou arestas.

🌐 Suporte a arquivos em outros formatos, como .csv.

📊 Outros tipos de gráficos (por exemplo, gráficos de pizza).


__________________________________________________________________________________________

# 🕸️ Social Web Graph
A web system that allows the visualization of a Social Graph generated from a .txt file. It also displays a bar chart showing the degree (number of connections) of each node.

## 📝 Project Structure
    /project
      /css
        style.css # Page style
      /js
        script.js # Main logic (graph + chart)
      index.html # Main HTML page
      dados.txt # Example input file

## 🚀 How to Use
1. Clone the repository:

       git clone https://github.com/MariaEduardaMorais/SADGrafo.git
       cd SADGrafo
     
2. Open the index.html file directly in the browser or use an extension like Live Server to run it locally.

3. Upload a .txt file with the structure:

       Name1 - Name2
       Name2 - Name3
       Name3 - Name4
 
4. View:
* The social graph on the canvas.
* The bar chart showing the number of connections.

## 🎨 Technologies Used
* HTML5: Page structure.
* CSS3: Styling with rounded borders, pastel tones, and centered layout.
* JavaScript: Logic for generating the graph and integration with Google Charts.
* Google Charts: Library for interactive charts.
* FileReader API: For reading the .txt file.

## 📂 dados.txt File
Example input file:

    SpongeBob - Luffy
    Luffy - Zoro
    Luffy - Naruto
    Zoro - Wednesday
    Naruto - Harry Potter
    Harry Potter - Hermione
    Hermione - Yoda
    Yoda - Merlin
    Merlin - SpongeBob
    Hermione - Luffy
    Yoda - Naruto
    Harry Potter - Merlin
    Merlin - Wednesday

## 🖥️ Features
Social Graph:
* Each person is represented by a unique node (no duplicates).
* Connections (edges) show relationships between people.
* Circular layout for a clean visualization.
  
Bar Chart:
* Displays the number of connections of each person.
* Interactive tooltip: Shows name and number of connections on hover.
* Larger width and tilted names for better visibility.
  
📷 Screenshots

Social Graph

![image](https://github.com/user-attachments/assets/51f3d8f4-a3fc-497c-af4e-065dd28ae050)

Bar Chart

![image](https://github.com/user-attachments/assets/c8980780-44c6-44fc-9451-ecef90f7b74d)

## 🛠️ Future Improvements
🔄 Allow node or edge deletion.

🌐 Support for other file formats, such as .csv.

📊 Other types of charts (e.g., pie charts).


