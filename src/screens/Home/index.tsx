import { useState } from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity, View, StatusBar, ScrollView, FlatList, Alert, Image } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import Logo from "../../assets/Logo.png";
import PlusIcon from "../../assets/plus.png";
import EmptyListIcon from "../../assets/Clipboard.png";

interface Task {
  name: string;
  completed: boolean;
}

export default function Home() {
  // useState é um hook que adiciona o estado a componentes funcionais.
  // participants é o nome da variável que armazena o estado.
  // setParticipants é o nome da função que atualiza o estado.
  // useState([]) é o valor inicial do estado.
  const [tasks, setTasks] = useState<Task[]>([
    { name: "Estudar react", completed: false },
  ]);
  const [taskName, setTaskName] = useState("");

  function handleTaskAdd(name: string) {
    if (tasks.some((task: Task) => task.name === name)) {
      Alert.alert("Tarefa já cadastrada", `Tarefa ${name} já está cadastrada.`);
      return;
    }

    if (name.trim() === "") {
      Alert.alert("Nome inválido", "O nome da tarefa não pode ser vazio.");
      return;
    }

    setTasks([...tasks, { name, completed: false }]); // Adiciona o participante na lista.
    setTaskName(""); // Limpa o campo de texto.
    Alert.alert("Tarefa cadastrada", `Tarefa ${name} cadastrada com sucesso.`);
  }

  function handleTaskComplete(name: string) {
    setTasks(
      tasks.map((task: Task) => {
        if (task.name === name) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  }

  function handleTaskRemove(name: string) {
    // Alert é uma caixa de diálogo que exibe uma mensagem ao usuário, com botões de ação.
    Alert.alert("Remover tarefa", `Deseja realmente remover o tarefa ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          setTasks(tasks.filter(task => task.name !== name)); // Remove the task from the list.
          Alert.alert("Tarefa removida", `Tarefa ${name} removida com sucesso.`);
        }
      },
    ]);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 
        StatusBar é uma barra de status que fica no topo da tela do dispositivo.
        barStyle define o estilo da barra de status.
        light-content deixa o texto da barra de status claro.
        translucent deixa a barra de status transparente e o conteúdo da tela começa abaixo dela.
      */}
      <StatusBar barStyle="light-content" translucent backgroundColor={"transparent"} />

      <View style={styles.header}>
        <Image source={Logo} style={styles.logo} />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6B6B6B"}
            value={taskName}
            onChangeText={setTaskName} // Atualiza o valor do campo de texto automaticamente.
            keyboardAppearance="dark"
          />

          {/* 
          TouchableOpacity é um botão que não tem estilo padrão.
          onPress é o evento que é disparado quando o botão é pressionado.
        */}
          <TouchableOpacity style={styles.button} onPress={() => handleTaskAdd(taskName)}>
            <Text style={styles.buttonText}>
              <Image source={PlusIcon} style={styles.plusIcon} />
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <View style={styles.infoItem}>
            <Text style={styles.infoItemTextCreated}>Criadas</Text>
            <Text style={styles.counter}>
              {tasks.length}
            </Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoItemTextCompleted}>Concluídas</Text>
            <Text style={styles.counter}>
              {tasks.filter(task => task.completed).length}
            </Text>
          </View>
        </View>

        {/* FlatList é uma opção para listas grandes e que precisam de performance, pois renderiza apenas os itens visíveis na tela. */}
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Task
              name={item.name} // Pass the name property of the Task object
              checked={item.completed} // Pass the completed property of the Task object
              onCheck={() => handleTaskComplete(item.name)} // Pass the name property of the Task object
              onRemove={() => handleTaskRemove(item.name)} // Pass the name property of the Task object
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Image source={EmptyListIcon} />
              <Text style={styles.emptyListTextTitle}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.emptyListTextSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />

        {/* ScrollView é uma opção para listas pequenas e que não precisam de performance, pois renderiza todos os itens de uma vez mesmo que não estejam visíveis na tela. */}
        {/* <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {participants.map((participant, index) => (
          <Participant
            key={index}
            name={participant}
            onRemove={handleParticantRemove}
          />
        ))}
      </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}