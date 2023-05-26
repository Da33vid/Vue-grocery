<template>
  <div v-if="product" class="product">
    <div class="product-info">
      <h1>{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <span>{{ product.price }}€</span>
    </div>
    <div class="product-image">
      <img :src="product.thumbnail" alt="Product thumbnail" />
    </div>
  </div>
</template>

<script>
import data from '../json/products.json';

const products = data.products;

export default {
  name: "ProductView",
  props: ['id'],
  computed: {
    product() {
      return products.find(product => product.id === parseInt(this.id));
    }
  }
};
</script>

<style scoped lang="scss">
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  padding: 2rem;
  margin: 2rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);

}

.product-info,
.product-image {
  flex: 1;
}

h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
