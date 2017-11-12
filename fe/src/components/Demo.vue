<template>

  <q-list highlight>
    <div class="row">
      <div class="col-2">
        <q-field
          icon="help"
          helper="ID"
        >
          <q-input v-model="id"></q-input>
        </q-field>
      </div>
      <div class="col-8">
        <q-field
          helper="Message"
        >
        <q-input v-model="contents"></q-input>
        </q-field>
      </div>
      <div class="col-2">
        <q-btn icon="create" @click="handleSubmit">Save</q-btn>
      </div>
    </div>
    <q-list-header>Recent message objects</q-list-header>
    <q-item v-for="(contents, id) in messages" :key="id">
      <q-item-side>
        <q-item-tile icon="done"></q-item-tile>
      </q-item-side>
      <q-item-main>
        <q-item-tile label>{{ contents }} [{{id}}]</q-item-tile>
        <q-item-tile sublabel>This is only a test!</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</template>

<script>
  import {
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemTile,
    QItemMain,
    QItemSeparator,
    QField,
    QInput,
    QBtn
  } from 'quasar'

  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Demo',

    components: {
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemTile,
      QItemMain,
      QItemSeparator,
      QField,
      QInput,
      QBtn
    },

    data () {
      return {
        id: '',
        contents: ''
      }
    },

    computed: {
      ...mapGetters({
        messages: 'getMessages'
      })
    },

    methods: {
      ...mapActions([
        'fetchMessages',
        'submitMessage'
      ]),
      handleSubmit () {
        this.submitMessage({
          id: parseInt(this.id),
          contents: this.contents
        })
        this.id = ''
        this.contents = ''
      }
    },

    mounted () {
      this.fetchMessages()
    }
  }
</script>
