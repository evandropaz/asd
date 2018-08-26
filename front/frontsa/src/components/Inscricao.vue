<template>
  <div class="container">
    <div class="row main">
      <div class="main-login main-center">
  
        <div class="text-center mb-4">
          <h1 class="cover-heading">Inscrição de matricula</h1>
          <p class="lead">Gerencie a sua inscrição de matricula, emita boletos e relatórios </p>
        </div>
        <div class="form-group text-left">
          <label for="inputCurso">Curso</label>
          <select class="form-control" id="inputCurso" name="curso" v-model="curso"> 
                <option value="Administração">Administração</option> 
                <option value="iências Contábeis">Ciências Contábeis</option> 
                <option value="Direito">Direito</option> 
                <option value="Enfermagem">Enfermagem</option> 
                <option value="Engenharia Civil">Engenharia Civil</option> 
                <option value="Engenharia de Produção">Engenharia de Produção</option> 
                <option value="Nutrição">Nutrição</option> 
                <option value="Sistema de Informação">Sistema de Informação</option> 
            </select>
        </div>
        <div class="form-group text-left">
          <label for="inputName">Nome completo</label>
          <input type="text" id="inputName" class="form-control" required autofocus name="name" v-model="name">
        </div>
        <div class="form-group text-left">
          <label for="inputEmail">E-mail</label>
          <input type="email" id="inputEmail" class="form-control" required autofocus name="email" v-model="email">
        </div>
        <div class="form-group text-left">
          <label for="inputPassword">Senha</label>
          <input type="password" id="inputPassword" data-minlength="6" class="form-control" required name="password" v-model="password">
        </div>
        <div class="form-group text-left">
          <label for="inputEndereco">Endereço</label>
          <input type="text" id="inputEndereco" class="form-control" required autofocus name="endereco" v-model="endereco">
        </div>
        <div class="form-group text-left">
          <label for="inputNumero">Número</label>
          <input type="text" id="inputNumero" class="form-control" required autofocus name="numero" v-model="numero">
        </div>
        <div class="form-group text-left">
          <label for="inputComplemento">Complemento</label>
          <input type="text" id="inputComplemento" class="form-control" name="complemento" v-model="complemento">
        </div>
        <div class="form-group text-left">
          <label for="inputBairro">Bairro</label>
          <input type="text" id="inputBairro" class="form-control" required autofocus name="bairro" v-model="bairro">
        </div>
        <div class="form-group text-left">
          <label for="inputEstado">Estado</label>
          <select class="form-control" id="inputEstado" required autofocus name="estado" v-model="estado"> 
                <option value="ac">Acre</option> 
                <option value="al">Alagoas</option> 
                <option value="am">Amazonas</option> 
                <option value="ap">Amapá</option> 
                <option value="ba">Bahia</option> 
                <option value="ce">Ceará</option> 
                <option value="df">Distrito Federal</option> 
                <option value="es">Espírito Santo</option> 
                <option value="go">Goiás</option> 
                <option value="ma">Maranhão</option> 
                <option value="mt">Mato Grosso</option> 
                <option value="ms">Mato Grosso do Sul</option> 
                <option value="mg">Minas Gerais</option> 
                <option value="pa">Pará</option> 
                <option value="pb">Paraíba</option> 
                <option value="pr">Paraná</option> 
                <option value="pe">Pernambuco</option> 
                <option value="pi">Piauí</option> 
                <option value="rj">Rio de Janeiro</option> 
                <option value="rn">Rio Grande do Norte</option> 
                <option value="ro">Rondônia</option> 
                <option value="rs">Rio Grande do Sul</option> 
                <option value="rr">Roraima</option> 
                <option value="sc">Santa Catarina</option> 
                <option value="se">Sergipe</option> 
                <option value="sp">São Paulo</option> 
                <option value="to">Tocantins</option> 
            </select>
        </div>
        <div class="form-group text-left">
          <label for="inputCidade">Cidade</label>
          <input type="text" id="inputCidade" class="form-control" required autofocus name="cidade" v-model="cidade">
        </div>
  
  
  
        <button class="btn btn-lg btn-success btn-block" type="submit" @click="register">Cadastrar</button>
  
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        endereco: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: '',
        curso: ''
      };
    },
  
    methods: {
      register() {
        let data = {
          name: this.name,
          password: this.password,
          email: this.email,
          endereco: this.endereco,
          numero: this.numero,
          complemento: this.complemento,
          bairro: this.bairro,
          cidade: this.cidade,
          estado: this.estado,
          curso: this.curso
        };
        console.log(data);
        axios.post('https://localhost/api/register', data)
          .then(({
            data
          }) => {
            alert(data.message);
            this.$router.push('/login');
          })
          .catch(({
            response
          }) => {
            alert(response.data.message);
          });
      }
    }
  }
</script>
