<template>
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <header class="masthead mb-auto">
            <div class="inner">
                <h3 class="masthead-brand">Instituição de Ensino</h3>
                <nav class="nav nav-masthead justify-content-center">
                    <router-link v-if="!authenticated && !user" class="nav-link" to="/">Home</router-link>
                    <router-link v-if="authenticated && user" class="nav-link" to="/painel">Painel</router-link>
                    <router-link v-if="!authenticated && !user" class="nav-link" to="/inscricao">Inscrição</router-link>
                    <router-link v-if="!authenticated && !user" class="nav-link" to="/login">Login</router-link>
                </nav>
            </div>
        </header>
        <main role="main" class="inner cover">
            <router-view></router-view>
        </main>
        <footer class="mastfoot mt-auto">
            <div class="inner">
                <div v-if="authenticated && user">
                    <p>Olá, {{ user.name }}</p>
                    <button class="btn btn-small btn-warning" type="submit" @click="logout">Logout</button>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    name:'App',
    data() {
        return {
            authenticated: auth.check(),
            user: auth.user
        };
    },

    mounted() {
        Event.$on('userLoggedIn', () => {
            this.authenticated = true;
            this.user = auth.user;
        });
    },
    methods: {
        logout() {
            window.localStorage.clear()
            this.authenticated = false;
            this.user = null;
            this.$router.push('/');
        }
    }
}
</script>