// 사용할 앱의 Javascript 키를 설정해 주세요.
Kakao.init('48d26996831aea00b4cc73e7b14a7873');

// 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
Kakao.Link.createTalkLinkButton({
container: '#kakao-link-btn',
label: '서동환♡손유진\n저희 결혼합니다\n5월17일 오후1시30분\n더 컨벤션 교통회관\n3층 아모르홀',
image: {
src: 'http://donghwanyujin.github.io/gettingmarried/img/katalk_icon.png',
width: '300',
height: '200'
},
webButton: {
text: '모바일 청첩장',
url: 'http://donghwanyujin.github.io/gettingmarried/' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
}
});
