<template>
      <div>      
            
      <div class="text-center mb-4">
        <h1 class="cover-heading">Inscrição de matricula</h1>
       <p class="lead">Gerencie a sua inscrição de matricula, emita boletos e relatórios </p>
      </div>
      <div class="form-group col-12 text-left">
        <label for="inputName">Nome completo</label>
        <input type="text" id="inputName" class="form-control"  required autofocus name="name" v-model="name">
      </div>
      <div class="form-group col-8 text-left">
        <label for="inputEmail">E-mail</label>
        <input type="email" id="inputEmail" class="form-control" required autofocus name="username" v-model="username">
      </div>
      <div class="form-group col-8 text-left">
        <label for="inputPassword">Senha</label>
        <input type="password" id="inputPassword" class="form-control" required name="password" v-model="password">
      </div> 
       <div class="form-group col-12 text-left">
         <label for="inputEndereco">Endereço</label>
        <input type="text" id="inputEndereco" class="form-control"  required autofocus name="endereco" v-model="endereco">
      </div>
      <div class="form-group col-4 text-left">
        <label for="inputNumero">Número</label>
        <input type="text" id="inputNumero" class="form-control" required autofocus name="numero" v-model="numero">
      </div>
      <div class="form-group col-12 text-left">
        <label for="inputComplemento">Complemento</label>
        <input type="text" id="inputComplemento" class="form-control"  required autofocus name="complemento" v-model="complemento">
      </div>
       <div class="form-group col-6 text-left">
         <label for="inputBairro">Bairro</label>
        <input type="text" id="inputBairro" class="form-control"  required autofocus name="bairro" v-model="bairro">
      </div>
       <div class="form-group col-4 text-left">
         <label for="inputCidade">Cidade</label>
        <input type="text" id="inputCidade" class="form-control"  required autofocus name="cidade" v-model="cidade">
      </div>
       <div class="form-group col-4 text-left">
         <label for="inputEstado">Estado</label>
        <input type="text" id="inputEstado" class="form-control"  required autofocus name="estado" v-model="estado">
      </div>


      <button class="btn btn-lg btn-success btn-block" type="submit" @click="cadastrar">Cadastrar</button>
     
    </div>
</template>


