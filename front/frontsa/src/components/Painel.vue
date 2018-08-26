<template>
   <div class="container">
    <div class="row main">
      <div class="main-login main-center">
    <h1>Minha Matrícula</h1>
    <div class="table-responsive">
    <table class="table table-striped table-dark">
   
  
      <tbody>
        <tr class="text-left">
          <td>Nome:</td>
          <td>{{ aluno.name }}</td>
        </tr>  
        <tr class="text-left">
          <td>E-mail:</td>
          <td>{{ aluno.email }}</td>
        </tr>  
        <tr class="text-left">
          <td>Curso:</td>
          <td>{{ aluno.curso }}</td>
        </tr>  
        <tr class="text-left">
          <td>Endereço:</td>
          <td>{{ aluno.endereco + ', ' + aluno.numero }}</td>
        </tr>  
        <tr class="text-left">  
          <td>Cidade:</td>
          <td>{{ aluno.cidade }}</td>
        </tr>  
        <tr class="text-left">  
          <td>Estado:</td>
          <td>{{ aluno.estado }}</td>
        </tr>  
         </tbody>
    </table>
     </div>
    </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        aluno: '',
      }
    },
    created: function() {
      this.fetchAlunoData();
    },
    methods: {
      fetchAlunoData: function() {
       axios.get('https://localhost/api/get-user')
        .then(({data}) => {
            this.aluno = data;
        })
        .catch(({response}) => {
            if (response.status === 401) {
                this.logout();
            }
        });
      }
    }
  }
</script>