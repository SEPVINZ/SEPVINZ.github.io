function sayHello(){
  var response = prompt('您好！咱们几位用餐呀？');
  alert('好的，' + response + '位客人, 这边请!');
};



var total = 0;
var orders = [];

function order(item, price, tip) {
            total += price;
            orders.push(item);
            alert(item + '已加入订单！' + tip);
        }

function payBill() {
            var bill = '您点了：';
            for (var i = 0; i < orders.length; i++) {
                bill += orders[i] + " ";
                    }
            bill += '总计：' + total + '元';

            if (confirm(bill + '请结账~')) {
                alert('结账成功！欢迎您再次光临~');
                    }
        }
