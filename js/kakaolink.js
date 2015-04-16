

// 사용할 앱의 Javascript 키를 설정해 주세요.
Kakao.init('dd40956cd6c121d02637f9f44103a411');

// 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
Kakao.Link.createTalkLinkButton({
container: '#kakao-link-btn',
label: '서동환 ♡ 손유진 저희 결혼합니다.',
image: {
src: 'http://donghwanyujin.github.io/gettingmarried/img/katalk_icon.png',
width: '300',
height: '200'
},
webButton: {
text: '서동환 ♡ 손유진 저희 결혼합니다.',
url: 'http://donghwanyujin.github.io/gettingmarried/' // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
}
});
