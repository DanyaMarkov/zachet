<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p class="logo_descp">
          <a href="#" class="navbar-brand main-logo">
            <picture>
              <!-- <source srcset="./img/logo2.png" alt="logo" class="logo_h" media="(max-width: 990px)" />
              <img src="./img/logo.png" class="logo_h" alt="logo" />-->

              <!-- <source srcset="./img/logo2.png" alt="logo" class="logo_h" media="(max-width: 990px)" /> -->
              <img
                src="./img/logo.png"
                class="logo_h"
                alt="logo"
                srcset="./img/logo.png 1980w, ./img/logo2.png 990w"
              />
            </picture>
          </a>
        </p>
        <!-- <router-link class="navbar-brand" to="/mainp">Марков</router-link> -->

        <button class="navbar-toggler" data-toggle="collapse" data-target="#navBarNavM">
          <span
            class="navbar-toggler-icon"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <router-link class="nav-item nav-link dropdown-item" to="/mainp">Главная</router-link>
              <router-link class="nav-item nav-link dropdown-item" to="/worker">Сотрудники</router-link>
            </div>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="#navBarNavM">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" to="/mainp">Главная</router-link>
            <router-link class="nav-item nav-link" to="/worker">Сотрудники</router-link>
          </div>
        </div>
      </nav>
    </header>

    <main>
      <div class="container">
        <router-view>
          <mainp></mainp>
          <worker></worker>
        </router-view>
      </div>
    </main>

    <footer>
      <div class="autor">
        <h4>Автор работы:</h4>
        <p>ФИО: Марков Даниил Андреевич</p>
        <p>Группа: 181-361</p>
        <p>Дата выполнения: 22.06.2020</p>
      </div>
      <div>
        <h4>Источники:</h4>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <a
                target="_blank"
                href="https://fonts.google.com/specimen/Comfortaa?subset=cyrillic&sidebar.open&selection.family=Comfortaa"
              >Google-fonts</a>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <a target="_blank" href="https://flatuicolors.com/palette/us">Цвета для блоков</a>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <a
                target="_blank"
                href="https://getbootstrap.com/docs/4.5/getting-started/introduction/"
              >Подключение Bootstrap</a>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <a
                target="_blank"
                href="https://ru.stackoverflow.com/questions/782795/%D0%A0%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81-json-vue-js"
              >JSON Vue.js</a>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <a target="_blank" href="https://proglib.io/p/bootstrap-4-grid">Адаптивность Bootstrap</a>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <a target="_blank" href="https://ru.vuejs.org/v2/guide/routing.html">Роутинг Vue.js</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Mainp from "./components/mainp.vue";
import Worker from "./components/worker.vue";

export default {
  name: "App",
  components: {
    mainp: Mainp,
    worker: Worker
  }
};
</script>

<style>
#app {
  align-content: center;
  text-align: center;
  background-color: #81ecec;
  width: 100%;
  left: 0%;
  font-family: "Comfortaa", cursive;
}

.btn-info {
  background-color: #000;
  color: #fff;
  border-radius: 30px;
}

.btn-info:hover {
  background-color: #0984e3;
  color: #fff;
  border-radius: 30px;
}

.autor p {
  color: #dfe6e9;
}

a {
  color: #dfe6e9;
}
.menu {
  background-color: #55efc4;
  padding-top: 10px;
  border-radius: 25px;
  margin: 10px;
}

.change {
  background-color: #fdcb6e;
  padding-top: 10px;
  border-radius: 25px;
  margin: 10px;
}

.book h1 {
  background-color: #e17055;
  text-align: center;
  border-radius: 25px;
  margin: 10px;
}
.book {
  background-color: #ffeaa7;
  padding-top: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
}

footer {
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: cornflowerblue;
}

button {
  margin-top: 8px;
  border-radius: 10px;
  margin: 8px;
}

main-logo {
  margin-top: 10px;
}
.logo_h {
  width: 80px;
  -webkit-transition: all 0.7s ease;
  -moz-transition: all 0.7s ease;
  -o-transition: all 0.7s ease;
  transition: all 0.7s ease;
}
.logo_h:hover {
  border-radius: 100%;
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
}

.img-fluid {
  margin: 10px;
}

.col,
.col-1,
.col-10,
.col-11,
.col-12,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
}
</style>
