<template>
  <div>
    <p>PRODUCT Component</p>
    <table class="table border-2 w-50">
        <caption>Table</caption>
      <tr>
        <th>ProductName</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Payable Amount</th>
      </tr>
      <tr v-for="item in product" :key="item.pname">
        <td>
          {{ item.pname }}
        </td>
        <td>
          {{ item.price }}
        </td>
        <td>
          {{ item.qty }}
        </td>
        <td>
          {{ discount(item.price) }}
        </td>
      </tr>
    </table>
    <ProductlistComp :list="product"/>
  </div>
</template>

<script>
import ProductlistComp from "./ProductlistComp.vue";
export default {
  components: { ProductlistComp },
  data() {
    return {
      product: [
        { pname: "Mobile", price: "10000", qty: "5" },
        { pname: "laptop", price: "25000", qty: "10" },
        { pname: "Charger", price: "500", qty: "15" },
      ],
      discount(a) {
        return a - (a * 5) / 100;
      },
    };
  },
};
</script>

<style>
</style>