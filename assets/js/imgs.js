var imgstate=new Object();	
		imgstate={
			display:'none',
			dialogname:'',
			dialogcode:0,
			dialogimgurl:'',
			dialogtext:'',
			dialogdes:'',
			dialogtips:'',
			dataCode:[{
				key:1,
				name:'风光群',
				code:1946,
				imgurl:'./assets/images/china-a1.jpg',
				text:'1.长按图片识别二维码，添加机器人小管家为好友',des:'2.发送以上验证码给小管家，即可被邀请入群',tips:'3.如识别二维码失败，请添加微信号：ReadToLead',
			},{
				key:2,
				name:'航拍群',
				code:1517,
				imgurl:'./assets/images/china-a2.jpg',
			},{
				key:3,
				name:'后期制作群',
				code:1951,
				imgurl:'./assets/images/china-a3.jpg',
			},{
				key:4,
				name:'户外旅行摄影群',
				code:1952,
				imgurl:'./assets/images/china-a4.jpg',
			},{
				key:5,
				name:'纪实群',
				code:1850,
				imgurl:'./assets/images/china-a5.jpg',
			},{
				key:6,
				name:'美食群',
				code:1943,
				imgurl:'./assets/images/china-a6.jpg',
			},{
				key:7,
				name:'人物摄影群',
				code:1948,
				imgurl:'./assets/images/china-a7.jpg',
			},{
				key:8,
				name:'手机摄影群',
				code:5467,
				imgurl:'./assets/images/china-a8.jpg',
			},{
				key:9,
				name:'体育群',
				code:19910202,
				imgurl:'./assets/images/china-a9.jpg',
			},{
				key:10,
				name:'文化摄影群',
				code:20170408,
				imgurl:'./assets/images/china-a10.jpg',
			},{
				key:11,
				name:'创意摄影群',
				code:19940202,
				imgurl:'./assets/images/china-a11.jpg',
			},{
				key:12,
				name:'安徽群',
				code:1934,
				imgurl:'./assets/images/china-b1.jpg',
			},{
				key:13,
				name:'北京群',
				code:1960,
				imgurl:'./assets/images/china-b2.jpg',
			},{
				key:14,
				name:'福建群',
				code:1939,
				imgurl:'./assets/images/china-b3.jpg',
			},{
				key:15,
				name:'甘肃群',
				code:1913,
				imgurl:'./assets/images/china-b4.jpg',
			},{
				key:16,
				name:'广东群',
				code:1834,
				imgurl:'./assets/images/china-b5.jpg',
			},{
				key:17,
				name:'广西群',
				code:1815,
				imgurl:'./assets/images/china-b6.jpg',
			},{
				key:18,
				name:'贵州群',
				code:1812,
				imgurl:'./assets/images/china-b7.jpg',
			},{
				key:19,
				name:'海南群',
				code:1372,
				imgurl:'./assets/images/china-b8.jpg',
			},{
				key:20,
				name:'河北群',
				code:1920,
				imgurl:'./assets/images/china-b9.jpg',
			},{
				key:21,
				name:'河南群',
				code:1922,
				imgurl:'./assets/images/china-b10.jpg',
			},{
				key:22,
				name:'黑龙江群',
				code:1940,
				imgurl:'./assets/images/china-b11.jpg',
			},{
				key:23,
				name:'湖北群',
				code:1824,
				imgurl:'./assets/images/china-b12.jpg',
			},{
				key:24,
				name:'湖南群',
				code:1827,
				imgurl:'./assets/images/china-b13.jpg',
			},{
				key:25,
				name:'吉林群',
				code:1901,
				imgurl:'./assets/images/china-b14.jpg',
			},{
				key:26,
				name:'江苏群',
				code:1932,
				imgurl:'./assets/images/china-b15.jpg',
			},{
				key:27,
				name:'江西群',
				code:'0064',
				imgurl:'./assets/images/china-b16.jpg',
			},{
				key:28,
				name:'辽宁群',
				code:1902,
				imgurl:'./assets/images/china-b17.jpg',
			},{
				key:29,
				name:'内蒙古群',
				code:1905,
				imgurl:'./assets/images/china-b18.jpg',
			},{
				key:30,
				name:'宁夏群',
				code:1914,
				imgurl:'./assets/images/china-b19.jpg',
			},{
				key:31,
				name:'青海群',
				code:1908,
				imgurl:'./assets/images/china-b20.jpg',
			},{
				key:32,
				name:'山东群',
				code:1930,
				imgurl:'./assets/images/china-b21.jpg',
			},{
				key:33,
				name:'山西群',
				code:1924,
				imgurl:'./assets/images/china-b22.jpg',
			},{
				key:34,
				name:'陕西群',
				code:1906,
				imgurl:'./assets/images/china-b23.jpg',
			},{
				key:35,
				name:'上海群',
				code:1933,
				imgurl:'./assets/images/china-b24.jpg',
			},{
				key:36,
				name:'四川群',
				code:1915,
				imgurl:'./assets/images/china-b25.jpg',
			},{
				key:37,
				name:'天津群',
				code:1925,
				imgurl:'./assets/images/china-b26.jpg',
			},{
				key:38,
				name:'西藏群',
				code:1371,
				imgurl:'./assets/images/china-b27.jpg',
			},{
				key:39,
				name:'新疆群',
				code:1904,
				imgurl:'./assets/images/china-b28.jpg',
			},{
				key:40,
				name:'云南群',
				code:1322,
				imgurl:'./assets/images/china-b29.jpg',
			},{
				key:41,
				name:'浙江群',
				code:1938,
				imgurl:'./assets/images/china-b30.jpg',
			},{
				key:42,
				name:'重庆群',
				code:1679,
				imgurl:'./assets/images/china-b31.jpg',
			},{
				key:43,
				name:'安徽大学',
				code:9123,
				imgurl:'./assets/images/china-c1.jpg',
			},{
				key:44,
				name:'北京大学',
				code:9124,
				imgurl:'./assets/images/china-c2.jpg',
			},{
				key:45,
				name:'北京师范大学',
				code:9125,
				imgurl:'./assets/images/china-c3.jpg',
			},{
				key:46,
				name:'东北农业大学',
				code:3306,
				imgurl:'./assets/images/china-c4.jpg',
			},{
				key:47,
				name:'河北传媒大学',
				code:9127,
				imgurl:'./assets/images/china-c5.jpg',
			},{
				key:48,
				name:'河北美术学院',
				code:1944,
				imgurl:'./assets/images/china-c6.jpg',
			},{
				key:49,
				name:'河南财经大学',
				code:6453,
				imgurl:'./assets/images/china-c7.jpg',
			},{
				key:50,
				name:'河南大学',
				code:225588,
				imgurl:'./assets/images/china-c8.jpg',
			},{
				key:51,
				name:'河南工业大学',
				code:20170320,
				imgurl:'./assets/images/china-c9.jpg',
			},{
				key:52,
				name:'湖南农业大学',
				code:9128,
				imgurl:'./assets/images/china-c10.jpg',
			},{
				key:53,
				name:'吉林师范大学',
				code:9131,
				imgurl:'./assets/images/china-c11.jpg',
			},{
				key:54,
				name:'兰州财经大学',
				code:2030,
				imgurl:'./assets/images/china-c12.jpg',
			},{
				key:55,
				name:'兰州大学',
				code:9764,
				imgurl:'./assets/images/china-c13.jpg',
			},{
				key:56,
				name:'聊城大学',
				code:5040,
				imgurl:'./assets/images/china-c14.jpg',
			},{
				key:57,
				name:'清华大学',
				code:9134,
				imgurl:'./assets/images/china-c15.jpg',
			},{
				key:58,
				name:'人民大学',
				code:9135,
				imgurl:'./assets/images/china-c16.jpg',
			},{
				key:59,
				name:'山东青年政治学院',
				code:6020,
				imgurl:'./assets/images/china-c17.jpg',
			},{
				key:60,
				name:'山西农业大学',
				code:3233,
				imgurl:'./assets/images/china-c18.jpg',
			},{
				key:61,
				name:'西南大学',
				code:3121,
				imgurl:'./assets/images/china-c19.jpg',
			},{
				key:62,
				name:'浙江大学',
				code:4030,
				imgurl:'./assets/images/china-c20.jpg',
			},{
				key:63,
				name:'郑州大学',
				code:20170314,
				imgurl:'./assets/images/china-c21.jpg',
			},{
				key:64,
				name:'中国矿业大学',
				code:9133,
				imgurl:'./assets/images/china-c23.jpg',
			},{
				key:65,
				name:'郑州航空工业管理学院',
				code:'0099887',
				imgurl:'./assets/images/china-c22.jpg',
			}],
		};