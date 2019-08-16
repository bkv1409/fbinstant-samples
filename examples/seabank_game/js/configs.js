var configs = function () {

    this.params = {
        INDEX_GRAB: 'GRAB',
        INDEX_SEABANK: 'SEABANK',
        INDEX_CGV: 'CGV',
        INDEX_SHOPEE: 'SHOPEE',

    }

    this.data = {
        GRAB: [
            `Tháng tới là tháng "số hưởng" trong đi lại của bạn. Bạn hiếm khi phải cầm lái, vì có người đưa rước tận nhà, gọi 5 phút là qua. Đọc đến đây chắc đoán được ai sẽ phải đưa rước rồi nhé! `,
            `Bạn chưa có tài xế riêng đúng không? Tháng tới, tài xế riêng sẽ cứ xếp hàng ngay cửa nhà bạn, chẳng phải chờ đợi nhiều.`,
            `Tháng tới có nhiều công chuyện phải đi lại. May thay, bạn lại hay được một người thứ ba thầm lặng “trả giùm” tiền cho, khi là toàn bộ, khi là một phần. Người ta quan tâm bạn nhiều lắm đấy nhé!`
        ],
        SHOPEE: [
            `Bạn hay mua sắm quá tay, dù đã dặn lòng chi tiêu tiết kiệm. Nhưng tháng này, bạn không còn lo cháy túi ngay đầu tháng nữa. Cứ mua sắm gấp 10 lần bình thường đi, tiền bạc sẽ theo đuổi bạn`,
            `Giàu hơn, giàu hơn và giàu hơn! Có thể bạn không kiếm được nhiều hơn, nhưng bạn sẽ “có lộc” trong chi tiêu nhé. Cứ mua đi rồi trời sẽ lo cho`,
            `Chi tiêu ít ỏi sẽ không có may mắn đâu. Nhưng nếu cứ shopping tiền triệu thì bạn lại có thêm lộc lá từ một bên nào đó.`
        ],
        CGV: [
            `Bạn luôn tìm kiếm một nửa lý tưởng? Tháng này là tháng thần Cupid đấy nhé. Cứ la cà rạp phim, sẽ cua được trai đẹp hoặc gái đẹp, đúng với xu hướng giới tính của mình nhé (ưu đãi CGV)`,
            `Một chuyện tình đẹp hơn phim, không gì có thể "đọ" lại độ lãng mạn được. Và để bắt đầu, bạn cần một chiếc vé xem phim đã nhé.`
        ],
        SEABANK: [
            `Tháng tới, may mắn đường tiệc tùng. Có một đại tiệc tưng bừng đợi bạn, chỉ là bạn có muốn tham gia không thôi. Đi tiệc nhớ rủ crush nhé, người ta sẽ thấy bạn rất chu đáo đấy.`,
            `Hầu như tiêu gì, chi gì tháng tới bạn cũng được lợi. Nếu giỏi "hóng hớt", bạn sẽ biết mình nên làm gì để tìm ra may mắn này.`
        ]
    }

    this.bgImg = {
        GRAB: 'bg-2 transaction-ease',
        SHOPEE: 'bg-3 transaction-ease',
        CGV: 'bg-4 transaction-ease',
        SEABANK: 'bg-home transaction-ease',
    }

    this.bgImgExtra = {
        INIT_GAME: 'bg-home transaction-ease',
        EXTRA_PROMOTION: 'bg-5 transaction-ease',
    }
}

