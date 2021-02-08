<template>
<!--  第一个  -->
    <div>
        <h2>记事本管理</h2>
        <h4>创建记事本</h4>
        <el-input v-model="title" placeholder="请输入标题" class="input1"/>
        <el-input v-model="text"  placeholder="请输入内容" type="textarea" :rows="10" class="input1"/>
        <el-button type="success" id="submit" @click="save()">保存内容</el-button>
        <hr>
        <h4>记事本操作</h4>
        <el-input v-model="search" placeholder="输入标题自动搜索" class="input2"/>
        <el-input v-model="code" placeholder="输入指令执行" class="input2"/>
        <el-button type="primary" id="select" @click="select()">执行指令</el-button>
        <el-table class="table" v-if="flag === 1" :data="tableSearchData">
            <el-table-column label="文件名" prop="title"></el-table-column>
            <el-table-column label="文件内容" prop="text"></el-table-column>
            <el-table-column label="创建时间" prop="date"></el-table-column>
        </el-table>
        <el-table class="table" v-if="flag === 0" :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))">
            <el-table-column label="文件名" prop="title"></el-table-column>
            <el-table-column label="文件内容" prop="text"></el-table-column>
            <el-table-column label="创建时间" prop="date"></el-table-column>
        </el-table>
    </div>
</template>

<style scoped>
    /*第一个*/
    .table {
        width: 50%;
        margin-left: 25vw;
        border: #bbbbbb solid 1px;
        border-radius: 10px;
    }
    .input1{
        width: 50%;
        margin-left: 25vw;
        margin-bottom: 10px;
        display: block;
    }
    .input2{
        width: 20%;
        margin-bottom: 10px;
        margin-right: 5px;
    }
    #submit{
        display: block;
        margin-left: 46.5%;
    }
    #select{
        margin-right: 10px;
    }
</style>

<script>
    export default {
        name: 'Table',
        data() {
            return {
                tableData: [],
                tableSearchData: [],
                title: '',
                text: '',
                date: new Date(),
                search: '',
                code: '',
                flag: 0
            }
        },
        methods: {
            save() {
                let month = this.date.getMonth() + 1;
                let newData = {
                    title: this.title,
                    text: this.text,
                    date: this.date.getFullYear() + '-' +
                        month + '-' + this.date.getDate() + ' ' + this.date.getHours() + ':' + this.date.getMinutes() + ':' +
                        this.date.getSeconds()
                }
                this.tableData.unshift(newData)
            },
            select() {
                if (this.code[0] === 'v' || this.code[0] === 'V') {
                    this.tableSearchData = [];
                    this.tableSearchData.push(this.tableData[parseInt(this.code[1]) - 1])
                    this.flag = 1;
                } else {
                    this.flag = 0;
                    if (this.code[0] === 'd' || this.code[0] === 'D') {
                        this.tableData.splice(parseInt(this.code[1]) - 1, 1)
                    } else if (this.code === 'exit') {
                        this.$router.push({path: '/Exit'})
                    }
                }
            }
        },
    }
</script>
