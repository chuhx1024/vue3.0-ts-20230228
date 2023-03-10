<template>
    <div class="clu-login-container">
        <div class="clu-login-title">后台管理系统</div>
        <el-form
            class="clu-login-form"
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-position="left"
            label-width="70px"
        >
            <el-form-item label="用户名" prop="userName">
                <el-input v-model="ruleForm.userName"  autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="passWord">
                <el-input v-model.number="ruleForm.passWord" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                <el-button type="primary" @click="edit">测试方法</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
    userName: 'admin',
    passWord: '123',
})

const rules = reactive({
    userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            alert(JSON.stringify(ruleForm))
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const edit = () => {
    ruleForm.passWord = '666'
}
</script>

<style lang='less' scoped>
    .clu-login-container {

                 color: #fff;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #404040;

        .clu-login-title {
            text-align: center;
            font-size: 34px;
            font-weight: 500;
            padding-bottom: 20px;
        }
        .clu-login-form {
            width: 30%;

            /deep/.el-form-item__label {
                color: #fff;
            }
        }
    }

</style>
