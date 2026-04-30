import { defineStore } from 'pinia'
import { ref, onMounted } from "vue";
import axios from 'axios';

export const useChannelStore = defineStore('channel', () => {
    const channelList = ref([])
    const getChannelList = async () => {
        try {
            const res = await axios.get('http://localhost:8080/channels')
            channelList.value = res.data;
            return res;
        } catch (error) {
            console.error('获取频道失败：', error)
        }
    }

    // 在组件挂载时获取频道列表
    onMounted(() => {
        getChannelList();
    })

    return {
        channelList,  // 频道数据
        getChannelList // 请求方法
    }
})