function PageTopAnime() {
    // スクロール値を取得
    var scroll = $(window).scrollTop();
    // 200pxスクロールしたら
    if(scroll >= 200){
        // DownMoveというclassを除去して
        $('#page-top').removeClass('DownMove');
        // UpMoveというclass名を追加して出現
        $('#page-top').addClass('UpMove');
    } else {
        // UpMoveというClass名がすでに付与されていたら
        if($('#page-top').hasClass('UpMove')){
            // UpMoveというclass名を除去し
            $('#page-top').removeClass('UpMove')
            // DownMoveというclass名を追加して非表示
            $('#page-top').addClass('DownMove');
        }
    }

    // 画面の高さを取得
    var wH = window.innerHeight;
    // footerの位置を取得
    var footerPos = $('#footer').offset().top;
    if(scroll + wH >= (footerPos +10)) {
        // スクロールの値＋画面の高さからfooterの位置＋1opxを引いた場所を取得し
        var pos = (scroll + wH) - footerPos + 10
        // #page-topに上記の値をCSSのbottomに直接指定してfooter手前で止まるようにする
        $('#page-top').css('bottom', pos);
    } else {
        // UpMoveというclass名がついていたら
        if($('#page-top').hasClass('UpMove')) {
            // したから10pxの位置にページリンクを指定
            $('#page-top').css('bottom', '10px');
        }
    }
}

// 画面をスクロールしたら動かしたい場合の記述
// スクロールした際の動きの関数を呼ぶ
$(window).scroll(function() {
    PageTopAnime();
});

// #page-topをクリックした際の設定　これはOK
$('#page-top').click(function() {
    $('body,html').animate({
        // ページトップまでスクロール
        scrollTop: 0
        // ページトップスクロールの動き。数字が大きいほど遅くなる
        }, 250);
        // リンク自体の無効化
        return false;
});