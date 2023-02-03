<template>
    <section class="changing window">
        <div class="changing__blackout window__blackout flex">
            <div class="changing__block window__block flex">

                <div class="changing__top window__top flex">
                    <div class="changing__top-text window__top-text flex">
                        <h2 class="changing__title window__title text-black-main">
                            Изменить данные
                        </h2>
                        <p class="changing__id window__id text-gray-main">ID: {{ clientId }}</p>
                    </div>

                    <button class="changing__close-btn window__close-btn btn-reset" @click="doClose()">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2332 7.73333L21.2665
                               6.76666L14.4998 13.5334L7.73318 6.7667L6.76652 7.73336L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 
                                  15.4667L21.2665 22.2334L22.2332 21.2667L15.4665 14.5L22.2332 7.73333Z" />
                        </svg>
                    </button>
                </div>

                <form action="" @submit.prevent="chagingClient()" class="creating__form window__form  form flex">
                    <div class="form__names">


                        <label for="lastname" class="form__label form__label-lastname">
                            <p class="label-text text-gray-main">
                                Фамилия*
                            </p>
                            <input v-model="lastName" type="text"
                                class="text-black-main form__input form__input-lastname" placeholder="Фамилия*">
                        </label>
                        <label for="name" class="form__label form__label-name">
                            <p class="label-text text-gray-main">
                                Имя*
                            </p>
                            <input v-model="name" type="text" class="text-black-main form__input form__input-name"
                                placeholder="Имя*">
                        </label>
                        <label for="surname" class="form__label form__label-surname">
                            <p class="label-text text-gray-main">
                                Отчество
                            </p>
                            <input v-model="surname" type="text" class="text-black-main form__input form__input-surname"
                                placeholder="Отчество">
                        </label>
                    </div>
                    <div class="form__contact-block added-paddings flex">
                        <label v-for="item in contactsArr" :key="item.id" :id="'label-' + item.id" for="contact"
                            class="form__contact-label flex input-group">

                            <select v-model="item.type" :name="'select-contact'" class="form__select-contact">

                                <option :value="contactType.value" :name="'select-contact-' + contactType.id"
                                    v-for="contactType of contactTypes" :key="contactType.id">
                                    {{ contactType.value }}
                                </option>

                            </select>
                            <input type="text" v-model="item.value" name="contact" class="form__input-contact "
                                placeholder="Введите данные контакта" required>

                            <button v-if="item.id - 1 == contactsArr.length"
                                @click.prevent="contactFormRemove(item.id - 1)"
                                class="form__contact-remove-btn btn-reset">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_224_6681)">
                                        <path
                                            d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z"
                                            fill="#B0B0B0" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_224_6681">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>

                        </label>

                        <button v-if="contactsArr.length < 8" @click.prevent="contactFormAdd"
                            class="form__add-contact btn-reset text-black-main">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_224_4420)">
                                    <path
                                        d="M7.99998 4.66665C7.63331 4.66665 7.33331 4.96665 7.33331 5.33331V7.33331H5.33331C4.96665 7.33331 4.66665 7.63331 4.66665 7.99998C4.66665 8.36665 4.96665 8.66665 5.33331 8.66665H7.33331V10.6666C7.33331 11.0333 7.63331 11.3333 7.99998 11.3333C8.36665 11.3333 8.66665 11.0333 8.66665 10.6666V8.66665H10.6666C11.0333 8.66665 11.3333 8.36665 11.3333 7.99998C11.3333 7.63331 11.0333 7.33331 10.6666 7.33331H8.66665V5.33331C8.66665 4.96665 8.36665 4.66665 7.99998 4.66665ZM7.99998 1.33331C4.31998 1.33331 1.33331 4.31998 1.33331 7.99998C1.33331 11.68 4.31998 14.6666 7.99998 14.6666C11.68 14.6666 14.6666 11.68 14.6666 7.99998C14.6666 4.31998 11.68 1.33331 7.99998 1.33331ZM7.99998 13.3333C5.05998 13.3333 2.66665 10.94 2.66665 7.99998C2.66665 5.05998 5.05998 2.66665 7.99998 2.66665C10.94 2.66665 13.3333 5.05998 13.3333 7.99998C13.3333 10.94 10.94 13.3333 7.99998 13.3333Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_224_4420">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Добавить контакт
                        </button>
                    </div>
                    <div class="form_bottom flex">
                        <p v-if="addingDataError" class="form__error-message flex">
                        <ul class="form__errors-list list-style">
                            <li class="form__errors-item" v-for="error of errorsArr" :key="error">
                                {{ error.message }}</li>
                        </ul>
                        </p>
                        <button class="form__save-btn btn btn-reset flex">
                            <svg v-if="addingData" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_224_6260)">
                                    <path
                                        d="M3.00008 8.03996C3.00008 10.8234 5.2566 13.08 8.04008 13.08C10.8236 13.08 13.0801 10.8234 13.0801 8.03996C13.0801 5.25648 10.8236 2.99996 8.04008 2.99996C7.38922 2.99996 6.7672 3.1233 6.196 3.348"
                                        stroke="#B89EFF" stroke-width="2" stroke-miterlimit="10"
                                        stroke-linecap="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_224_6260">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Сохранить</button>
                        <button @click.prevent="doClose" class="form__delete-client-btn btn-reset">Отмена</button>
                    </div>

                </form>


            </div>
        </div>
    </section>

</template>

<script>
import contactTypes from '@/data/contactTypes';
import axios from 'axios';
import API_BASE_URL from "@/config";


export default {
    data() {

        return {
            clientData: [],


            clientId: '',
            createdAt: '',
            updatedAt: '',
            name: '',
            surname: '',
            lastName: '',

            contactTypes,
            contactsArr: [],
            contactsId: 0,

            addingData: false,
            addingDataError: false,

            errorsArr: [],

        }
    },
    props: { open: { type: Boolean }, id: { type: String }, },
    methods: {
        chagingClient() {
            this.addingData = true;
            this.addingDataError = false;
            return axios.patch(API_BASE_URL + '/api/clients/' + this.id, {
                createdAt: this.createdAt,
                updatedAt: this.updatedAt,
                name: this.name,
                surname: this.surname,
                lastName: this.lastName,
                contacts: this.contactsArr,
            })
                .then(
                    // временная затычка пока не смогу сделать стор
                    setTimeout(function () {
                        location.reload();
                    }, 300)
                )
                .catch(
                    (answer) => { this.errorsArr = answer.response.data.errors },
                    this.addingDataError = true,
                )
                .then(
                    this.addingData = false,
                );

        },

        loadClient() {

            this.removingData = true;
            this.removingDataError = false;
            return axios.get(API_BASE_URL + '/api/clients/' + this.id)
                .then((response) => {

                    this.clientId = response.data.id,
                        this.name = response.data.name,
                        this.surname = response.data.surname,
                        this.lastName = response.data.lastName,
                        this.contactsArr = this.addId(response.data.contacts)
                })
                .catch((answer) => { return answer.response.data.errors },
                    this.removingDataError = true)
                .then(this.removingData = false,
                );

        },

        CreateId(arr) {
            let max = 0;
            for (const item of arr) {

                if (item.id >= max) { max = item.id; }

            }
            return max + 1;
        },
        addId(array) {
            let localId = 0;
            array.forEach((elem) => {
                elem.id = localId;
                localId += 1;
            });
            return array
        },
        contactFormAdd() {
            this.contactsId = this.CreateId(this.contactsArr);
            this.contactsArr.push({ id: this.CreateId(this.contactsArr), type: 'Телефон', value: '' });

        },
        contactFormRemove(labelId) {
            this.contactsArr.splice(labelId, 1);
        },
        doClose() {
            this.$emit('update:open', false);
            this.contactsArr = [];
        },
    },
    computed: {




    },
    created() {
        this.loadClient();
        this.contactsArr = this.addId(this.contactsArr);
        console.log(this.contactsArr)
    },
}
</script>
