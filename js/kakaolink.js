// 사용할 앱의 Javascript 키를 설정해 주세요.
Kakao.init('48d26996831aea00b4cc73e7b14a7873');

// 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
Kakao.Link.createTalkLinkButton({
container: '#kakao-link-btn',
label: '서동환♡손유진<br>저희 결혼합니다<br>5월17일 오후1시30분<br>잠실 더 컨벤션 교통회관 3층 아무르홀',
image: {
src: 'http://donghwanyujin.github.io/gettingmarried/img/katalk_icon.png',
width: '300',
height: '200'
},
webButton: {
text: '보러가기',
url: 'http://donghwanyujin.github.io/gettingmarried/' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
}
});
