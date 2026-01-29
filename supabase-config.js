// supabase-config.js
const SUPABASE_URL = 'https://pokwxlbntoxoxogptned.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pu4aBS3wXF2e3ckgENTt4g_9_HvSG_v';

console.log('正在加载Supabase配置...');
console.log('URL:', SUPABASE_URL);
console.log('密钥长度:', SUPABASE_PUBLISHABLE_KEY.length);

try {
    // 初始化Supabase客户端
    const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
    console.log('Supabase客户端创建成功');
    
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
    
    // 导出函数
    window.supabaseAuth = {
        validateStudent,
        checkAccess,
        supabase
    };
    
    console.log('window.supabaseAuth已设置');
    console.log('可用方法:', Object.keys(window.supabaseAuth));
    
} catch (error) {
    console.error('初始化Supabase失败:', error);
    window.supabaseAuth = null;
}
