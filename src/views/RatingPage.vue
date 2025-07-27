<template>
    <div class="rating-page">
      <main class="container">
        <h1 class="page-title">Functional score</h1>
        
        <div class="rating-card">
          <div class="rating-item" v-for="(item, index) in ratingItems" :key="index">
            <div class="rating-header">
              <span class="rating-label">{{ item.label }}</span>
              <span class="rating-value">{{ item.score }}</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="5" 
              v-model.number="item.score"
              class="rating-slider"
            >
            <div class="rating-tips">
              <span>1（bad）</span>
              <span>5（good）</span>
            </div>
          </div>
          
          <button class="submit-btn" @click="submitRating">Submit rating</button>
        </div>
      </main>
      
      <!-- <Footer /> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ratingItems: [
          { label: 'Health Resource Center View Resources', score: 3 },
          { label: 'Community Interaction', score: 3 },
          { label: 'Health Facts', score: 3 }
        ]
      }
    },
    methods: {
      submitRating() {
        // 这里可以添加提交评分的API调用
        alert('Success！')
      }
    }
  }
  </script>
  
  <style scoped>
  .rating-card {
    background: #fff;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    margin: 1rem 0;
  }
  
  .rating-item {
    margin-bottom: 2rem;
  }
  
  .rating-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .rating-label {
    font-size: 1.1rem;
    color: #333;
  }
  
  .rating-value {
    font-weight: bold;
    color: #42b983;
  }
  
  .rating-slider {
    width: 100%;
    height: 6px;
    border-radius: 5px;
    background: #ddd;
    outline: none;
    -webkit-appearance: none;
  }
  
  .rating-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #42b983;
    cursor: pointer;
    -webkit-transition: background .3s;
    transition: background .3s;
  }
  
  .rating-slider::-webkit-slider-thumb:hover {
    background: #369c6b;
  }
  
  .rating-tips {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.3rem;
  }
  
  .submit-btn {
    background: #42b983;
    color: white;
    border: none;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
    display: block;
    margin: 2rem auto 0;
  }
  
  .submit-btn:hover {
    background: #369c6b;
  }
  </style>