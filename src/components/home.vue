<template>
  <div class="container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.row)"
            >操作</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { get, post } from "../service/api";

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const handleEdit = (data) => {
  console.log(data);
};

const fetchData = () => {
  get("/data")
    .then((data) => {
      // 处理成功的回调
      console.log(data);
    })
    .catch((error) => {
      // 处理错误的回调
      console.error(error);
    });
};

const postData = () => {
  const data = { key: "value" };
  post("/submit", data)
    .then((response) => {
      // 处理成功的回调
      console.log(response);
    })
    .catch((error) => {
      // 处理错误的回调
      console.error(error);
    });
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
