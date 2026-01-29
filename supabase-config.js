// Supabase配置 - 使用新的密钥格式
const SUPABASE_URL = 'https://pokwxlbntoxoxogptned.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pu4aBS3wXF2e3ckgENTt4g_9_HvSG_v';

// 初始化Supabase客户端
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// 学生验证函数
async function validateStudent(name, password) {
    console.log('验证学生:', name);
    
    try {
        // 从数据库查询学生
        const { data, error } = await supabase
            .from('students')
            .select('*')
            .eq('name', name)
            .single();
        
        if (error) {
            console.error('查询学生失败:', error);
            
            // 如果是表不存在错误，尝试创建表
            if (error.code === 'PGRST116') {
                console.log('students表不存在，请先在Supabase中创建表');
                return null;
            }
            
            return null;
        }
        
        // 检查密码
        if (data.password !== password) {
            console.log('密码不匹配');
            return null;
        }
        
        console.log('学生验证成功:', data);
        return data;
        
    } catch (error) {
        console.error('验证学生异常:', error);
        return null;
    }
}

// 检查学生访问权限
function checkAccess(student) {
    if (!student.timer) {
        return { valid: true, daysLeft: -1 };
    }
    
    const expiryDate = new Date(student.timer);
    const currentDate = new Date();
    
    if (expiryDate < currentDate) {
        return { 
            valid: false, 
            daysLeft: 0,
            message: `Votre période d'accès a expiré le ${expiryDate.toLocaleDateString('fr-FR')}` 
        };
    } else {
        const timeDiff = expiryDate - currentDate;
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
        return { 
            valid: true, 
            daysLeft: daysLeft,
            expiryDate: expiryDate
        };
    }
}

// 测试连接
async function testSupabaseConnection() {
    try {
        const { data, error } = await supabase
            .from('students')
            .select('count', { count: 'exact', head: true });
        
        if (error) {
            console.warn('Supabase连接测试失败:', error);
            return false;
        }
        
        console.log('Supabase连接成功');
        return true;
    } catch (error) {
        console.error('Supabase连接异常:', error);
        return false;
    }
}

// 导出函数
window.supabaseAuth = {
    validateStudent,
    checkAccess,
    supabase,
    testConnection: testSupabaseConnection
};

console.log('Supabase配置已加载');
console.log('URL:', SUPABASE_URL);
console.log('密钥格式: Publishable key');
