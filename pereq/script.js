var $win = $(window);

$win.on('load resize', function () {
    var windowWidth = window.innerWidth;

    if (windowWidth < 960) {

        $('.ham').on('click', function () {//.hamをクリックすると
            $('.ham').toggleClass('close');//.hamにcloseクラスを付与(ボタンのアニメーション)
            $('.nav-wrap').fadeToggle(500);//.nav-wrapが0.5秒でフェードイン(メニューのフェードイン)
            $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
        });

        $('a').on('click', function () {//.btn_triggerをクリックすると
            $('.ham').toggleClass('close');//.btn_triggerにcloseクラスを付与(ボタンのアニメーション)
            $('.nav-wrap').fadeToggle(500);//.nav-wrapperが0.5秒でフェードイン(メニューのフェードイン)
            $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
        });
    }
}
);