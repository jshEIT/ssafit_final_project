import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from 'axios'
import router from '@router'

const REST_API = 'http://localhost:8080/board'

export const useBoardStore = defineStore('board', () => {

    const boardList = ref([])

    const getBoardList = () => {
        axios({
            url : REST_API,
            method : "GET",
        })
          .then((res) => {
            boardList.value = res.data
          })
          .catch((err) => {
            console.log(err)
            alert("서버 에러")
          })
    }

    const articleList = ref([])

    const getArticleList = (boardId) => {
        axios({
            url : `${REST_API}/${boardId}`,
            method : "GET",
        })
          .then((res) => {
            articleList.value = res.data
          })
          .catch((err) => {
            console.log(err)
            alert("서버 에러")
          })
    }

    return {
        boardList,
        getBoardList,
        articleList,
        getArticleList,
    }
})