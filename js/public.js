//背景音乐
function music(){
			var music = 0;
			if(music < 1){
			var $music = String(window.prompt("  小傻子，如果你不是WIFI建议你别开启背景音乐，虽然很好听吧，\n可是我怕这么费流量的歌曲你听完打死我;\n当然，如果你还是想听，请输入\n方丈我爱你！"));
				//\n是弹窗中的换行 没有分号;
				//String是字符串
			if($music == "方丈我爱你！"){
				document.getElementById('music').src = 'https://music.163.com/outchain/player?type=2&id=484992531&auto=1&height=66';
				alert("我也很爱你啊!!!");
				music++;
				console.log(music);
			}
			else{
				alert("好吧,有WIFI的时候一定要来听听啊，这歌真的不错233");
				
			}
		}
			else{
				alert("你已经点过一次了哦\n放心，歌曲是循环播放");
			}
		}
			
