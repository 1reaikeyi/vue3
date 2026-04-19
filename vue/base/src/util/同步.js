import {defineStore} from 'pinia'
import {computed, ref} from "vue";

export  const useCountStore = defineStore('counter',()=>{
    const count = ref(0)
    const message = ref('pinia')
    // function
    const add = () => {count.value++}
    // compute
    const compluteTwo = computed(() => count.value + 2)
    return {
        count,
        message,
        compluteTwo,
        add
    }
})