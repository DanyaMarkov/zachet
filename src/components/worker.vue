<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <div class="menu">
            <label for="surname">Фамилия</label>
            <input
              class="form-control"
              placeholder="Марков"
              id="surname"
              type="text"
              v-model="surname"
            />

            <label for="name">Имя</label>
            <input class="form-control" id="name" placeholder="Даниил" type="text" v-model="name" />

            <label for="patronymic">Отчество</label>
            <input
              class="form-control"
              placeholder="Андреевич"
              id="patronymic"
              type="text"
              v-model="patronymic"
            />

            <label for="otdel">Отдел</label>
            <select class="form-control" placeholder="Отдел продаж" id="otdel" v-model="otdel">
              <option selected>IT отдел</option>
              <option>Отдел продаж</option>
              <option>Отдел доставки</option>
              <option>Юридический отдел</option>
            </select>

            <button class="btn btn-info" v-on:click="onSave()">Добавить</button>
          </div>

          <div class="change">
            <label for="changeid">id</label>
            <input
              class="form-control"
              id="changeid"
              placeholder="2"
              type="text"
              v-model="changeid"
            />

            <label for="changesurname">Фамилия</label>
            <input
              class="form-control"
              id="changesurname"
              placeholder="Марков"
              type="text"
              v-model="changesurname"
            />

            <label for="changename">Имя</label>
            <input
              class="form-control"
              id="changename"
              placeholder="Даниил"
              type="text"
              v-model="changename"
            />

            <label for="changepatronymic">Отчество</label>
            <input
              placeholder="Андреевич"
              class="form-control"
              id="changepatronymic"
              type="text"
              v-model="changepatronymic"
            />

            <label for="changeotdel">Отдел</label>
            <select class="form-control" v-model="changeotdel" id="changeotdel">
              <option>IT отдел</option>
              <option>Отдел продаж</option>
              <option>Отдел доставки</option>
              <option>Юридический отдел</option>
            </select>

            <button class="btn btn-info" v-on:click="onChange()">Изменить по id</button>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div class="book">
            <h1>Сотрудники</h1>
            <div class="row">
              <div class="col-1">id</div>
              <div class="col-2">Фамилия</div>
              <div class="col-2">Имя</div>
              <div class="col-3">Отчество</div>
              <div class="col-4">Отдел</div>
            </div>
            <hr />
            <div class="row" v-for="worker in workers" :key="worker.id">
              <div class="col-1">{{worker.id}}</div>
              <div class="col-2">{{worker.surname}}</div>
              <div class="col-2">{{worker.name}}</div>
              <div class="col-3">{{worker.patronymic}}</div>
              <div class="col-4">{{worker.otdel}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "App",
  data() {
    return {
      workers: [],
      surname: "",
      name: "",
      patronymic: "",
      otdel: ""
    };
  },

  components: {},
  methods: {
    async onSave() {
      let worker = {
        surname: this.surname,
        name: this.name,
        patronymic: this.patronymic,
        otdel: this.otdel
      };
      try {
        await this.$http.post("http://localhost:3000/workers", worker);
        this.updateData();
      } catch (err) {
        console.error(err);
      }
    },

    async onChange() {
      let change = {
        surname: this.changesurname,
        name: this.changename,
        patronymic: this.changepatronymic,
        otdel: this.changeotdel
      };
      try {
        await this.$http.put(
          "http://localhost:3000/workers" + "/" + this.changeid,
          change
        );
        this.updateData();
      } catch (err) {
        console.error(err);
      }
    },

    async updateData() {
      try {
        await this.$http
          .get("http://localhost:3000/workers")
          .then(res => res.json())
          .then(res => (this.workers = res));
      } catch (e) {
        console.error(e);
      }
    }
  },
  created() {
    this.updateData();
  }
};
</script>
