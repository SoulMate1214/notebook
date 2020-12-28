<template>
    <!--  第一个  -->
    <!--    <div>-->
    <!--        <h2>记事本管理</h2>-->
    <!--        <h4>创建记事本</h4>-->
    <!--        <el-input v-model="title" placeholder="请输入标题" class="input1"/>-->
    <!--        <el-input v-model="text"  placeholder="请输入内容" type="textarea" :rows="10" class="input1"/>-->
    <!--        <el-button type="success" id="submit" @click="save()">保存内容</el-button>-->
    <!--        <hr>-->
    <!--        <h4>记事本操作</h4>-->
    <!--        <el-input v-model="search" placeholder="输入标题自动搜索" class="input2"/>-->
    <!--        <el-input v-model="code" placeholder="输入指令执行" class="input2"/>-->
    <!--        <el-button type="primary" id="select" @click="select()">执行指令</el-button>-->
    <!--        <el-table class="table" v-if="flag === 1" :data="tableSearchData">-->
    <!--            <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--            <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--            <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--        </el-table>-->
    <!--        <el-table class="table" v-if="flag === 0" :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))">-->
    <!--            <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--            <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--            <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--        </el-table>-->
    <!--    </div>-->

    <!--    第二个-->
    <!--        <div>-->
    <!--            <div style="float: left;width: 49%">-->
    <!--                <el-button type="success" id="submit" @click="save()" class="button">保存内容</el-button>-->
    <!--                <el-input v-model="title" placeholder="请输入标题" class="input"/>-->
    <!--                <el-input v-model="text"  placeholder="请输入内容" type="textarea" :rows="7"/>-->
    <!--            </div>-->
    <!--            <div style="float: right;width: 49%">-->
    <!--                <el-button type="primary" id="select" @click="select()" class="button">执行指令</el-button>-->
    <!--                <el-input v-model="code" placeholder="输入指令执行" class="input"/>-->
    <!--                <el-input v-model="search" placeholder="输入标题自动搜索" class="input"/>-->
    <!--            <el-table class="table" v-if="flag === 1" :data="tableSearchData">-->
    <!--                <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--                <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--                <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--            </el-table>-->
    <!--            <el-table class="table" v-if="flag === 0" :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))">-->
    <!--                <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--                <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--                <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--            </el-table>-->
    <!--            </div>-->
    <!--        </div>-->

    <!--    第三个-->
    <!--            <div>-->
    <!--                <el-button type="primary" id="submit" @click="save()" class="button">保存内容</el-button>-->
    <!--                <el-input v-model="title" placeholder="请输入标题" class="input"/>-->
    <!--                <el-input v-model="text"  placeholder="请输入内容" type="textarea" :rows="7"/>-->
    <!--                <el-button type="primary" id="select" @click="select()" class="button">执行指令</el-button>-->
    <!--                <el-input v-model="code" placeholder="输入指令执行" class="input"/>-->
    <!--                <el-input v-model="search" placeholder="输入标题自动搜索" class="input"/>-->
    <!--                <el-table class="table" v-if="flag === 1" :data="tableSearchData">-->
    <!--                    <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--                    <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--                    <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--                </el-table>-->
    <!--                <el-table class="table" v-if="flag === 0" :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))">-->
    <!--                    <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--                    <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--                    <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--                </el-table>-->
    <!--            </div>-->

    <!--    第四个-->
    <!--    <div>-->
    <!--        <el-menu-->
    <!--                :default-active="activeIndex2"-->
    <!--                class="el-menu-demo"-->
    <!--                mode="horizontal"-->
    <!--                @select="handleSelect"-->
    <!--                background-color="#545c64"-->
    <!--                text-color="#fff"-->
    <!--                active-text-color="#ffd04b">-->
    <!--            <el-menu-item index="1" @click="save()">保存内容</el-menu-item>-->
    <!--            <el-menu-item index="2" @click="select()">执行指令</el-menu-item>-->
    <!--        </el-menu>-->
    <!--        标题：-->
    <!--        <el-input v-model="title" placeholder="请输入标题" class="input"/>-->
    <!--        <el-input v-model="text"  placeholder="请输入内容" type="textarea" :rows="7"/>-->
    <!--        <hr>-->
    <!--        搜素：-->
    <!--        <el-input v-model="search" placeholder="输入标题自动搜索" class="input"/>-->
    <!--        指令：-->
    <!--        <el-input v-model="code" placeholder="输入指令执行" class="input"/>-->
    <!--        <el-table class="table" v-if="flag === 1" :data="tableSearchData">-->
    <!--            <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--            <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--            <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--        </el-table>-->
    <!--        <el-table class="table" v-if="flag === 0"-->
    <!--                  :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))">-->
    <!--            <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--            <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--            <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--        </el-table>-->
    <!--    </div>-->

    <!--    第五个-->
    <!--    <div>-->
    <!--        <el-row class="tac">-->
    <!--            <el-col :span="18">-->
    <!--                <el-menu default-active="1"-->
    <!--                        class="el-menu-vertical-demo"-->
    <!--                        @open="handleOpen"-->
    <!--                        @close="handleClose"-->
    <!--                        background-color="#545c64"-->
    <!--                        text-color="#fff"-->
    <!--                        active-text-color="#ffd04b">-->
    <!--                    <el-submenu index="1">-->
    <!--                        <template slot="title">-->
    <!--                            <i class="el-icon-document"></i>-->
    <!--                            <span>添加内容</span>-->
    <!--                        </template>-->
    <!--                        <el-input v-model="title" placeholder="请输入标题" class="input"/>-->
    <!--                        <el-input v-model="text" placeholder="请输入内容" type="textarea" :rows="7"/>-->
    <!--                        <el-menu-item index="1" @click="save()">保存内容</el-menu-item>-->
    <!--                    </el-submenu>-->
    <!--                    <el-submenu index="2">-->
    <!--                        <template slot="title">-->
    <!--                            <i class="el-icon-menu"></i>-->
    <!--                            <span>表格操作</span>-->
    <!--                        </template>-->
    <!--                        <el-input v-model="search" placeholder="输入标题自动搜索" class="input"/>-->
    <!--                        <el-input v-model="code" placeholder="输入指令执行" class="input"/>-->
    <!--                        <el-menu-item index="2" @click="select()">执行指令</el-menu-item>-->
    <!--                    </el-submenu>-->
    <!--                </el-menu>-->
    <!--            </el-col>-->
    <!--        </el-row>-->
    <!--        <div>-->
    <!--            <el-table class="table" v-if="flag === 1" :data="tableSearchData">-->
    <!--                <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--                <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--                <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--            </el-table>-->
    <!--            <el-table class="table" v-if="flag === 0"-->
    <!--                      :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))">-->
    <!--                <el-table-column label="文件名" prop="title"></el-table-column>-->
    <!--                <el-table-column label="文件内容" prop="text"></el-table-column>-->
    <!--                <el-table-column label="创建时间" prop="date"></el-table-column>-->
    <!--            </el-table>-->
    <!--        </div>-->
    <!--    </div>-->
</template>

<style scoped>
    /*第一个*/
    /*.table {*/
    /*    width: 50%;*/
    /*    margin-left: 25vw;*/
    /*    border: #bbbbbb solid 1px;*/
    /*    border-radius: 10px;*/
    /*}*/
    /*.input1{*/
    /*    width: 50%;*/
    /*    margin-left: 25vw;*/
    /*    margin-bottom: 10px;*/
    /*    display: block;*/
    /*}*/
    /*.input2{*/
    /*    width: 20%;*/
    /*    margin-bottom: 10px;*/
    /*    margin-right: 5px;*/
    /*}*/
    /*#submit{*/
    /*    display: block;*/
    /*    margin-left: 46.5%;*/
    /*}*/
    /*#select{*/
    /*    margin-right: 10px;*/
    /*}*/

    /*第二个*/
    /*.table {*/
    /*    border: #bbbbbb solid 1px;*/
    /*    border-radius: 10px;*/
    /*}*/
    /*.input{*/
    /*    margin-bottom: 10px;*/
    /*}*/
    /*.button{*/
    /*    margin-bottom: 10px;*/
    /*}*/

    /*第三个*/
    /*.table {*/
    /*    border: #bbbbbb solid 1px;*/
    /*    border-radius: 10px;*/
    /*}*/
    /*.input{*/
    /*    margin-bottom: 10px;*/
    /*}*/
    /*.button{*/
    /*    margin-top: 10px;*/
    /*    margin-bottom: 10px;*/
    /*}*/

    /*第四个*/
    /*.input{*/
    /*    width: 20%;*/
    /*    margin-bottom: 10px;*/
    /*    margin-top:30px;*/
    /*}*/
    /*.table {*/
    /*    border: #bbbbbb solid 1px;*/
    /*    border-radius: 10px;*/
    /*}*/

    /*第五个*/
    /*.tac {*/
    /*    float: left;*/
    /*}*/

    /*.table {*/
    /*    width: 70%;*/
    /*    border: #bbbbbb solid 1px;*/
    /*    border-radius: 10px;*/
    /*}*/
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
