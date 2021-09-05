<template>
  <section class="vh-100 py-5 ">
    <div class="container h-100">
      <div class="row d-flex align-items-center justify-content-around h-100">
        <div class="col-md-4 col-lg-3 col-xl-4 flex-column d-flex justify-content-between">
          <div class="input-group">
            <input type="date" id="input-date" class="form-control rounded" aria-label="Search" aria-describedby="search-addon"/>
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#searchModal">consultar tareas</button>
          </div>
          <button type="button" class="btn" data-toggle="modal" data-target="#newModal">Nueva Tarea</button>
          <button type="button" class="btn" data-toggle="modal" data-target="#updateModal">Actualizar Tarea</button>
          <button type="button" class="btn" data-toggle="modal" data-target="#deleteModal">Eliminar Tarea</button>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-8 ">
          <img src="../assets/calendar.png" class="img-fluid" alt="Calendar task"/>
        </div>
      </div>
    </div>
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Borrar tarea</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="deleteTask">
              <div class="form-group">
                <h4><label for="recipient-name" class="col-form-label">Título:</label></h4>
                <input type="text" class="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" id="buscar-tarea"/>
              </div>
              <button type="submit" class="btn">Eliminar tarea</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Actualizar tarea</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="updateTask">
              <div class="form-group">
                <h4><label class="col-form-label">Título:</label></h4>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Titulo de la tarea" v-model="createTaskTask.taskTittle">
                  <div class="input-group-append">
                    <button class="btn btn-warning" type="button" v-on:click="taskByUserIdAndTaskTittle">Buscar</button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <h4><label class="col-form-label">Categoría:</label></h4>
                <input type="text" class="form-control rounded" id="task-category" v-model="createTaskTask.taskCategory"/>
              </div>
              <div class="form-group">
                <h4><label class="col-form-label">Descripción:</label></h4>
                <textarea rows="4" class="form-control rounded" id="task-description" v-model="createTaskTask.description"></textarea>
              </div>
              <div class="form-group">
                <h4><label class="col-form-label">Fecha de entrega:</label></h4>
                <input type="date" class="form-control rounded" aria-label="Search" aria-describedby="search-addon" id="buscar-tarea" v-model="createTaskTask.finalDate"/>
              </div>
              <button type="submit" class="btn">Actualizar tarea</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Nueva tarea</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <form v-on:submit.prevent="newTask">
              <div class="form-group">
                <h4><label class="col-form-label">Título:</label></h4>
                <input type="text" class="form-control rounded" id="task-name" v-model="createTaskTask.taskTittle"/>
              </div>
              <div class="form-group">
                <h4><label class="col-form-label">Categoría:</label></h4>
                <input type="text" class="form-control rounded" id="task-category" v-model="createTaskTask.taskCategory"/>
              </div>
              <div class="form-group">
                <h4><label class="col-form-label">Descripción:</label></h4>
                <textarea rows="4" class="form-control rounded" id="task-description" v-model="createTaskTask.description"></textarea>
              </div>
              <div class="form-group">
                <h4><label class="col-form-label">Fecha de entrega:</label></h4>
                <input type="date" class="form-control rounded" aria-label="Search" aria-describedby="search-addon" id="buscar-tarea" v-model="createTaskTask.finalDate"/>
              </div>
              <button type="submit" class="btn">Añadir tarea</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tareas</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          </div>
          <div class="modal-body">
            <ul v-for="task in taskByUserIdAndFinalDate" :key="task.id">
              <li class="itemTask">
                <ul>
                  <li>{{task.taskTittle}}</li>
                  <li>{{task.status}}</li>
                  <li>{{task.description}}</li>
                  <li>{{task.taskCategory}}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Task",

  data: function () {
    return{
      createTaskTask:{
        taskId:"",
        taskTittle: "",
        description: "",
        finalDate: "",
        status: "",
        taskCategory: "",
        userId: localStorage.getItem("user_id"),
      },
      updateTaskTask: {
        taskId:"",
        taskTittle: "",
        description: "",
        finalDate: "",
        status: "",
        taskCategory: "",
        userId: localStorage.getItem("user_id"),
      },
      deleteTaskUserId:{
        userId: localStorage.getItem("user_id"),
      },
      deleteTaskTaskTittle: {
        taskTittle: "",
      },
      taskByUserIdAndTaskTittle:{
        taskId:"null",
        taskTittle: "",
        description: "null",
        finalDate: "null",
        status: "null",
        taskCategory: "null",
      },
      taskByUserIdAndFinalDate: [],
    };
  },
  apollo:{
    taskByUserIdAndTaskTittle: {
      query: gql`
      query ($taskByUserIdAndTaskTittleUserId: String!, $taskByUserIdAndTaskTittleTaskTittle: String!) {
        taskByUserIdAndTaskTittle(userId: $taskByUserIdAndTaskTittleUserId, taskTittle: $taskByUserIdAndTaskTittleTaskTittle) {
          taskId
          taskTittle
          description
          finalDate
          status
          taskCategory
          userId
        }
      }
      `,
      variables(){
        var taskTittle = this.taskTittle 
        return{
          taskByUserIdAndTaskTittleUserId: localStorage.getItem("user_id"), 
          taskByUserIdAndTaskTittleTaskTittle: taskTittle,
        };
      },
    },
    taskByUserIdAndFinalDate:{
      query: gql`
      query Query($taskByUserIdAndFinalDateUserId: String!, $taskByUserIdAndFinalDateFinalDate: String!) {
        taskByUserIdAndFinalDate(userId: $taskByUserIdAndFinalDateUserId, finalDate: $taskByUserIdAndFinalDateFinalDate) {
          taskId
          taskTittle
          description
          finalDate
          status
          taskCategory
          userId
        }
      }
      `,
      variables(){
        var finalDate = this.finalDate 
        return{
          taskByUserIdAndFinalDateUserId: localStorage.getItem("user_id"), 
          taskByUserIdAndFinalDateFinalDate: finalDate,
        };
      },
    }
  },
  methods: {
    newTask: async function () {
      await this.$apollo.mutate({
        mutation: gql`
          mutation Mutation($createTaskTask: TaskInput!) {
            createTask(task: $createTaskTask) {
              taskId
              taskTittle
              description
              finalDate
              status
              taskCategory
              userId
            }
          }
        `,
        variables: {
          createTaskTask: this.createTaskTask
        },
      }).then((result) => {
        alert("Se ha añadido la tarea")
      }).catch((error) => {
        alert("La tarea ya existe");
      });
    },
    updateTask: async function () {
      await this.$apollo.mutate({
        mutation: gql`
          mutation UpdateTaskMutation($updateTaskTask: TaskInputUpdate!) {
            updateTask(task: $updateTaskTask) {
              taskId
              taskTittle
              description
              finalDate
              status
              taskCategory
              userId
            }
          }
        `,
        variables: {
          updateTaskTask: this.updateTaskTask,
        },
      }).then((result) => {
        alert("Se ha actualizado la tarea")
      }).catch((error) => {
        alert("La tarea no existe");
      });
    },
    deleteTask: async function () {
      await this.$apollo.mutate({
        mutation: gql`
          mutation DeleteTaskMutation($deleteTaskUserId: String!, $deleteTaskTaskTittle: String!) {
            deleteTask(userId: $deleteTaskUserId, taskTittle: $deleteTaskTaskTittle) {
              response
            }
          }
        `,
        variables: {
          deleteTaskUserId: localStorage.getItem("user_id"), 
          deleteTaskTaskTittle: this.deleteTaskTaskTittle,
        },
      }).then((result) => {
        alert("Se ha eliminado la tarea")
      }).catch((error) => {
        alert("La tarea no existe");
      });
    },
  },
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  color: #5264ef;
}

h4 {
  font-weight: normal;
  color: #5264ef;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.container {
  padding-bottom: 1vh;
}
.nav-item .nav-link {
  color: #42b983;
}
.nav-item .nav-link.active {
  background-color: #edfaff;
  border-bottom-color: #edfaff;
}
.btn {
  background-color: #5264ef;
  color: #fff;
}

.modal-header {
  background-color: #5264ef;
  color: white;
}
.itemTask {
  border: 1px solid #000;
  border-radius: 10px;
}

</style>
