const template = {
    init_game() {
        return `
            <h1 class="home-title c_00ebff">
                <strong>
                    #Đại tiệc chào hè #SeAbank
                </strong>
            </h1>
            <div class="text-center padding-15">
                <img src="images/home-text.png">
            </div>
            <div class="text-center">
                <img src="images/home-gif.png" class="img-width-75">
            </div>
            <div class="text-center home-text-bottom">
                Không chỉ bật mí vận may,<br/> chơi xong nhận luôn vận may nhé!
            </div>
            <div class="text-center padding-15">
                <a href="#!" class="btn-1 btn-w-75 request-play-ctl" >
                    <b>chơi ngay</b>
                </a>
            </div>
        `;
    },
    result_seabank() {
        return `
        <div class="user-box text-center">
            <b>
                điều may mắn
            </b>
            <br/>
            <b class="user-title">
                sắp đến với <span>trúc</span>
            </b>
        </div>
        <div class="box-content-user">
            <img src="https://via.placeholder.com/100x100">
        </div>
        <div class="box-content">
            <p class="message-result-ctl">
                Tháng tới, may mắn đường tiệc tùng. Có một đại tiệc tưng bừng đợi bạn, chỉ là bạn có muốn tham gia không thôi. Đi tiệc nhớ rủ crush nhé, người ta sẽ thấy bạn rất chu đáo đấy.
            </p>
            <div class="padding-0-15">
                <p class="text-center">
                    <a href="#!" class="btn-1">
                        <b>xem thêm ưu đãi</b>
                    </a>
                </p>
                <div class="flex-button">
                    <div class="flex-left">
                        <a href="#!" class="btn-2 request-play-ctl">
                            <b>thử lại</b>
                        </a>
                    </div>
                    <div class="flex-right">
                        <a href="#!" class="btn-share">
                            <b>chia sẻ</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <img src="images/seabank.png" class="img-responsive">
        </div>
        `
    },
    result_grab() {
        return `
        <div class="user-box text-center">
            <b>
                điều may mắn
            </b>
            <br/>
            <b class="user-title">
                sắp đến với <span>trúc</span>
            </b>
        </div>
        <div class="box-content-user">
            <img src="https://via.placeholder.com/100x100">
        </div>
        <div class="box-content">
            <p class="message-result-ctl">
                Tháng tới là tháng “số hưởng” trong đi lại của bạn. Bạn hiếm khi phải cầm lái, vì có người đưa rước tận nhà, gọi 5 phút là qua. Đọc đến đây chắc đoán được ai sẽ phải đưa rước rồi nhé!
            </p>
            <div class="padding-0-15">
                <p class="text-center">
                    <a href="#!" class="btn-1">
                        <b>xem thêm ưu đãi</b>
                    </a>
                </p>
                <div class="flex-button">
                    <div class="flex-left">
                        <a href="#!" class="btn-2 request-play-ctl">
                            <b>thử lại</b>
                        </a>
                    </div>
                    <div class="flex-right">
                        <a href="#!" class="btn-share">
                            <b>chia sẻ</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <img src="images/grab.png" class="img-responsive">
        </div>
        `;
    },
    result_shopee() {
        return `
        <div class="user-box text-center">
            <b>
                điều may mắn
            </b>
            <br/>
            <b class="user-title">
                sắp đến với <span>trúc</span>
            </b>
        </div>
        <div class="box-content-user">
            <img src="https://via.placeholder.com/100x100">
        </div>
        <div class="box-content">
            <p class="message-result-ctl">
                Tháng tới là tháng “số hưởng” trong đi lại của bạn. Bạn hiếm khi phải cầm lái, vì có người đưa rước tận nhà, gọi 5 phút là qua. Đọc đến đây chắc đoán được ai sẽ phải đưa rước rồi nhé!
            </p>
            <div class="padding-0-15">
                <p class="text-center">
                    <a href="#!" class="btn-1">
                        <b>xem thêm ưu đãi</b>
                    </a>
                </p>
                <div class="flex-button">
                    <div class="flex-left">
                        <a href="#!" class="btn-2 request-play-ctl">
                            <b>thử lại</b>
                        </a>
                    </div>
                    <div class="flex-right">
                        <a href="#!" class="btn-share">
                            <b>chia sẻ</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <img src="images/shopee.png" class="img-responsive">
        </div>
        `;
    },
    result_cgv() {
        return `
        <div class="user-box text-center">
            <b>
                đại tiệc hè
            </b>
            <br/>
            <b class="user-title">
                sắp đến với <span>trúc</span>
            </b>
        </div>
        <div class="box-content-user">
            <img src="https://via.placeholder.com/100x100">
        </div>
        <div class="box-content">
            <p class="message-result-ctl">
                Bạn luôn tìm kiếm một nửa lý tưởng? Tháng này là tháng thần Cupid đấy nhé. Cứ la cà rạp phim, sẽ cua được trai đẹp hoặc gái đẹp, đúng với xu hướng giới tính của mình nhé.
            </p>
            <div class="padding-0-15">
                <p class="text-center">
                    <a href="#!" class="btn-1">
                        <b>xem thêm ưu đãi</b>
                    </a>
                </p>
                <div class="flex-button">
                    <div class="flex-left">
                        <a href="#!" class="btn-2 request-play-ctl">
                            <b>thử lại</b>
                        </a>
                    </div>
                    <div class="flex-right">
                        <a href="#!" class="btn-share">
                            <b>chia sẻ</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
            <img src="images/cgv.png" class="img-responsive">
        </div>
        `;
    },
    extra_promotion() {
        return `
        <div class="user-box text-center">
            <b>
                đại tiệc hè
            </b>
            <br/>
            <b class="user-title">
                dành riêng cho bạn
            </b>
        </div>
        <div class="text-center">
            <img src="images/visa.png" class="img-width-75">
        </div>
        <div class="box-content">
            <p class="title-final">
                <strong>
                    Thanh toán trực tuyến bằng<br/> thẻ SeABank để nhận ưu đãi:
                </strong>
            </p>
            <div class="clear">
                <p>
                    Mua 1 tặng 1 vé xem phim 2D tại CGV
                </p>
                <p>
                    Nhập code giảm ngay 25.000đ tại Grab
                </p>
                <p>
                    Giảm giá lên đến 500.000đ tại Shopee
                </p>
            </div>
            <div class="padding-0-15">
                <p class="text-center">
                    <a href="#!" class="btn-share btn-width-auto btn-share-final">
                        <b>chia sẻ</b>
                    </a>
                </p>
            </div>
        </div>
        <div class="text-right-action">
            <a href="#" class="btn-return">
                Quay lại
            </a>
        </div>
        <div class="text-center">
            <img src="images/dt.png" class="img-responsive">
        </div>
        `;
    }

}

export {template}