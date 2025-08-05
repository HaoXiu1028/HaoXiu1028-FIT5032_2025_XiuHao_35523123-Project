<!-- <template>
    <div class="add-book-container">
        <div class="form-wrapper">
            <h1>添加书籍</h1>
            <form @submit.prevent="addBook">
                <div class="form-group">
                    <label for="isbn">ISBN:</label>
                    <input type="text" v-model="isbn" id="isbn" required placeholder="请输入书籍的 ISBN" />
                </div>
                <div class="form-group">
                    <label for="name">书名:</label>
                    <input type="text" v-model="name" id="name" required placeholder="请输入书籍的名称" />
                </div>
                <button type="submit" class="submit-btn">添加书籍</button>
            </form>
        </div>
        <div class="book-list-wrapper">
          <BookList />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';

import BookList from '../components/BookList.vue';

export default {
    components: {
        BookList
    },
    setup() {
        const isbn = ref('');
        const name = ref('');

        const addBook = async () => {
            if (!isbn.value || !name.value) {
                alert('ISBN 和书名不能为空');
                return;
            }

            try {
                const isbnNumber = Number(isbn.value);
                if (isNaN(isbnNumber)) {
                    alert('ISBN 必须是一个有效的数字');
                    return;
                }

                await addDoc(collection(db, 'books'), {
                    isbn: isbnNumber,
                    name: name.value
                });

                isbn.value = '';
                name.value = '';
                alert('书籍添加成功！');
            } catch (error) {
                console.error('添加书籍时出错: ', error);
                alert('添加书籍失败，请查看控制台获取更多信息。');
            }
        };
        
        return {
            isbn,
            name,
            addBook
        };
    }
};
</script>

<style scoped>
.add-book-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 40px;
    gap: 40px; /* 在表单和列表之间添加一些间距 */
    background-color: #f4f7f6;
    min-height: 100vh;
}

.form-wrapper {
    max-width: 400px;
    width: 100%;
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
}

.form-wrapper:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.book-list-wrapper {
    max-width: 500px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 25px;
    font-family: 'Arial', sans-serif;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

input[type="text"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box; /* 确保 padding 不会影响宽度 */
    transition: border-color 0.3s;
}

input[type="text"]:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

.submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

.submit-btn:active {
    transform: translateY(0);
}
</style> -->



<!-- src/views/AddBookView.vue -->

<template>
    <div class="dashboard-container">
        <div class="form-wrapper">
            <h1>添加书籍</h1>
            <form @submit.prevent="addBook">
                <div class="form-group">
                    <label for="isbn">ISBN:</label>
                    <input type="text" v-model="isbn" id="isbn" required placeholder="请输入书籍的 ISBN" />
                </div>
                <div class="form-group">
                    <label for="name">书名:</label>
                    <input type="text" v-model="name" id="name" required placeholder="请输入书籍的名称" />
                </div>
                <button type="submit" class="submit-btn">添加书籍</button>
            </form>
        </div>
        <div class="book-list-wrapper">
          <BookList />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import db from '../firebase/init.js';
import { collection, addDoc } from 'firebase/firestore';

import BookList from '../components/BookList.vue'; // 确保路径正确

export default {
    components: {
        BookList
    },
    setup() {
        const isbn = ref('');
        const name = ref('');

        const addBook = async () => {
            if (!isbn.value || !name.value) {
                alert('ISBN 和书名不能为空');
                return;
            }

            try {
                const isbnNumber = Number(isbn.value);
                if (isNaN(isbnNumber)) {
                    alert('ISBN 必须是一个有效的数字');
                    return;
                }

                await addDoc(collection(db, 'books'), {
                    isbn: isbnNumber,
                    name: name.value
                });

                isbn.value = '';
                name.value = '';
                // 由于 BookList 使用 onSnapshot，添加成功后列表会自动更新，这里的 alert 可以保留或移除
                alert('书籍添加成功！列表将自动更新。');
            } catch (error) {
                console.error('添加书籍时出错: ', error);
                alert('添加书籍失败，请查看控制台获取更多信息。');
            }
        };
        
        return {
            isbn,
            name,
            addBook
        };
    }
};
</script>

<style scoped>
.dashboard-container {
    display: flex;
    flex-direction: column;
    align-items: center; /* 居中对齐 */
    padding: 20px;
    gap: 40px;
    background-color: #f4f7f6;
    min-height: 100vh;
}

.form-wrapper, .book-list-wrapper {
    width: 100%;
    max-width: 800px; /* 增加最大宽度 */
    padding: 30px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 25px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #555;
}

input[type="text"] {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.submit-btn {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}

.submit-btn:hover {
    background-color: #0056b3;
}
</style>