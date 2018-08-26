<template>
    <div class="container">
        <div class="row main">
            <div class="main-login main-center">
                <form class="" data-toggle="validator">
                    <div class="text-center mb-4">
                        <h1 class="cover-heading">Acesso Aluno</h1>
                        <p class="lead">Gerencie a sua inscrição de matricula, emita boletos e relatórios </p>
                    </div>
                    <div class="form-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="E-mail" required autofocus name="username" v-model="username">
                    </div>
                    <div class="form-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Senha" required name="password" v-model="password">
    
                    </div>
                    <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                username: '',
                password: '',
            };
        },
    
        methods: {
            login() {
                let data = {
                    username: this.username,
                    password: this.password
                };
                axios.post('https://localhost/api/login', data)
                    .then(({
                        data
                    }) => {
                        auth.login(data.token, data.user);
                        this.$router.push('/painel');
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