// supabase-config.js
const SUPABASE_URL = 'https://pokwxlbntoxoxogptned.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_pu4aBS3wXF2e3ckgENTt4g_9_HvSG_v';

console.log('正在加载Supabase配置...');

// 检查是否已经存在supabaseAuth，避免重复初始化
if (window.supabaseAuth && window.supabaseAuth._initialized) {
    console.log('Supabase已经初始化，跳过...');
} else {
    try {
        // 创建唯一的存储键
        const storageKey = `supabase-auth-student-test-${Date.now()}`;
        console.log('使用存储键:', storageKey.substring(0, 20) + '...');
        
        // 初始化Supabase客户端
        const supabase = window.supabase.createClient(
            SUPABASE_URL, 
            SUPABASE_PUBLISHABLE_KEY,
            {
                auth: {
                    autoRefreshToken: false,  // 禁用自动刷新
                    persistSession: false,    // 禁用会话持久化
                    detectSessionInUrl: false, // 禁用URL检测
                    storageKey: storageKey     // 唯一存储键
                },
                db: {
                    schema: 'public'
                },
                global: {
                    headers: {
                        'x-application-name': 'student-civic-test'
                    }
                }
            }
        );
        
        console.log('Supabase客户端创建成功');
        
        // 学生验证函数
        async function validateStudent(name, password) {
            console.log('验证学生:', name);
            
            try {
                const { data, error } = await supabase
                    .from('students')
                    .select('*')
                    .eq('name', name)
                    .single();
                
                if (error) {
                    console.error('查询学生失败:', error);
                    return null;
                }
                
                if (data.password !== password) {
                    console.log('密码不匹配');
                    return null;
                }
                
                console.log('学生验证成功');
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
            supabase,
            _initialized: true,
            _storageKey: storageKey
        };
        
        console.log('window.supabaseAuth已设置');
        
    } catch (error) {
        console.error('初始化Supabase失败:', error);
        // 降级方案
        window.supabaseAuth = {
            validateStudent: async () => null,
            checkAccess: () => ({ valid: false, daysLeft: 0 }),
            _initialized: false,
            _error: error.message
        };
    }
}
