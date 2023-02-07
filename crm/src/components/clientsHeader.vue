<template>
    <header class="header">
        <div class="hedear__container ">
            <div class="container flex">
                <a href="#" class="header__link">
                    <div class="header__link-logo flex">
                        skb.
                    </div>
                </a>

                <nav class="header__nav flex nav">
                    <input type="search" v-model="value" placeholder="Введите запрос" class="nav__search">
                </nav>
            </div>

        </div>
    </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {

    data() {
        return {
            value: this.searchValue,
        };



    },

    methods: {
        ...mapMutations(['updateFilteredClients', 'updateSearchValue']),
        loadValue() {
            clearTimeout(this.loadProductsTimer),

                this.loadProductsTimer = setTimeout(() => {
                    this.updateFilteredClients(this.value);
                    this.updateSearchValue(this.value);
                }, 300);
        },

    },

    computed: {
        ...mapGetters(['loadingProcess'])
    },

    watch: {

        value() {
            this.loadValue()
        },

    },

}

</script>