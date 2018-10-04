const app = getApp()
let bgs = `重庆邮电大学团委办公室(以下简称办公室）是共青团重庆邮电大学委员会直属机构之一。是学校团学工作的枢纽与核心，在团委与各校级学生组织之间起到桥梁与枢纽的作用，是所有学生组织中与老师联系最密切的部门，是团委老师的得力助手。办公室负责团委工作的上传下达——向上通过制作团委工作简报《重邮共青团》等，向团中央、团市委汇报学校团学工作动态；向下沟通联系各校级学生组织，传达团委相关工作要求，并针对学生组织相关工作予以监督。参与学生组织各类活动的筹备工作，负责学生活动场地的管理工作，监督并完善团建在线网站的建设。同时，办公室还协助完成学校大型活动的会务，秘书工作，协助完成大学生志愿者暑期“三下乡”社会实践活动，负责各项文件，奖状资料的管理存档工作。`

let xcb = `校团委宣传部是我校团委的重要部门，担负着向学校、校团委各学生组织传达信息的重要任务，是校团委各部门正常工作的基本保证。宣传部是负责全校工作的宣传、报道，传达学校和团委的工作指示，会议通知，对广大团员青年进行思想政治教育、素质教育的宣传工作；负责通过网络、海报、橱窗、等形式开展政治思想教育工作。宣传部以丰富校园文化生活，活跃同学们的第二课堂，丰富广大同学的课余生活为己任，带领各团总支宣传部开展工作。`

let zzb = `重庆邮电大学团委组织部是校团委核心直属部室。组织部以“严谨 高效 励志 笃行”作为部训，协调统筹各学院团总支及基层团支部开展工作。是负责全校共青团的基层组织建设工作、推优入党工作、五四评优表彰工作、开展青年马克思主义培养工程、指导主题团日活动的开展和团支部“活力提升”工程的实施以及开展班级团支部和班委会一体化运行机制改革等工作的职能部门。`

let redrock = `重庆邮电大学“红岩网校工作站”作为学校唯一一个从事互联网产品开发的技术型校级学生组织，学校为其配备了专门的场地和设备。近年来，在校党委的领导下，校团委的指导下，“红岩网校工作站”以围绕学校工作、贴近学生需求、尊重学生创意、发挥学生专长为主线，积极参与“红岩网校”栏目建设和学校网络文化建设工作。`


Page({
    data: {
        height: '70rpx',
        selected: '校团委办公室',
        current: 0,
        pullIcon: '../../img/PullTop.png',
        src: {
            src_1: "../../img/icon1_on.png",
            src_2: "../../img/icon2.png",
            src_3: "../../img/icon3.png"
        },
        orgnazition: [{
            name: "校团委办公室",
            logo: "../../img/gongqingtuan_banner.png",
            dec: bgs
        }, {
            name: "校团委组织部",
            logo: '../../img/gongqingtuan_banner.png',
            dec: zzb
        }, {
            name: "校团委宣传部",
            logo: '../../img/gongqingtuan_banner.png',
            dec: xcb
        }, {
            name: "校学生会",
            logo: "../../img/xsh_banner.png",
            dec: "学生会是由校党委、市学联领导，由校团委具体指导的群众性组织。本着“全心全意为同学服务”的宗旨，认真服务青年学生，不断加强青年学生思想政治教育,  努力促进和谐校园文化建设，开展丰富多彩的活动。学生会加强了学校党政、职能部门，各学院与同学间的沟通与联系，反应同学们的合理诉求，代表和维护同学们]的正当权益。学生会品牌活动有“四个一”素质提升活动(培养一类文艺爱好、养成一个运动习惯、坚持一项志愿服务、提升-项表达能力)、校园十大歌手、信科杯辩论赛、运动梦想秀“三走”系列主题活动( 走下网络、走出宿舍、走向操场)、运动吉尼斯、主持人大赛、草坪音乐会等校园活动。"
        }, {
            name: "学生科技联合会",
            logo: "../../img/xskjlhh_banner.png",
            dec: "重庆邮电大学学生科技联合会简称学生科联，是校团委直属管辖的九大校级学生组织之一。学生科联以“创新，高效，团结，求实”为总宗旨、“成功与科技相辉映，科联携你我共腾飞”为口号，以“挑战杯”“创青春”竞赛为龙头、“学生科技文化节”“文峰青年大讲堂”“创新创业训练营”“重邮青年说”“学长演播厅”“无线电猎狐大赛”等活动为品牌，积极参与学校创新创业教育和实践工作。此外，本着以服务学生创新创业的重大职责，为了丰富同学们的课余生活以及激发同学们对创新创业和科技竞赛的兴趣，学生科联也不断完善自身并努力做出新的改变。"

        }, {
            name: "学生社团联合会",
            logo: "../../img/xsstlhh.png",
            dec: "重庆邮电大学学生社团联合会在校团委的直接指导下，管理社团工作、服务社团发展的学生组织，旗下管辖着涵盖文学学术、实践服务、艺术文化、爱好兴趣、体育运动等功能丰富、类型兼备的各类学生社团组织。社联共有四个部门，我们坚持立足于社团，服务于社团，发扬民主精神，推动学生社团活动的发展，丰富校园文化生活，弘扬校园主旋律。"
        }, {
            name: "校青年志愿者协会",
            logo: "../../img/qnzyzxh_banner.jpg",
            dec: "重庆邮电大学青年志愿者协会是校团委直属管辖的七大学生组织之一，是富有志愿精神，乐于志愿活动的大学生志愿者的聚集地。青协致力于营造良好志愿氛围，组织统筹校内外各类志愿活动：组织开展全校“三下乡”社会实践活动、“12.5国际志愿者日”志愿周系列活动、“3·5学雷锋月”系列活动、“重庆邮电大学优秀志愿项目评选”、“班级志愿考核”、“天天系列”活动、“周末课堂”志愿活动等相关工作。青年志愿者协会始终秉承“奉献、友爱、互助、进步”的志愿者精神，为陌生人提供方便，为弱势群体奉献爱心，为校园、为社会注入正能量。"
        }, {
            name: "红岩网校工作站",
            logo: "../../img/redrockImg.png",
            dec: redrock
        }, {
            name: "大学生艺术团",
            logo: "../../img/dxsyst_banner.png",
            dec: "重庆邮电大学大学生艺术团是在校团委直接指导管理下的学生艺术团体，肩负组织学校重大文艺活动，代表学校对外联谊，演出和参加省市文艺大赛的重任。秉承“服务同学，锻炼自我”的宗旨，以丰富校园文化生活，陶冶情操，加强与其他院校艺术交流与沟通，为校宣传争光，活跃人文气氛等为前提，要求每个成员在艺术实践中以高标准、严要求的态度约束自己。大学生艺术团由管乐团、民乐团、舞蹈团、合唱团、话剧团、综合部组成。主要承担着我校各项大型演出任务，组织编排各项文艺节目，为有文艺特长的同学搭建良好的交流和展示平台，每个分团都有固定的训练时间和专业指导老师。近年来，大学生艺术团一次次圆满完成学校交给的各项文艺演出任务，并锻炼和培养了一批批艺术人才。为我校大学生文艺素质的培养，树立了一面旗帜。"
        }]
    },
    showList: function() {
        //console.log(wx.createAnimation())
        if (this.data.height == '70rpx') {
            this.setData({
                height: '510rpx'
            })
        } else {
            this.setData({
                height: '70rpx'
            })
        }
    },
    getSelected(e) {
        this.setData({
            selected: e.target.dataset.oname,
            current: e.target.dataset.current
        })
    },
    onChange(e) {
        console.log(e.detail)
        this.setData({
            selected: this.data.orgnazition[e.detail.current].name
        })
    }
})