<template>

  <div class="">
    <header class="header">
      <div class="hedear__container ">
        <div class="container flex">
          <a href="#" class="header__link">
            <div class="header__link-logo flex">
              skb.
            </div>
          </a>

          <nav class="header__nav flex nav">
            <input type="search" placeholder="Введите запрос" class="nav__search">
          </nav>
        </div>

      </div>
    </header>
    <main class="main">
      <section class="clients">
        <div class="container">
          <div class="clients__overflow">
            <h1 class="clients__title section__title">
              Клиенты
            </h1>
            <div class="clients__content" data-simplebar>
              <!-- таблица с клиентами -->

              <clientsTable :clients-info="clientsObj" :loading-data="loadingData"
                :loading-data-error="loadingDataError" />

              <!-- блок со спиннером загрузки страницы -->
              <div class="clients__table-loading flex">
                <svg v-if="loadingData" class="clients__table-loading-weel " width="40" height="40" viewBox="0 0 40 40"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 20C2 29.941 10.059 38 20 38C29.941 38 38 29.941 38 20C38 10.059 29.941 2 20 2C17.6755 2 15.454 2.4405 13.414 3.243"
                    stroke="#9873FF" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>

              </div>
            </div>
          </div>

          <form action="" class="clients__form form flex" @submit.prevent="openCreateWindow()">
            <div class="form__shape">
              <button class="form__btn btn-reset btn">
                <svg class="form__btn-svg" width="23" height="16" viewBox="0 0 23 16" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" />
                </svg>
                Добавить клиента
              </button>
            </div>
          </form>
        </div>
      </section>
      <Teleport to="#show-window">
        <clientsAddWindow v-model:open="addButtonActive" />
      </Teleport>



    </main>

  </div>



</template>

<script>
// import { mapState, mapGetters } from 'vuex';
import clientsAddWindow from '@/components/clientsAddWindow.vue';
import clientsTable from '@/components/clientsTable.vue';
// import axios from 'axios';
// import API_BASE_URL from '@/config';

export default {

  data() {
    return {
      // clientsData: [],

      addButtonActive: false,

      loadingData: false,
      loadingDataError: false,
    }
  },

  methods: {



    openCreateWindow() {
      console.log('произошло нажатие на кнопку добавления клиента')
      this.addButtonActive = true;
    },

    // loadClients() {
    //   this.loadingData = true;
    //   this.loadingDataError = false;
    //   return axios.get(API_BASE_URL + '/api/clients')
    //     .then((response) => this.clientsData = response.data)
    //     .catch(this.loadingDataError = true)
    //     .then(this.loadingData = false);

    // },

  },
  computed: {
    // ...mapState({ clientsStore: 'clients' }),
    // ...mapGetters({ clientsObj: 'allClients' }),

    clients() {

      return this.clientsData;

    },

  },

  created() {
  //   this.allClients();
  },

  components: { clientsTable, clientsAddWindow },
}
</script>

